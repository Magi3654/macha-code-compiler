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
        this.lineaActual=1;
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
        if (!/^[a-zA-Z]/.test(idToken)) {
            this.alerts.push(`Error: El identificador debe comenzar con una letra en la línea ${this.lineaActual}`);
            return null;
        }
/*
        // Validar si el identificador es un valor como "geuma20"
        if (/^[a-zA-Z][a-zA-Z0-9]*$/.test(idToken)) {
        const num = parseInt(idToken.substring(1));
        if (isNaN(num) || num <= 0) {
            this.alerts.push(`Error: El valor "${idToken}" no es un número entero positivo en la línea ${this.lineaActual}`);
            return null;
        }
    }*/
        // Validar si hay un "=" en la línea actual
        const hasEqualSymbol = ctx.children.some(child => child.type === CompiladorParser.ASIGNACION);
        if (!hasEqualSymbol) {
            this.alerts.push(`Error de sintaxis: Falta el símbolo "=" en la línea ${this.lineaActual}`);
            return null;
        }

        // Validar si hay un número después del identificador
        if (ctx.children.length > 2) {
            const secondChild = ctx.children[1];
            if (secondChild.type !== CompiladorParser.ASIGNACION) {
                this.alerts.push(`Error de sintaxis: Asignación inválida en la línea ${this.lineaActual}`);
                return null;
            }
        }
        /// Validar identificador
        if (!idToken || idToken.length === 0) {
            this.alerts.push(`Error de sintaxis: Falta identificador en la línea ${this.lineaActual}`);
            return null;
        }
       
        //console.log(ctx.expr());
    
        let value = ctx.expr() ? ctx.expr().getText() : '';
    
        // Obtener la expresión asociada con la asignación
        
        // Verificar si la expresión es null
        if (value === null) {
            console.log("La expresión es null");
            // Agregar una alerta si la expresión está ausente
            //this.alerts.push(`오모! Falta expresión para la variable "${idToken}"`);
        } else {
            // Imprimir el contexto de la expresión
            //console.log("Contexto de la expresión:", exprCtx);
    
            // Evaluar la expresión asociada con la asignación
           // console.log(value);
            // Verificar si el valor de la expresión es null
            if (value === null) {
                console.log("El valor de la expresión es null");
                // Agregar una alerta si el valor de la expresión es null
                this.alerts.push(`오모! La expresión para la variable "${idToken}" se evaluó como null`);
            }
        }
        
        // Validar autoasignación
        if (idToken === value) {
            
            this.alerts.push(`Error: La variable "${idToken}" no puede ser asignada a sí misma en la línea ${this.lineaActual}`);
            return null;
        }
    
        // Validar si el identificador contiene operadores
        if (/[\+\-\\/]/.test(idToken)) {
            this.alerts.push(`Error: "${idToken}" no debe contener operadores en la línea ${this.lineaActual}`);
            return null;
        }
    
        // Validar si el identificador comienza con un número
        if (/^\d/.test(idToken) && ctx.children.length === 1) {
            this.alerts.push(`Error: El identificador no puede comenzar con un número en la línea ${this.lineaActual}`);
            return null;
        }
    
        // Actualizar this.alertsgood si la asignación es válida
        if (!this.memory.has(idToken)) {
            this.alerts.push(`대박! Variable "${idToken}" declarada con valor ${value}`);
        }
    
        // Verificar si this.consola está definido antes de usarlo
        if (this.consola instanceof HTMLElement) {
            if (this.memory.has(idToken)) {
                this.alerts.push(`오모! el identificador "${idToken}" ya está declarado`);
            } else {
                this.memory.set(idToken, value);
                this.alerts.push(`대박! todo esta en orden. Variable "${idToken}" declarada con valor ${value}`);
            }
        }
        
    
        this.updateConsole();
        return null;
    }
    
    
    visitInvalidAssign(ctx) {
        console.log("VISITANDO ASIGNACION INVALIDA");
        
        // Verificar si el token GEULSSI existe en el contexto
        if (ctx.GEULSSI) {
            const idToken = ctx.GEULSSI().getText(); // Obtener el texto del token GEULSSI

            if (/[\+\-\\/]/.test(idToken)) {
                this.alerts.push(`Error: "${idToken}" no debe contener operadores en la línea ${this.lineaActual}`);
            } else if (/^\d/.test(idToken)) {
                this.alerts.push(`Error: El identificador no puede comenzar con un número en la línea ${this.lineaActual}`);
            } else {
                // Si no hay error de sintaxis específico, informamos sobre la declaración incompleta
                this.alerts.push(`Error de sintaxis: Declaración de variable incompleta en la línea ${this.lineaActual}`);
            }
        } else {
            // Si no se encontró el token GEULSSI, hay un error de sintaxis general
            this.alerts.push(`Error de sintaxis: Declaración de variable incorrecta en la línea ${ctx.start.line}`);
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
       
        if (!this.memory.has(id)) {
            this.alerts.push(`Error: La variable "${id}" no ha sido declarada en la línea ${this.lineaActual}`);
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
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
                this.alerts.push("오모! División por cero.");
                this.updateConsole();
                return null;
            }return left * right ;}
            
		return Math.floor(left / right);
    }
    // Visit a parse tree produced by CompiladorParser#asignacion.
	visitAsignacion(ctx) {
        const idToken = ctx.GEULSSI().getText();
        const value = ctx.expr() ? this.visit(ctx.expr()) : null;
        
        // Verificar si el identificador ya está en la memoria
        if (this.memory.has(idToken)) {
            this.alerts.push(`Error: El identificador "${idToken}" ya ha sido declarado.`);
        } else {
            this.memory.set(idToken, value);
            this.alertsgood.push(`Variable "${idToken}" asignada con valor ${value}`);
        }

        this.updateConsole();
        return null;
	
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
            consola.innerText = alertMessages.trim();
        }
    }
}