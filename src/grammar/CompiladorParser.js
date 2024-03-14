// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompiladorVisitor from './CompiladorVisitor.js';

const serializedATN = [4,1,16,92,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,1,1,1,1,1,
1,1,1,1,1,2,5,2,30,8,2,10,2,12,2,33,9,2,1,3,1,3,1,3,1,3,3,3,39,8,3,1,4,1,
4,1,4,1,4,3,4,45,8,4,1,4,1,4,1,4,1,4,3,4,51,8,4,3,4,53,8,4,1,5,1,5,1,5,1,
5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,67,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,5,6,77,8,6,10,6,12,6,80,9,6,1,7,4,7,83,8,7,11,7,12,7,84,1,8,1,8,1,8,
1,8,1,8,1,8,1,84,1,12,9,0,2,4,6,8,10,12,14,16,0,3,2,0,13,13,15,15,1,0,8,
9,1,0,10,11,96,0,19,1,0,0,0,2,23,1,0,0,0,4,31,1,0,0,0,6,38,1,0,0,0,8,52,
1,0,0,0,10,54,1,0,0,0,12,66,1,0,0,0,14,82,1,0,0,0,16,86,1,0,0,0,18,20,3,
2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,1,1,0,0,
0,23,24,5,6,0,0,24,25,5,1,0,0,25,26,3,4,2,0,26,27,5,2,0,0,27,3,1,0,0,0,28,
30,3,6,3,0,29,28,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,5,
1,0,0,0,33,31,1,0,0,0,34,39,3,8,4,0,35,39,3,10,5,0,36,39,3,16,8,0,37,39,
3,14,7,0,38,34,1,0,0,0,38,35,1,0,0,0,38,36,1,0,0,0,38,37,1,0,0,0,39,7,1,
0,0,0,40,41,5,7,0,0,41,44,5,14,0,0,42,43,5,3,0,0,43,45,3,12,6,0,44,42,1,
0,0,0,44,45,1,0,0,0,45,53,1,0,0,0,46,47,5,7,0,0,47,50,7,0,0,0,48,49,5,3,
0,0,49,51,3,12,6,0,50,48,1,0,0,0,50,51,1,0,0,0,51,53,1,0,0,0,52,40,1,0,0,
0,52,46,1,0,0,0,53,9,1,0,0,0,54,55,5,7,0,0,55,56,5,14,0,0,56,57,5,3,0,0,
57,58,3,12,6,0,58,11,1,0,0,0,59,60,6,6,-1,0,60,61,5,4,0,0,61,62,3,12,6,0,
62,63,5,5,0,0,63,67,1,0,0,0,64,67,5,14,0,0,65,67,5,13,0,0,66,59,1,0,0,0,
66,64,1,0,0,0,66,65,1,0,0,0,67,78,1,0,0,0,68,69,10,5,0,0,69,70,7,1,0,0,70,
77,3,12,6,6,71,72,10,4,0,0,72,73,7,2,0,0,73,77,3,12,6,5,74,75,10,1,0,0,75,
77,3,12,6,2,76,68,1,0,0,0,76,71,1,0,0,0,76,74,1,0,0,0,77,80,1,0,0,0,78,76,
1,0,0,0,78,79,1,0,0,0,79,13,1,0,0,0,80,78,1,0,0,0,81,83,9,0,0,0,82,81,1,
0,0,0,83,84,1,0,0,0,84,85,1,0,0,0,84,82,1,0,0,0,85,15,1,0,0,0,86,87,5,12,
0,0,87,88,5,4,0,0,88,89,3,12,6,0,89,90,5,5,0,0,90,17,1,0,0,0,10,21,31,38,
44,50,52,66,76,78,84];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompiladorParser extends antlr4.Parser {

    static grammarFileName = "Compilador.g4";
    static literalNames = [ null, "'{'", "'}'", "'='", "'('", "')'", "'chichak'", 
                            null, "'*'", "'/'", "'+'", "'-'", "'inswae'" ];
    static symbolicNames = [ null, null, null, null, null, null, "CHICHAK", 
                             "PR", "GOPSSEM", "NANU", "DO", "PPAEDA", "PRINT", 
                             "SUJJA", "GEULSSI", "CHINCHA", "GONG" ];
    static ruleNames = [ "file", "start", "content", "main", "declaracion", 
                         "asignacion", "expr", "ddaeng", "impresion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CompiladorParser.ruleNames;
        this.literalNames = CompiladorParser.literalNames;
        this.symbolicNames = CompiladorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 6:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		case 2:
    			return this.precpred(this._ctx, 1);
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
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.start();
	            this.state = 21; 
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
	        this.state = 23;
	        this.match(CompiladorParser.CHICHAK);
	        this.state = 24;
	        this.match(CompiladorParser.T__0);
	        this.state = 25;
	        this.content();
	        this.state = 26;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 28;
	                this.main(); 
	            }
	            this.state = 33;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
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



	main() {
	    let localctx = new MainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CompiladorParser.RULE_main);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.declaracion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.asignacion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.impresion();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 37;
	            this.ddaeng();
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



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CompiladorParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ValidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.match(CompiladorParser.PR);
	            this.state = 41;
	            this.match(CompiladorParser.GEULSSI);
	            this.state = 44;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            if(la_===1) {
	                this.state = 42;
	                this.match(CompiladorParser.T__2);
	                this.state = 43;
	                this.expr(0);

	            }
	            break;

	        case 2:
	            localctx = new InvalidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.match(CompiladorParser.PR);
	            this.state = 47;
	            localctx.ID = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===13 || _la===15)) {
	                localctx.ID = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 50;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 48;
	                this.match(CompiladorParser.T__2);
	                this.state = 49;
	                this.expr(0);

	            }
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



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CompiladorParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(CompiladorParser.PR);
	        this.state = 55;
	        this.match(CompiladorParser.GEULSSI);
	        this.state = 56;
	        this.match(CompiladorParser.T__2);
	        this.state = 57;
	        this.expr(0);
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
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, CompiladorParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 60;
	            this.match(CompiladorParser.T__3);
	            this.state = 61;
	            this.expr(0);
	            this.state = 62;
	            this.match(CompiladorParser.T__4);
	            break;
	        case 14:
	            localctx = new GeulssiContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 64;
	            this.match(CompiladorParser.GEULSSI);
	            break;
	        case 13:
	            localctx = new SujjaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 65;
	            this.match(CompiladorParser.SUJJA);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 78;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 76;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MuldivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 68;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 69;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===8 || _la===9)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 70;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new SumresContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 71;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 72;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 73;
	                    this.expr(5);
	                    break;

	                case 3:
	                    localctx = new ImplicitMultContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 74;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 75;
	                    this.expr(2);
	                    break;

	                } 
	            }
	            this.state = 80;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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



	ddaeng() {
	    let localctx = new DdaengContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CompiladorParser.RULE_ddaeng);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 81;
	        		this.matchWildcard();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 84; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
	        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CompiladorParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(CompiladorParser.PRINT);
	        this.state = 87;
	        this.match(CompiladorParser.T__3);
	        this.state = 88;
	        this.expr(0);
	        this.state = 89;
	        this.match(CompiladorParser.T__4);
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
CompiladorParser.PRINT = 12;
CompiladorParser.SUJJA = 13;
CompiladorParser.GEULSSI = 14;
CompiladorParser.CHINCHA = 15;
CompiladorParser.GONG = 16;

CompiladorParser.RULE_file = 0;
CompiladorParser.RULE_start = 1;
CompiladorParser.RULE_content = 2;
CompiladorParser.RULE_main = 3;
CompiladorParser.RULE_declaracion = 4;
CompiladorParser.RULE_asignacion = 5;
CompiladorParser.RULE_expr = 6;
CompiladorParser.RULE_ddaeng = 7;
CompiladorParser.RULE_impresion = 8;

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

	main = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MainContext);
	    } else {
	        return this.getTypedRuleContext(MainContext,i);
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



class MainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_main;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	ddaeng() {
	    return this.getTypedRuleContext(DdaengContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitMain(this);
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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ValidAssignContext extends DeclaracionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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
	        return visitor.visitValidAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.ValidAssignContext = ValidAssignContext;

class InvalidAssignContext extends DeclaracionContext {

    constructor(parser, ctx) {
        super(parser);
        this.ID = null;;
        super.copyFrom(ctx);
    }

	PR() {
	    return this.getToken(CompiladorParser.PR, 0);
	};

	CHINCHA() {
	    return this.getToken(CompiladorParser.CHINCHA, 0);
	};

	SUJJA() {
	    return this.getToken(CompiladorParser.SUJJA, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitInvalidAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.InvalidAssignContext = InvalidAssignContext;

class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_asignacion;
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
	        return visitor.visitAsignacion(this);
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
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParentesisContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.ParentesisContext = ParentesisContext;

class ImplicitMultContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitImplicitMult(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.ImplicitMultContext = ImplicitMultContext;

class SujjaContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SUJJA() {
	    return this.getToken(CompiladorParser.SUJJA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitSujja(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.SujjaContext = SujjaContext;

class SumresContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
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

	DO() {
	    return this.getToken(CompiladorParser.DO, 0);
	};

	PPAEDA() {
	    return this.getToken(CompiladorParser.PPAEDA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitSumres(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.SumresContext = SumresContext;

class GeulssiContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	GEULSSI() {
	    return this.getToken(CompiladorParser.GEULSSI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitGeulssi(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.GeulssiContext = GeulssiContext;

class MuldivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
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

	GOPSSEM() {
	    return this.getToken(CompiladorParser.GOPSSEM, 0);
	};

	NANU() {
	    return this.getToken(CompiladorParser.NANU, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitMuldiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.MuldivContext = MuldivContext;

class DdaengContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_ddaeng;
    }


	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitDdaeng(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_impresion;
    }

	PRINT() {
	    return this.getToken(CompiladorParser.PRINT, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CompiladorParser.FileContext = FileContext; 
CompiladorParser.StartContext = StartContext; 
CompiladorParser.ContentContext = ContentContext; 
CompiladorParser.MainContext = MainContext; 
CompiladorParser.DeclaracionContext = DeclaracionContext; 
CompiladorParser.AsignacionContext = AsignacionContext; 
CompiladorParser.ExprContext = ExprContext; 
CompiladorParser.DdaengContext = DdaengContext; 
CompiladorParser.ImpresionContext = ImpresionContext; 
