// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompiladorVisitor from './CompiladorVisitor.js';

const serializedATN = [4,1,13,59,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,4,0,12,8,0,11,0,12,0,13,1,1,1,1,1,1,1,1,1,1,1,2,1,2,5,2,23,8,2,10,2,
12,2,26,9,2,3,2,28,8,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,36,8,3,1,4,1,4,1,4,1,
4,1,4,1,4,3,4,44,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,54,8,4,10,4,12,
4,57,9,4,1,4,0,1,8,5,0,2,4,6,8,0,2,1,0,8,9,1,0,10,11,61,0,11,1,0,0,0,2,15,
1,0,0,0,4,27,1,0,0,0,6,35,1,0,0,0,8,43,1,0,0,0,10,12,3,2,1,0,11,10,1,0,0,
0,12,13,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,1,1,0,0,0,15,16,5,6,0,0,16,
17,5,1,0,0,17,18,3,4,2,0,18,19,5,2,0,0,19,3,1,0,0,0,20,28,3,8,4,0,21,23,
3,6,3,0,22,21,1,0,0,0,23,26,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,28,1,
0,0,0,26,24,1,0,0,0,27,20,1,0,0,0,27,24,1,0,0,0,28,5,1,0,0,0,29,30,5,7,0,
0,30,36,5,12,0,0,31,32,5,7,0,0,32,33,5,12,0,0,33,34,5,3,0,0,34,36,3,8,4,
0,35,29,1,0,0,0,35,31,1,0,0,0,36,7,1,0,0,0,37,38,6,4,-1,0,38,39,5,4,0,0,
39,40,3,8,4,0,40,41,5,5,0,0,41,44,1,0,0,0,42,44,5,12,0,0,43,37,1,0,0,0,43,
42,1,0,0,0,44,55,1,0,0,0,45,46,10,4,0,0,46,54,3,8,4,5,47,48,10,3,0,0,48,
49,7,0,0,0,49,54,3,8,4,4,50,51,10,2,0,0,51,52,7,1,0,0,52,54,3,8,4,3,53,45,
1,0,0,0,53,47,1,0,0,0,53,50,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,
0,0,0,56,9,1,0,0,0,57,55,1,0,0,0,7,13,24,27,35,43,53,55];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompiladorParser extends antlr4.Parser {

    static grammarFileName = "Compilador.g4";
    static literalNames = [ null, "'{'", "'}'", "'='", "'('", "')'", "'chichak'", 
                            null, "'*'", "'/'", "'+'", "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, "CHICHAK", 
                             "PR", "GOPSSEM", "NANU", "DO", "PPAEDA", "GEULSSI", 
                             "GONG" ];
    static ruleNames = [ "file", "start", "content", "declaracion", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CompiladorParser.ruleNames;
        this.literalNames = CompiladorParser.literalNames;
        this.symbolicNames = CompiladorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 3);
    		case 2:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CompiladorParser.RULE_file);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.start();
	            this.state = 13; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CompiladorParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this.match(CompiladorParser.CHICHAK);
	        this.state = 16;
	        this.match(CompiladorParser.T__0);
	        this.state = 17;
	        this.content();
	        this.state = 18;
	        this.match(CompiladorParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	content() {
	    let localctx = new ContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CompiladorParser.RULE_content);
	    var _la = 0;
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 20;
	            this.expr(0);
	            break;
	        case 2:
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 21;
	                this.declaracion();
	                this.state = 26;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CompiladorParser.RULE_declaracion);
	    try {
	        this.state = 35;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 29;
	            this.match(CompiladorParser.PR);
	            this.state = 30;
	            this.match(CompiladorParser.GEULSSI);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.match(CompiladorParser.PR);
	            this.state = 32;
	            this.match(CompiladorParser.GEULSSI);
	            this.state = 33;
	            this.match(CompiladorParser.T__2);
	            this.state = 34;
	            this.expr(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, CompiladorParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.state = 38;
	            this.match(CompiladorParser.T__3);
	            this.state = 39;
	            this.expr(0);
	            this.state = 40;
	            this.match(CompiladorParser.T__4);
	            break;
	        case 12:
	            this.state = 42;
	            this.match(CompiladorParser.GEULSSI);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 55;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 53;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 45;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 46;
	                    this.expr(5);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 47;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 48;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===8 || _la===9)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 49;
	                    this.expr(4);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 50;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 51;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 52;
	                    this.expr(3);
	                    break;

	                } 
	            }
	            this.state = 57;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

CompiladorParser.EOF = antlr4.Token.EOF;
CompiladorParser.T__0 = 1;
CompiladorParser.T__1 = 2;
CompiladorParser.T__2 = 3;
CompiladorParser.T__3 = 4;
CompiladorParser.T__4 = 5;
CompiladorParser.CHICHAK = 6;
CompiladorParser.PR = 7;
CompiladorParser.GOPSSEM = 8;
CompiladorParser.NANU = 9;
CompiladorParser.DO = 10;
CompiladorParser.PPAEDA = 11;
CompiladorParser.GEULSSI = 12;
CompiladorParser.GONG = 13;

CompiladorParser.RULE_file = 0;
CompiladorParser.RULE_start = 1;
CompiladorParser.RULE_content = 2;
CompiladorParser.RULE_declaracion = 3;
CompiladorParser.RULE_expr = 4;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_file;
    }

	start = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StartContext);
	    } else {
	        return this.getTypedRuleContext(StartContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_start;
    }

	CHICHAK() {
	    return this.getToken(CompiladorParser.CHICHAK, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_content;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_declaracion;
    }

	PR() {
	    return this.getToken(CompiladorParser.PR, 0);
	};

	GEULSSI() {
	    return this.getToken(CompiladorParser.GEULSSI, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_expr;
        this.operation = null;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	GEULSSI() {
	    return this.getToken(CompiladorParser.GEULSSI, 0);
	};

	GOPSSEM() {
	    return this.getToken(CompiladorParser.GOPSSEM, 0);
	};

	NANU() {
	    return this.getToken(CompiladorParser.NANU, 0);
	};

	DO() {
	    return this.getToken(CompiladorParser.DO, 0);
	};

	PPAEDA() {
	    return this.getToken(CompiladorParser.PPAEDA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CompiladorParser.FileContext = FileContext; 
CompiladorParser.StartContext = StartContext; 
CompiladorParser.ContentContext = ContentContext; 
CompiladorParser.DeclaracionContext = DeclaracionContext; 
CompiladorParser.ExprContext = ExprContext; 
