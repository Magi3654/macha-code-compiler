import CompiladorVisitor from "../grammar/CompiladorVisitor.js";
import CompiladorParser from "../grammar/CompiladorParser.js";
import HashMap from 'hashmap';

export default class CustomVisitor extends CompiladorVisitor {

    constructor(){
        super();
        this.memory = new HashMap();
        this.console = [];
        this.reservadas = {
            geum: [],
			hana: [],
			sam: [],
        };
        this.alertsgood = [];
        this.consola = document.getElementById('consola');
        this.lineaActual=1;
        this.errorSet = new Set();
        this.maxLoopTime = 400;
    }
    // Método para agregar un mensaje de error al conjunto y luego imprimirlo si es único
    addUniqueError(message) {
        // Verifica si el mensaje ya está en el conjunto
        if (!this.errorSet.has(message)) {
            // Si no está, agrégalo al conjunto y luego imprímelo
            this.errorSet.add(message);
            this.console.push(message);
            // Actualiza la consola
            this.updateConsole();
        }
    }

    // Método para imprimir mensajes únicos
    addUniqueMessage(message) {
        // Verifica si el mensaje ya ha sido mostrado
        if (!this.console.includes(message)) {
            // Si no ha sido mostrado, agrégalo y luego imprímelo
            this.console.push(message);
            this.updateConsole();
        }
    }
    variableExist(reservada_name) {
		let isVariableDefined = false;
		for (let key in this.reservadas) {
			if (isVariableDefined) {
				break;
			} else {
				isVariableDefined = !!this.reservadas[key].find(
					(reservada) => this.reservada.id === reservada_name
				);
			}
		}

		return isVariableDefined;
	}

    getVariableType(reservada_name) {
		let reservada_type = undefined;

		for (let key in this.reservadas) {
			for (let reservada of this.reservadas[key]) {
				if (reservada.id == reservada_name) {
					reservada_type = key;
					break;
				}
			}

			if (reservada_type) {
				break;
			}
		}

		return reservada_type;
	}
    getVariableValue(reservada_name, reservada_type) {
        for (let reservada of this.reservadas[reservada_type]) {
            if (reservada.id == reservada_name) {
                return reservada.value;
            }
        }

        return undefined;
    }

    assertTypeWithValue(type, value) {
		let exist = false;
		switch (type) {
			case "geum":
				isValid = /(^[0-9]+$)|(^-[0-9]+$)/.test(value);
				break;

			case "hana":
				isValid = /[0-9]+\.[0-9]+/.test(value);
				break;

			case "sam":
				isValid = /^[a-zA-Z]$/.test(value);
				break;

			default:
				const error = document.getElementById('error');
				const contenedorError = document.getElementById('contenedorError');
				const lineNumber = ctx.start.line; // Obtener el número de línea de inicio

				error.innerHTML += `Syntax error on line ${lineNumber}: El tipo de dato "${type}" no existe. <br>`;
				contenedorError.classList.remove('hidden');
				break;
		}

		return exist;
	}




    // Visit a parse tree produced by CompiladorParser#file.
    visitFile(ctx) {
        console.log("VISITANDO FILE");
        this.visitChildren(ctx);
        
        return [this.reservadas,this.alertsgood];
    }
    // Visit a parse tree produced by CompiladorParser#start.
    visitStart(ctx) {
        console.log("VISITANDO START");
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by CompiladorParser#content.
    visitContent(ctx) {
        console.log("VISITANDO CONTENT");
        console.log(ctx.getText());
        return this.visitChildren(ctx);
    }
	// Visit a parse tree produced by CompiladorParser#main.
	visitMain(ctx) {
        console.log("VISITANDO MAIN");
        console.log(ctx.getText());
       
        return this.visitChildren(ctx);
    }
  
	
    visitValidAssign(ctx) {
        console.log("VISITANDO ASIGNACION VALIDA");
        console.log(ctx.getText());
        const idToken = ctx.GEULSSI(0).getText();
    
        // Validar si el identificador comienza con una letra
        if (!/^[a-zA-Z]/.test(idToken)) {
            this.addUniqueError(`Error: El identificador debe comenzar con una letra en la línea ${this.lineaActual}`);
            return null;
        }
    
        // Validar si hay un "=" en la línea actual
        const hasEqualSymbol = ctx.children.some(child => child.type === CompiladorParser.ASIGNACION);
        if (!hasEqualSymbol) {
            this.addUniqueError(`Error de sintaxis: Falta el símbolo "=" en la línea ${this.lineaActual}`);
            return null;
        }
    
        // Validar si hay un número después del identificador
        if (ctx.children.length > 2) {
            const secondChild = ctx.children[1];
            if (secondChild.type !== CompiladorParser.ASIGNACION) {
                this.addUniqueError(`Error de sintaxis: Asignación inválida en la línea ${this.lineaActual}`);
                return null;
            }
        }
    
        // Validar identificador
        if (!idToken || idToken.length === 0) {
            this.addUniqueError(`Error de sintaxis: Falta identificador en la línea ${this.lineaActual}`);
            return null;
        }
    
        // Obtener el valor de la expresión
        let value = ctx.expr() ? this.visit(ctx.expr()) : '없어';
        
        // Verificar si la expresión es null
        if (value === null) {
            this.addUniqueError(`오모! Falta expresión para la variable "${idToken}"`);
        }
    
        // Validar autoasignación
        if (idToken === value) {
            this.addUniqueError(`Error: La variable "${idToken}" no puede ser asignada a sí misma en la línea ${this.lineaActual}`);
            return null;
        }
    
        // Validar si el identificador contiene operadores
        if (/[\+\-\\/]/.test(idToken)) {
            this.addUniqueError(`Error: "${idToken}" no debe contener operadores en la línea ${this.lineaActual}`);
            return null;
        }
    
        // Validar si el identificador comienza con un número
        if (/^\d/.test(idToken) && ctx.children.length === 1) {
            this.addUniqueError(`Error: El identificador no puede comenzar con un número en la línea ${this.lineaActual}`);
            return null;
        }
    
       
        // Verificar si this.consola está definido antes de usarlo
        if (this.consola instanceof HTMLElement) {
            if (this.memory.has(idToken)) {
                this.addUniqueError(`오모! el identificador "${idToken}" ya está declarado`);
            } else {
                this.memory.set(idToken, value);
            }
        }
    
        this.updateConsole();
        return null;
    }
    
    
    visitInvalidAssign(ctx) {
        console.log("VISITANDO ASIGNACION INVALIDA");

        if (ctx.GEULSSI) {
            const idToken = ctx.GEULSSI().getText();
            if (/[\+\-\\/]/.test(idToken)) {
                this.addUniqueError(`Error: "${idToken}" no debe contener operadores en la línea ${this.lineaActual}`);
            } else if (/^\d/.test(idToken)) {
                this.addUniqueError(`Error: El identificador no puede comenzar con un número en la línea ${this.lineaActual}`);
            } else {
                this.addUniqueError(`Error de sintaxis: Declaración de variable incompleta en la línea ${this.lineaActual}`);
            }
        } else {
            this.addUniqueError(`Error de sintaxis: Declaración de variable incorrecta en la línea ${ctx.start.line}`);
        }
        return null;
    }
    // Visit a parse tree produced by CompiladorParser#asignacion.
    visitAsignacion(ctx) {
        console.log('VISITANDO ASINGNACION');
        const idToken = ctx.GEULSSI().getText();
        console.log(idToken);
        const value = ctx.expr() ? this.visit(ctx.expr()) : null;
        // Verificar si el identificador ya está en la memoria
      
            this.memory.set(idToken, value);
            console.log(this.memory);

        this.updateConsole();
        return null;
    }
    // Visit a parse tree produced by CompiladorParser#impresion.
    visitImpresion(ctx) {
        console.log('VISTITANDO IMPRESION');
        const innerValue = this.visit(ctx.expr()); // Obtener el valor de la expresión a imprimir
        console.log(innerValue);
        this.console.push(`${innerValue}`);
        this.updateConsole();
        return undefined;
    }
        
    visitParentesis(ctx) {
        console.log("VISITANDO PARENTESIS");
        let visit = this.visitChildren(ctx);
        return visit[1];
    }
    // Visit a parse tree produced by CompiladorParser#implicitMult.
	visitImplicitMult(ctx) {
        console.log("VISITANDO implimul");
        let results = this.visitChildren(ctx);
        return results[0] * results[1];
      }
  

    visitSujja(ctx) {
        console.log("VISITANDO NUMEROS ");
        console.log(ctx.SUJJA().getText());
        return parseInt(ctx.SUJJA().getText());
    }

	// Visit a parse tree produced by CompiladorParser#string.
	visitString(ctx) {

        return ctx.getText();
      }
  

    visitSumres(ctx) {
        console.log("VISITANDO ENTRANDO EN LA SUMA");
        const left = this.visit(ctx.expr(0));
		console.log(left);
		const right = this.visit(ctx.expr(1));
		console.log(right);
		if (ctx.operation.type === CompiladorParser.DO) return left + right;
		return left - right;
    }

    visitGeulssi(ctx) {
        console.log("VISITANDO ID");
        const id = ctx.GEULSSI().getText();
       
        if (!this.memory.has(id)) {
            this.addUniqueMessage(`Error: La variable "${id}" no ha sido declarada en la línea ${this.lineaActual}`);
            return null;
        }

        return this.memory.get(id);
    }

    visitMuldiv(ctx) {
        console.log("VISITANDO MULTIPLICACION");
        //console.log(operation);
        const left = this.visit(ctx.expr(0));
		console.log(left);
		const right = this.visit(ctx.expr(1));
		console.log(right);
        if (ctx.operation.type === CompiladorParser.GOPSSEM)  {
            if (right === 0) {
                this.console.push("오모! División por cero.");
                this.updateConsole();
                return null;
            }
            return left * right ;
        }
        if(ctx.operation.type === CompiladorParser.PORCENT){
            return left % right;
        }
            
		return Math.floor(left / right);
    }
    // Visit a parse tree produced by CompiladorParser#incremento.
	visitIncremento(ctx) {
        console.log('VISITA EL INCREMENTO');
        const id = ctx.GEULSSI().getText();
        console.log(id);
        const pr = this.getVariableType(id);
        
        if (pr){
            let reservada = this.reservadas[pr].find((reservada) => reservada.id === id );
            if (ctx.DO().length > 0){
                reservada.value = reservada.value + 1;
            }else{
                reservada.value = reservada.value - 1 ;
            }
        }
        return this.visitChildren(ctx);
      }

	// Visit a parse tree produced by CompiladorParser#condicionalBucle.
	visitCondicionalBucle(ctx) {
        console.log('condicional de bucle~!!!!!!');
        let siExiste= this.visit(ctx.condicional())
        //console.log(siExiste);
        if (!siExiste){
            const elseIf= ctx.condicionalElseIf();
            let siExiste=false;
            for(let i=0; i<elseIf.length; i++){
                siExiste=this.visit(elseIf[i]);
                if (siExiste)break;
            }
            //console.log(ctx.condicionalElse());
            if(!siExiste&&ctx.condicionalElse()){
				this.visit(ctx.condicionalElse())
			} 
         }
      return null;
    }
    
  
    // Visit a parse tree produced by CompiladorParser#condicionalElseIf.
	visitCondicionalElseIf(ctx) {
        console.log('else if!!!');
        return this.visit(ctx.condicional());
      }
  
  
    // Visit a parse tree produced by CompiladorParser#condicionalElse.
    visitCondicionalElse(ctx) {
        console.log('else!!!!!');
        this.visit(ctx.main());
        return null;
      }
     // Visit a parse tree produced by CompiladorParser#condicional.
	visitCondicional(ctx) {
        console.log('condicional!!!!!');
        if(!ctx.expr()) return false
        
        let res_condicion = this.visit(ctx.expr());
        if (res_condicion){
            this.visit(ctx.main());
        }
        return res_condicion;
      }
      // Visit a parse tree produced by CompiladorParser#condicion.
    visitCondicion(ctx) {
        console.log('condion!!! ');
        let [valor_a,valor_b] = this.visit(ctx.expr());
        console.log(ctx.expr());
        let signo= ctx.simbolo.text;
        console.log(signo);
        switch (signo){
            case '>':
                    return  valor_a > valor_b;
                   
            case '<':
                    return valor_a < valor_b;
                    
            case '>=':
                    return valor_a >= valor_b;
                    
            case '<=':
                    return valor_a <= valor_b;
                    
            case '||':
                    return valor_a || valor_b;
                    
            case '&&':
                    return valor_a && valor_b;
                    
            case '==':
                    return valor_a == valor_b;
            case '!=':
                    return valor_a != valor_b;
            case 'true':
                    return true;
            case 'false':
                    return false;
            default:
                   return false;
                
        }
     }

	// Visit a parse tree produced by CompiladorParser#while.
	visitWhile(ctx) {
        console.log('WHILE!!!!');
        if(!ctx.expr()) return false;
        let condicion = this.visit(ctx.expr());
        let desempeno = performance.now();
        while(condicion){
            this.visit(ctx.main());
            condicion = this.visit(ctx.expr());
            if (performance.now()- desempeno > this.maxLoopTime){
                break;
            }
        }
        return condicion;
      }

      // Visit a parse tree produced by CompiladorParser#for.
	visitFor(ctx) {
        console.log('FOOOOOR');
        if(!ctx.declaracion()) return false;
        if(!ctx.expr()) return false;
        if(!ctx.incremento()) return false;

        this.visit(ctx.declaracion());
        let condicion = this.visit(ctx.expr());
        let desempeno = performance.now();
        while(condicion){
            this.visit(ctx.main());
            this.visit(ctx.incremento());
            condicion = this.visit(ctx.expr());

            if(performance.now() - desempeno > this.maxLoopTime){
                break;
            }
        }
        return condicion
      }
  
  
    

  
    // Método para actualizar la consola con mensajes únicos
    updateConsole(){
        console.log("Printing");
        const consola = document.getElementById('consola');
        if (consola) {
            let uniqueMessages = Array.from(new Set(this.console)); // Eliminar mensajes duplicados
            consola.innerHTML = uniqueMessages.join('\n').trim();
        }
    }
}