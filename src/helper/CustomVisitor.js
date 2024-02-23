import CompiladorVisitor from "../grammar/CompiladorVisitor.js";
import CompiladorParser from "../grammar/CompiladorParser.js";
import HashMap from 'hashmap';

// This class defines a complete generic visitor for a parse tree produced by CompiladorParser.

export default class CustomVisitor extends CompiladorVisitor {

	constructor(){
		super();
		this.memory = new HashMap();
		this.errors = [];
	}
	// Visit a parse tree produced by CompiladorParser#file.
	visitFile(ctx) {
		this.visitChildren(ctx);
		console.log(this.errors);
		console.log(this.memory);
	  return [this.errors, this.memory];
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
		
		console.log(id);
		
		if (/[\+\-\\/]/.test(id)) {
			this.errors.push(`"${id}" no debe contener operadores`);
		} else if (this.memory.has(id)) {
			this.errors.push(`Ups! el identificador "${id}" ya está declarado`);
		} else   if (/^[0-9]+/.test(id)) {
			this.errors.push("Ups! el identificador contiene números, intenta de nuevo.");
		} else {
			this.memory.set(id, value); 
			
			
		}
		
		return null;
	}


	// Visit a parse tree produced by CompiladorParser#expr.
	visitExpr(ctx) {
	  return this.visitChildren(ctx);
	}



}