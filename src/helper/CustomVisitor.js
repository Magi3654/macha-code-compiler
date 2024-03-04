import CompiladorVisitor from "../grammar/CompiladorVisitor.js";
import CompiladorParser from "../grammar/CompiladorParser.js";
import HashMap from 'hashmap';

export default class CustomVisitor extends CompiladorVisitor {

    constructor(){
        super();
        this.memory = new HashMap();
        this.alerts = [];
        this.alertsgood = [];
        this.consola = document.getElementById('consola');
    }
    // Visit a parse tree produced by CompiladorParser#file.
    visitFile(ctx) {
        //console.log("VISITANDO FILE");
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by CompiladorParser#start.
    visitStart(ctx) {
        //console.log("VISITANDO START");
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by CompiladorParser#content.
    visitContent(ctx) {
        //console.log("VISITANDO CONTENT");
        return this.visitChildren(ctx);
    }
	// Visit a parse tree produced by CompiladorParser#main.
	visitMain(ctx) {
        //console.log("VISITANDO MAIN");
        return this.visitChildren(ctx);
    }
  
	
    visitValidAssign(ctx) {
        console.log("VISITANDO ASIGNACION VALIDA");
        const idToken = ctx.GEULSSI().getText();
    
        // Verificar si se proporcionó un identificador válido
        if (!idToken || idToken.length === 0) {
            this.alerts.push("오모! Declaración de variable incompleta");
            return null;
        }
    
        let value = 0;
    
        // Obtener la expresión asociada con la asignación
        const exprCtx = ctx.expr();
    
        // Verificar si la expresión es null
        if (exprCtx === null) {
            console.log("La expresión es null");
            // Agregar una alerta si la expresión está ausente
            this.alerts.push(`오모! Falta expresión para la variable "${idToken}"`);
        } else {
            // Imprimir el contexto de la expresión
            console.log("Contexto de la expresión:", exprCtx.getText());
    
            // Evaluar la expresión asociada con la asignación
            value = this.visit(exprCtx);
    
            // Verificar si el valor de la expresión es null
            if (value === null) {
                console.log("El valor de la expresión es null");
                // Agregar una alerta si el valor de la expresión es null
                this.alerts.push(`오모! La expresión para la variable "${idToken}" se evaluó como null`);
            }
        }
    
        // Actualizar this.alertsgood si la asignación es válida
        if (!this.memory.has(idToken) && !/[\+\-\\/]/.test(idToken) && !/^\d/.test(idToken)) {
            this.alertsgood.push(`대박! Variable "${idToken}" declarada con valor ${value}`);
        }
    
        // Verificar si this.consola está definido antes de usarlo
        if (this.consola instanceof HTMLElement) {
            if (/[\+\-\\/]/.test(idToken)) {
                this.alerts.push(`오모!"${idToken}" no debe contener operadores`);
            } else if (this.memory.has(idToken)) {
                this.alerts.push(`오모! el identificador "${idToken}" ya está declarado`);
            } else if (/^\d/.test(idToken)) {
                this.alerts.push("오모! el identificador no puede comenzar con un número");
            } else { // No es necesario verificar si idToken !== null
                this.memory.set(idToken, value);
                this.alertsgood.push(`대박! todo esta en orden. Variable "${idToken}" declarada con valor ${value}`);
            }
        }
    
        this.updateConsole();
        return null;
    }
    
    
    visitInvalidAssign(ctx) {
        console.log("VISITANDO ASIGNACION INVALIDA");
        this.alerts.push("오모! Declaración de variable invalida");
    
        // Manejar casos específicos y actualizar this.alerts
        // Agregar mensajes específicos según la razón de la asignación inválida
        const idToken = ctx.GEULSSI().getText();
        if (/[\+\-\\/]/.test(idToken)) {
            this.alerts.push(`오모!"${idToken}" no debe contener operadores`);
        } else if (/^\d/.test(idToken)) {
            this.alerts.push("오모! el identificador no puede comenzar con un número");
        }
    
        this.updateConsole();
        return null;
    }
    
    visitParentesis(ctx) {
        //console.log("VISITANDO PARENTESIS");
        return this.visit(ctx.expr());
    }

    visitSujja(ctx) {
        console.log("VISITANDO NUMEROS ");
        return parseInt(ctx.SUJJA().getText());
    }

    visitSumres(ctx) {
        //console.log("VISITANDO ENTRANDO EN LA SUMA");
        const left = this.visit(ctx.expr(0));
		console.log(left);
		const right = this.visit(ctx.expr(1));
		console.log(right);
		if (ctx.operation.type === CompiladorParser.DO) return left + right;
		return left - right;
    }

    visitImpmulti(ctx) {
        //console.log("VISITANDO MULTI IMPLICITA");
        let results = this.visitChildren(ctx);
        return results[0] * results[1];
    }

    visitGeulssi(ctx) {
        console.log("VISITANDO ID");
        const id = ctx.GEULSSI().getText();
        if (this.memory.has(id)) return this.memory.get(id);
        return 0;
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
                this.alerts.push("오모! División por cero.");
                this.updateConsole();
                return null;
            }return left * right ;}
            
		return Math.floor(left / right);
    }
    // Visit a parse tree produced by CompiladorParser#asignacion.
	visitAsignacion(ctx) {
	  return this.visitChildren(ctx);
	}
    visitDdaeng(ctx) {
		console.log("VISITANDO ERRROR");
        this.alerts.push( ` 땡 ! Error de sintaxis en línea ${ctx.start.line}`);
        this.updateConsole();
        return this.visitChildren(ctx);
    }


    updateConsole() {
        const consola = document.getElementById('consola');
        if (consola) {
			
            let alertMessages = "";
            if (this.alerts.length > 0) {
                alertMessages += `${this.alerts.join('\n')}\n`;
            }
            if (this.alertsgood.length > 0) {
                alertMessages += `${this.alertsgood.join('\n')}\n`;
            }
            consola.innerText = alertMessages.trim();
        }
    }
}