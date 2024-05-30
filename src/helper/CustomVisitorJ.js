import MachaJazParser from '@/jasmin/grammar/MachaJazParser.js';
//import MachaJazVisitor from '../translate/grammar/translate/MachaCVisitor.js';
import CompiladorVisitor from '@/grammar/CompiladorVisitor.js';


export default class CustomVisitor extends CompiladorVisitor {

    constructor(){
        super();
        //this.memory = new HashMap();
        this.stack = 1;
        this.locals = 0;
        this.counter = 0;
        this.console = [];
        this.reservadas = {};
        this.alertsgood = [];
        this.consola = document.getElementById('consola');
        this.jaz = "";
       
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
		return !!this.reservadas[reservada_name];
	}

    getVariableIndex(ID) {
        return this.reservadas[ID]? this.reservadas[ID].index: -1;
    }
    getVariableValue(GEULSSI) {
        return  this.reservadas[ID].value;
    }

    
    declaracion(ID, VALUE){
        let defined = this.variableExist(ID);
        if(!defined){
            if(VALUE != undefined){
                this.reservadas[ID] = {index: this.locals, value: VALUE};
                this.jaz +=`\nistore_${this.locals}\n`;
            }else{
                this.reservadas[ID]={
                    index: this.locals,
                    value: undefined,
                };
            }
            this.locals++;
        }else{
            this.addUniqueError(`Error: Repeticion de ${ID} declaracion `)
            this.updateConsole();
        }
        return ID;
    }

    generateLabel(label) {
		return label + this.counter++;
	}
    

    // Visit a parse tree produced by MachaJazParser#file.
    visitFile(ctx) {
        console.log("VISITANDO FILE");
        this.visitChildren(ctx);
        
        return this.jaz;
    }
    // Visit a parse tree produced by MachaJazParser#start.
    visitStart(ctx) {
        console.log("VISITANDO START");
        console.log("VISITANDO 2");
        console.log(this.locals);
        this.visit(ctx.content())
        this.jaz +="\nreturn";
        this.jaz +="\n.end method";
        let titulo = `.class public CodigoJasmin
        .super java/lang/Object
        .method public static main([java/lang/String;)V
        .limit stack ${this.stack}
        ${this.locals ? `.limit locals ${this.locals}\n` : ""}`;

        this.jaz = titulo + this.jaz;
        return this.jaz
    }
    // Visit a parse tree produced by MachaJazParser#content.
    visitContent(ctx) {
        console.log("VISITANDO CONTENT");
        console.log(ctx.getText());
        return this.visitChildren(ctx);
    }
	// Visit a parse tree produced by MachaJazParser#main.
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
        const hasEqualSymbol = ctx.children.some(child => child.type === MachaJazParser.ASIGNACION);
        if (!hasEqualSymbol) {
            this.addUniqueError(`Error de sintaxis: Falta el símbolo "=" en la línea ${this.lineaActual}`);
            return null;
        }
    
        // Validar si hay un número después del identificador
        if (ctx.children.length > 2) {
            const secondChild = ctx.children[1];
            if (secondChild.type !== MachaJazParser.ASIGNACION) {
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
    
       /*
        // Verificar si this.consola está definido antes de usarlo
        if (this.consola instanceof HTMLElement) {
            if (this.memory.has(idToken)) {
                this.addUniqueError(`오모! el identificador "${idToken}" ya está declarado`);
            } else {
                this.memory.set(idToken, value);
            }
        }*/
        let valor = this.visit(ctx.expr());
		const ID = ctx.GEULSSI().getText();
        console.log(ID);
		const INDEX = this.getVariableIndex(ID);
        console.log(INDEX);

		if (INDEX > -1) {
			this.reservadas[ID].value = valor;
			this.jaz += `\nistore_${INDEX}\n`;
		}
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
    // Visit a parse tree produced by MachaJazParser#asignacion.
    visitAsignacion(ctx) {
        console.log('VISITANDO ASINGNACION');
        const idToken = ctx.GEULSSI().getText();
        console.log(idToken);
        const value = ctx.expr() ? this.visit(ctx.expr()) : null;
        // Verificar si el identificador ya está en la memoria
      /*
            this.memory.set(idToken, value);
            console.log(this.memory);
*/
        this.updateConsole();
        return null;
    }
    // Visit a parse tree produced by MachaJazParser#impresion.
    visitImpresion(ctx) {
        console.log('VISTITANDO IMPRESION');
        /*const innerValue = this.visit(ctx.expr()); // Obtener el valor de la expresión a imprimir
        console.log(innerValue);
        this.console.push(`${innerValue}`);
        this.updateConsole();
        return undefined;
*/
		const valor = this.visit(ctx.expr());
		if (valor == "swap" || !isNaN(valor)) {
			this.jaz +=
				"\ninvokestatic java/lang/Integer/toString(I)Ljava/lang/String;";
			this.jaz +=
				"\ngetstatic java/lang/System/out Ljava/io/PrintStream;";
			this.jaz += `\nswap`;
		} else {
			this.stack++;
			this.jaz +=
				"\ngetstatic java/lang/System/out Ljava/io/PrintStream;";
			this.jaz += `\nldc ${valor}`;
		}
		this.jaz +=
			"\ninvokevirtual java/io/PrintStream/println(Ljava/lang/String;)V\n";
	
    }
        
    visitParentesis(ctx) {
        console.log("VISITANDO PARENTESIS");
        let visit = this.visitChildren(ctx)
        return visit[1];
    }
    // Visit a parse tree produced by MachaJazParser#implicitMult.
	visitImplicitMult(ctx) {
        console.log("VISITANDO implimul");
        let results = this.visitChildren(ctx);
        return results[0] * results[1];
      }
  

    visitSujja(ctx) {
        console.log("VISITANDO NUMEROS ");
        console.log(ctx.SUJJA().getText());
        let valor;
        this.stack++;
        if(ctx.getText().includes(".")){
            valor = parseFloat(ctx.getText());
            this.jaz += `\nldc ${valor}`
            return valor;
        }else{
            valor = Number(ctx.getText());
            this.jaz += `\nldc ${valor}`;
            return valor;
        }
    }

	// Visit a parse tree produced by MachaJazParser#string.
	visitString(ctx) {
        console.log("VISITANDO STRING");
        return ctx.getText();
      }
  

    visitSumres(ctx) {
        console.log("VISITANDO ENTRANDO EN LA SUMA");
        const operation_data = this.visitChildren(ctx);
		let simbolo = ctx.operation.type;
		this.stack += 2;
		if (simbolo== MachaJazParser.PLUS) {
			this.jaz += `\niadd\n`;
			return "swap";
		} else {
			this.jaz += `\nisub\n`;
			return "swap";
		}
    }

    visitGeulssi(ctx) {
        console.log("VISITANDO ID");
        const id = ctx.GEULSSI().getText();
       if (this.variableExist(id)){
        this.jaz += `\niload_${this.reservadas[id].index}`;
        return this.reservadas[id].value;
       }
    }

    visitMuldiv(ctx) {
        console.log("VISITANDO MULTIPLICACION");
        //console.log(operation);
        const operation_data = this.visitChildren(ctx);
		let simbolo = ctx.operation.type;
		this.stack += 2;
		if (simbolo == MachaJazParser.GOPSSEM) {
			this.jaz += `\nimul\n`;
			return "swap";
		}

		if (simbolo == MachaJazParser.NANU) {
			this.jaz += `\nidiv\n`;
			return "swap";
		}

		if (simbolo == MachaJazParser.PORCENT) {
			this.jaz += `\nirem\n`;
			return "swap";
		}
    }
    // Visit a parse tree produced by MachaJazParser#incremento.
	visitIncremento(ctx) {
        console.log('VISITA EL INCREMENTO');
        const id = ctx.GEULSSI().getText();
        console.log(id);
        console.log(ctx.DO().length > 0);
		if (this.getVariableIndex(id) > -1) {
			let variable = this.reservadas[id];
			if (ctx.DO().length > 0) {
				this.jaz += `\niinc ${variable.index} 1`;
				variable.value = variable.value + 1;
			} else {
				this.jaz += `\niinc ${variable.index} -1`;
				variable.value = variable.value - 1;
			}
        }
        return this.visitChildren(ctx);
      }

	// Visit a parse tree produced by MachaJazParser#condicionalBucle.
	visitCondicionalBucle(ctx) {{
		console.log("Chained conditional");
		const endIfLabel = this.generateLabel("endIfLabel");
		// How many elements of condiciones array will be skipped
		let skipThreshold = 1;

		// condiciones array contains the metadata of every condition
		const condiciones = [];

		// add if metadata at the start of the condiciones array
		const [ifCondition, ifContent] = this.visit(ctx.condicional());
		condiciones.push({
			instruction: ifCondition,
			content: ifContent,
		});

		// add elif metadata if exists
		if (ctx.condicionalElseIf()) {
			for (let elif of this.visit(ctx.condicionalElseIf())) {
				condiciones.push({
					instruction: elif[0],
					content: elif[1],
					label: this.generateLabel("elifLabel"),
				});
			}
		}

		// add else metadata if exists
		let elseData = null;
		if (ctx.condicionalElse()) {
			skipThreshold++;
			let elseLabel = this.generateLabel("elseLabel");
			const elseContent = this.visit(ctx.condicionalElse());
            console.log(elseContent);
			condiciones.push({
				label: elseLabel,
			});

			elseData = {
				label: elseLabel,
				content: elseContent,
			};
		}

		// Set the end of the If as the last element of the condition array
		condiciones.push({
			label: endIfLabel,
		});

		// Generate translated code
		for (let i = 0; i < condiciones.length - skipThreshold; i++) {
			const condicion = condiciones[i];
			if (condicion.label) {
				this.jaz += `\n${condicion.label}:`;
			}
			const instruction = this.visit(condicion.instruction);
			this.jaz += `\n${instruction} ${condiciones[i + 1].label}`;
			this.visit(condicion.content);
			this.jaz += `\ngoto ${endIfLabel}\n`;
		}
// no estoy segura si es necesario
		if (elseData) {
			this.jaz += `\n${elseData.label}:`;
			this.visit(elseData.content);
		}

		this.jaz += `\n${endIfLabel}:`;
	}
}
    
  
    // Visit a parse tree produced by MachaJazParser#condicionalElseIf.
	visitCondicionalElseIf(ctx) {
        console.log('else if!!!');
        return this.visit(ctx.condicional());
      }
  
  
    // Visit a parse tree produced by MachaJazParser#condicionalElse.
    visitCondicionalElse(ctx) {
        console.log('else!!!!!');
        return ctx.main();
      }
     // Visit a parse tree produced by MachaJazParser#condicional.
	visitCondicional(ctx) {
        console.log('condicional!!!!!');
        
        return [ctx.expr(), ctx.main()]
      }
      // Visit a parse tree produced by MachaJazParser#condicion.
    visitCondicion(ctx) {
        console.log('condion!!! ');
        let [valor_a,valor_b] = this.visit(ctx.expr());
        console.log(ctx.expr());
        let signo= ctx.simbolo.text;
        console.log(signo);
        switch (signo){
            case ">":
				return "if_icmple";

			case "<":
				//2
				return "if_icmpge";

			case ">=":
				return "if_icmplt";

			case "<=":
				// 1
				return "if_icmpgt";

			case "||":
				return valor_a || valor_b;

			case "&&":
				return valor_a && valor_b;

			case "==":
				return "if_icmpne";

			case "!=":
				return "if_icmpeq";

			case "true":
				return true;

			case "false":
				return false;

			default:
				return false;
                
        }
     }

	// Visit a parse tree produced by MachaJazParser#while.
	visitWhile(ctx) {
        console.log('WHILE!!!!');
		const whileStart = this.generateLabel("whileStartLabel");
		const whileEnd = this.generateLabel("whileEndLabel");
		this.jaz += `\n${whileStart}:`;
		const instruction = this.visit(ctx.expr());
		this.jaz += `\n${instruction} ${whileEnd}`;
		this.visit(ctx.main());
		this.jaz += `\ngoto ${whileStart}`;
		this.jaz += `\n${whileEnd}:`;
      }
  
  
	// Visit a parse tree produced by MachaJazParser#for.
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
        return condicion;
      }
  
    

  
    // Método para actualizar la consola con mensajes únicos
    updateConsole() {
        const consola = document.getElementById('consola');
        if (consola) {
            let uniqueMessages = Array.from(new Set(this.console)); // Eliminar mensajes duplicados
            consola.innerHTML = uniqueMessages.join('\n').trim();
        }
    }
}