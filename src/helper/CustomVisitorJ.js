import MachaJazParser from '@/jasmin/grammar/MachaJazParser.js';
//import MachaJazVisitor from '../translate/grammar/translate/MachaCVisitor.js';
import CompiladorVisitor from '@/grammar/CompiladorVisitor.js';
import { Gudea } from 'next/font/google';


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
    
    variableExist(reservada_name) {
        return !!this.reservadas[reservada_name];
    }

    getVariableIndex(GEULSSI) {
        console.log(this.reservadas[GEULSSI]);
        
        return this.reservadas[GEULSSI] ? this.reservadas[GEULSSI].index : -1;
    }

    getVariableValue(GEULSSI) {
        return this.reservadas[GEULSSI].value;
    }

    declaracion(GEULSSI, VALUE){
        let defined = this.variableExist(GEULSSI);
        if (!defined) {
            if (VALUE !== undefined) {
                this.reservadas[GEULSSI] = { index: this.locals, value: VALUE };
                this.jaz += `\nistore_${this.locals}\n`;
            } else {
                this.reservadas[GEULSSI] = {
                    index: this.locals,
                    value: undefined,
                };
            }
            this.locals++;
        } else {
            this.addUniqueError(`Error: Repeticion de ${GEULSSI} declaracion`);
            this.updateConsole();
        }
        return GEULSSI;
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
        this.visit(ctx.content());
        this.jaz += "\nreturn";
        this.jaz += "\n.end method";
        let titulo = `.class public CodigoJasmin
        .super java/lang/Object
        .method public static main([Ljava/lang/String;)V
        .limit stack ${this.stack}
        .limit locals ${this.locals}\n`;
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
        
		const ID = ctx.GEULSSI().getText();
		const VARIABLE_PATTERN = /^[A-Za-z]([A-Za-z0-9-_]+)?/;
		const VALUE = ctx.expr() ? this.visit(ctx.expr()) : undefined;

		if (VARIABLE_PATTERN.test(ID)) {
			return this.declaracion(ID, VALUE);
		} 

			return ID;
		}
        
    
    
    visitInvalidAssign(ctx) {
        console.log("VISITANDO ASIGNACION INVALIDA");

        if (ctx.GEULSSI) {
            const idToken = ctx.GEULSSI().getText();
            if (/[\+\-\\/]/.test(idToken)) {
               // this.addUniqueError(`Error: "${idToken}" no debe contener operadores en la línea ${this.lineaActual}`);
            } else if (/^\d/.test(idToken)) {
               // this.addUniqueError(`Error: El identificador no puede comenzar con un número en la línea ${this.lineaActual}`);
            } else {
               // this.addUniqueError(`Error de sintaxis: Declaración de variable incompleta en la línea ${this.lineaActual}`);
            }
        } else {
           // this.addUniqueError(`Error de sintaxis: Declaración de variable incorrecta en la línea ${ctx.start.line}`);
        }
        return null;
    }
    // Visit a parse tree produced by MachaJazParser#asignacion.
    visitSimpleAssign(ctx) {
        console.log('VISITANDO ASINGNACION');
        const valor = this.visit(ctx.expr());
        const GEULSSI = ctx.GEULSSI().getText();
        console.log(`Asignando a ${GEULSSI} el valor ${valor}`);
        const INDEX = this.getVariableIndex(GEULSSI);
        console.log(`Índice encontrado: ${INDEX}`);

        if (INDEX > -1) {
            if (this.reservadas[GEULSSI]) {
                this.reservadas[GEULSSI].value = valor;
                this.jaz += `\nistore_${INDEX}\n`;
            } else {
                console.error(`Error: La variable ${GEULSSI} no ha sido declarada`);
            }
        } else {
            console.error(`Error: No se pudo encontrar el índice de ${GEULSSI}`);
        }
    }

    // Visit a parse tree produced by MachaJazParser#sumarizerAssign.
	visitSumarizerAssign(ctx) {
        console.log("Assign");
		
		const ID = ctx.GEULSSI().getText();
		const INDEX = this.getVariableIndex(ID);
		const OPERAND = ctx.SUMARIZER().getText();

		if (INDEX > -1) {
			
			this.jaz += `\niload_${INDEX}`;
			switch (OPERAND) {
				case '+=':
					this.jaz += '\niadd';
					break;
				
				case '-=':
					this.jaz += '\nisub';
					break;

				case '*=':
					this.jaz += '\nimul';
					break;

				case '/=':
					this.jaz += '\nidiv';
					break;

				case '%=':
					this.jaz += '\nirem';
					break;
			}
			this.jaz += `\nistore_${INDEX}\n`;
		}
      }
    // Visit a parse tree produced by MachaJazParser#impresion.
    visitImpresion(ctx) {
        console.log('VISTITANDO IMPRESION');
        
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

    // Visit a parse tree produced by CompiladorParser#compando.
	visitCompando(ctx) {
        console.log("COMPARACION");
		// this.visit(ctx.value());
		let [first_val, second_val] = this.visit(ctx.expr());
		
		let symbol = ctx.simbolo.text;
		switch (symbol) {
			
			case "||":
				return first_val || second_val;

			case "&&":
				return first_val && second_val;

			default:
				return false;
		}
      }

    visitGeulssi(ctx) {
        console.log("VISITANDO GEULSSI");
        const GEULSSI = ctx.GEULSSI().getText();
        if (this.variableExist(GEULSSI)) {
            this.jaz += `\niload_${this.reservadas[GEULSSI].index}`;
            return this.reservadas[GEULSSI].value;
        } else {
           // this.addUniqueError(`Error: Variable no declarada "${GEULSSI}"`);
            return null;
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
        const GEULSSI = ctx.GEULSSI().getText();
        console.log(GEULSSI);
        console.log(ctx.DO().length > 0);
		if (this.getVariableIndex(GEULSSI) > -1) {
			let variable = this.reservadas[GEULSSI];
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