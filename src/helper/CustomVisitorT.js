// Generated from ./grammar/translate/MachaC.g4 by ANTLR 4.13.1
// jshint ignore: start
import MachaCParser from '../translate/grammar/translate/MachaCParser.js';
import MachaCVisitor from '../translate/grammar/translate/MachaCVisitor.js';
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by MachaCParser.

export default class CustomVisitorT extends MachaCVisitor{

    constructor (){
        super()
        this.code=""
    }
	translatedPR(type) {
		switch (type) {
			case "int":
				return "geum";
			case "float":
				return "hana";
			case "char":
				return "sam";
			default:
				return "";
		}
	}
	
	elseDetector(){
		let status = this.code;
		let size = this.code.length;
		return "else" == status[size-4]+status[size-3]+status[size-2]+status[size-1]
	}

	// Visit a parse tree produced by MachaCParser#file.
	visitFile(ctx) {
        this.visitChildren(ctx);
	  return this.code;
	}


	// Visit a parse tree produced by MachaCParser#start.
	visitStart(ctx) {
        this.code +="chichak{";
		//console.log(ctx.content());
        this.visit(ctx.content());
        this.code +="\n}";
		//console.log(this.code);
		return this.code;
	}


	// Visit a parse tree produced by MachaCParser#content.
	visitContent(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by MachaCParser#main.
	visitMain(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by MachaCParser#declaracion.
	visitDeclaracion(ctx) {
		const PR = ctx.PR().getText();
		let id = ctx.ID()? ctx.ID().getText() : ctx.id.text;

		if (ctx.EQUALS()){
			let expr = this.visit(ctx.expr());
			this.code+=`\n${this.translatedPR(PR)} ${id} = ${expr}`;
		}else{
			this.code +=`\n${this.translatedPR(PR)} ${id}`
		}
	  return;
	}


	// Visit a parse tree produced by MachaCParser#asignacion.
	visitAsignacion(ctx) {
		console.log(ctx.getText());
		let id = ctx.ID().getText();
		let expr = this.visit(ctx.expr());
		console.log(expr);
		this.code +=`\n${id}=${expr}`
	  return ;
	}
	// Visit a parse tree produced by MachaCParser#incremento.
	visitIncremento(ctx) {
		const id = ctx.ID().getText();
		if (ctx.SUM().length > 0) {
			console.log('fhf');
			this.code += `\n${id}++`;
		} else {
			this.code += `\n${id}--`;
		}

		return;
	  }
  


	// Visit a parse tree produced by MachaCParser#impresion.
	visitImpresion(ctx) {

		let main = this.visit(ctx.expr());
		this.code+=`\ninswae(${main})`
	  return ctx.getText();
	}


	


	// Visit a parse tree produced by MachaCParser#condicionalBucle.
	visitCondicionalBucle(ctx) {
		this.visit(ctx.condicional());
		if (ctx.condicionalElseIf())this.visit(ctx.condicionalElseIf())
		if (ctx.condicionalElse())this.visit(ctx.condicionalElse())

		this.code += ``;

	}


	// Visit a parse tree produced by MachaCParser#condicional.
	visitCondicional(ctx) {
		let condicion = this.visit(ctx.expr());
		this.code += `${this.elseDetector()?"if":"\nmyeon"}(${condicion}){`;
		this.visit(ctx.main())
		this.code += `\n}`;
	  return
	}


	// Visit a parse tree produced by MachaCParser#condicionalElseIf.
	visitCondicionalElseIf(ctx) {
		this.code +=`\nnamochi`;
		this.visit(ctx.condicional());
	  return 
	}


	// Visit a parse tree produced by MachaCParser#condicionalElse.
	visitCondicionalElse(ctx) {
		this.code +=`\nnamochi{`;
		this.visit(ctx.main())
		this.code += `\n}`;
	  return 
	}

	// Visit a parse tree produced by MachaCParser#while.
	visitWhile(ctx) {
		let condicion = this.visit(ctx.expr());
		this.code += `\ngeuttae(${condicion}){`;
		this.visit(ctx.main());
		this.code +=`\n}`;
			return 
	}

	visitExpr(ctx) {
		return ctx.getText();
	  }
  


}