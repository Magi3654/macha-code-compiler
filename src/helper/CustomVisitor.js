import CompiladorVisitor from "../grammar/CompiladorVisitor.js";
import CompiladorParser from "../grammar/CompiladorParser.js";
import HashMap from 'hashmap';

// This class defines a complete generic visitor for a parse tree produced by CompiladorParser.

export default class CustomVisitor extends CompiladorVisitor {

	constructor(){
		super();
		this.memory = new HashMap();
		this.alerts = [];
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

	
	// Visit a parse tree produced by CompiladorParser#declaracion.
	visitDeclaracion(ctx) {
		const id = ctx.GEULSSI() ? ctx.GEULSSI().getText() : null;
		let value = null;

		const consola = document.getElementById('consola');

		if (ctx.expr()) {
			value = this.visit(ctx.expr());
		}

		if (consola) {
			if (/[\+\-\\/]/.test(id)) {
				this.alerts.push(`오모!"${id}" no debe contener operadores`);
			} else if (this.memory.has(id)) {
				this.alerts.push(`오모! el identificador "${id}" ya está declarado`);
			} else if (/^[0-9]+/.test(id)) {
				this.alerts.push("오모! el identificador contiene números, intenta de nuevo.");
			} else {
				this.memory.set(id, value);
				this.alerts.push(`대박! todo esta en orden. Variable "${id}" declarada con valor ${value}`);
			}
			consola.innerHTML = `${this.alerts.join('\n')}`;
			
		}
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
		const right = this.visit(ctx.expr(1));
		if (ctx.op.type === CompiladorParser.ADD) return left + right;
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
		const right = this.visit(ctx.expr(1));
		if (ctx.op.type === CompiladorParser.MULDIV) return left * right ;
		return Math.floor(left / right);
	}



}