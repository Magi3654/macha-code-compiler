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
		const id  = ctx.GEULSSI() ? ctx.GEULSSI().getText() : null;
		const value = 0;

		//regexInicio=/^[a-zA-Z]/;
		const consola = document.getElementById('consola');
		const alerts=[];
		
		console.log(id);
		if (consola) {
			
				if (/[\+\-\\/]/.test(id)) {
					alerts.push(`"${id}" no debe contener operadores`);
				} else if (this.memory.has(id)) {
					alerts.push(`Ups! el identificador "${id}" ya está declarado`);
				} else if (/^[0-9]+/.test(id)) {
					alerts.push("Ups! el identificador contiene números, intenta de nuevo.");
				} else {
					this.memory.set(id, value);
					alerts.push("대박!");
				}
			
			// Convertir el arreglo de alertas a una cadena y mostrarlo en el textarea
			consola.innerHTML = `${alerts.join('\n')}`;
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
		return parseInt(ctx.GEULSSI().getText());
	  }
  
  
	  // Visit a parse tree produced by CompiladorParser#sumres.
	visitSumres(ctx) {
		const left = this.visit(ctx.expr(0));
		const right = this.visit(ctx.expr(1));
		if (ctx.op.type === CompliladorParser.ADD) return left + right ;
	  	return left - right;
	  }
  
  
	  // Visit a parse tree produced by CompiladorParser#impmulti.
	visitImpmulti(ctx) {
		let results = this.visitChildren(ctx)
		return results[0] * results[1];
		
	  }
  
  
	  // Visit a parse tree produced by CompiladorParser#geulssi.
	visitGeulssi(ctx) {
		const id =cxt.GEULSSI().getText();
		if(this.memory.has(id)) return this.memory.get(id);
		return 0
	  }
  
  
	  // Visit a parse tree produced by CompiladorParser#muldiv.
	visitMuldiv(ctx) {
		const left = this.visit(ctx.expr(0));
		const right = this.visit(ctx.expr(1));
		if (ctx.op.type === CompiladorParser.MUL) return left * right ;
	  	return  Math.floor(left / right);	// Division Entera
	}



}