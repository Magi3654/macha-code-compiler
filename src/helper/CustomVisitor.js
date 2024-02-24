import CompiladorVisitor from "../grammar/CompiladorVisitor.js";
import CompiladorParser from "../grammar/CompiladorParser.js";
import HashMap from 'hashmap';

// This class defines a complete generic visitor for a parse tree produced by CompiladorParser.

export default class CustomVisitor extends CompiladorVisitor {

	constructor(){
		super();
		this.memory = new HashMap();
		this.alerts = [];
		this.alertsgood =[];
		this.consola = document.getElementById('consola');
	}
	// Visit a parse tree produced by CompiladorParser#file.
	visitFile(ctx) {
		
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CompiladorParser#start.
	visitStart(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CompiladorParser#content.
	visitContent(ctx) {
	  return this.visitChildren(ctx);
	}
	// Visit a parse tree produced by CompiladorParser#validAssign.
	visitValidAssign(ctx) {
		const idToken = ctx.GEULSSI().getText();
		if (!idToken) {
			this.alerts.push("오모! Declaración de variable incompleta");
			return null;
		}
		let value = 0;

		

		if (ctx.expr()) {
			value = this.visit(ctx.expr());
		}
		console.log(value);
		if (this.consola) {
			if (/[\+\-\\/]/.test(idToken)) {
				this.alerts.push(`오모!"${idToken}" no debe contener operadores`);
			} else if (this.memory.has(idToken)) {
				this.alerts.push(`오모! el identificador "${idToken}" ya está declarado`);
			} else if (/^\d/.test(idToken)) {
				this.alerts.push("오모! el identificador no puede comenzar con un número");
			} else if (idToken !== null) { // Verificar si id no es nulo
				this.memory.set(idToken, value);
				this.alertsgood.push(`대박! todo esta en orden. Variable "${idToken}" declarada con valor ${value}`);
			}
			this.consola.innerHTML += `${this.alerts.join('\n')}`;
			this.consola.innerHTML += `${this.alertsgood.join('\n')}`;
		}
		return null;
	}
  
  
	  // Visit a parse tree produced by CompiladorParser#invalidAssign.
	  visitInvalidAssign(ctx) {
		this.alerts.push("오모! Declaración de variable invalida");
		 this.consola.innerHTML = `${this.alerts.join('\n')}`
		return null;

	}
  
  
	// Visit a parse tree produced by CompiladorParser#expr.
	visitExpr(ctx) {
	  return this.visitChildren(ctx);
	}
	// Visit a parse tree produced by CompiladorParser#parentesis.
	visitParentesis(ctx) {
		return this.visit(ctx.expr());
	  }
  
  
	  // Visit a parse tree produced by CompiladorParser#sujja.
	visitSujja(ctx) {
		return parseInt(ctx.SUJJA().getText());
	  }
  
  
	  // Visit a parse tree produced by CompiladorParser#sumres.
	visitSumres(ctx) {
		const left = this.visit(ctx.expr(0));
		console.log(left);
		const right = this.visit(ctx.expr(1));
		console.log(right);
		if (ctx.operation.type === CompiladorParser.DO) return left + right;
		return left - right;
	  }
  
  
	  // Visit a parse tree produced by CompiladorParser#impmulti.
	visitImpmulti(ctx) {
		let results = this.visitChildren(ctx);
		return results[0] * results[1];
		
	  }
  
  
	  // Visit a parse tree produced by CompiladorParser#geulssi.
	visitGeulssi(ctx) {
		const id = ctx.GEULSSI().getText();
		if(this.memory.has(id)) return this.memory.get(id);
		return 0;
	  }
  
  
	  // Visit a parse tree produced by CompiladorParser#muldiv.
	visitMuldiv(ctx) {
		const left = this.visit(ctx.expr(0));
		console.log(left);
		const right = this.visit(ctx.expr(1));
		console.log(right);
		if (ctx.operation.type === CompiladorParser.GOPSSEM) return left * right ;
		return Math.floor(left / right);
	}



}