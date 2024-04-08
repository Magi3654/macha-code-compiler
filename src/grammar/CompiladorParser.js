// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompiladorVisitor from './CompiladorVisitor.js';

const serializedATN = [4,1,22,148,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,4,0,28,8,0,11,0,12,0,29,1,1,1,1,1,1,1,1,1,1,1,2,5,2,38,8,2,10,2,12,2,
41,9,2,1,3,1,3,1,3,1,3,3,3,47,8,3,1,4,1,4,1,4,1,4,3,4,53,8,4,1,4,1,4,1,4,
1,4,3,4,59,8,4,3,4,61,8,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,81,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,
91,8,7,10,7,12,7,94,9,7,1,8,1,8,5,8,98,8,8,10,8,12,8,101,9,8,1,8,3,8,104,
8,8,1,9,1,9,1,9,1,9,1,9,1,9,5,9,112,8,9,10,9,12,9,115,9,9,1,9,1,9,1,10,1,
10,1,10,1,11,1,11,1,11,5,11,125,8,11,10,11,12,11,128,9,11,1,11,1,11,1,12,
1,12,1,12,1,12,1,12,1,12,3,12,138,8,12,1,12,1,12,1,12,5,12,143,8,12,10,12,
12,12,146,9,12,1,12,0,2,14,24,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,4,2,
0,19,19,21,21,1,0,8,9,1,0,10,11,2,0,3,3,16,18,154,0,27,1,0,0,0,2,31,1,0,
0,0,4,39,1,0,0,0,6,46,1,0,0,0,8,60,1,0,0,0,10,62,1,0,0,0,12,67,1,0,0,0,14,
80,1,0,0,0,16,95,1,0,0,0,18,105,1,0,0,0,20,118,1,0,0,0,22,121,1,0,0,0,24,
137,1,0,0,0,26,28,3,2,1,0,27,26,1,0,0,0,28,29,1,0,0,0,29,27,1,0,0,0,29,30,
1,0,0,0,30,1,1,0,0,0,31,32,5,1,0,0,32,33,5,6,0,0,33,34,3,4,2,0,34,35,5,7,
0,0,35,3,1,0,0,0,36,38,3,6,3,0,37,36,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,
39,40,1,0,0,0,40,5,1,0,0,0,41,39,1,0,0,0,42,47,3,8,4,0,43,47,3,10,5,0,44,
47,3,16,8,0,45,47,3,12,6,0,46,42,1,0,0,0,46,43,1,0,0,0,46,44,1,0,0,0,46,
45,1,0,0,0,47,7,1,0,0,0,48,49,5,2,0,0,49,52,5,20,0,0,50,51,5,12,0,0,51,53,
3,14,7,0,52,50,1,0,0,0,52,53,1,0,0,0,53,61,1,0,0,0,54,55,5,2,0,0,55,58,7,
0,0,0,56,57,5,12,0,0,57,59,3,14,7,0,58,56,1,0,0,0,58,59,1,0,0,0,59,61,1,
0,0,0,60,48,1,0,0,0,60,54,1,0,0,0,61,9,1,0,0,0,62,63,5,2,0,0,63,64,5,20,
0,0,64,65,5,12,0,0,65,66,3,14,7,0,66,11,1,0,0,0,67,68,5,13,0,0,68,69,5,4,
0,0,69,70,3,14,7,0,70,71,5,5,0,0,71,13,1,0,0,0,72,73,6,7,-1,0,73,74,5,4,
0,0,74,75,3,14,7,0,75,76,5,5,0,0,76,81,1,0,0,0,77,81,5,20,0,0,78,81,5,19,
0,0,79,81,5,3,0,0,80,72,1,0,0,0,80,77,1,0,0,0,80,78,1,0,0,0,80,79,1,0,0,
0,81,92,1,0,0,0,82,83,10,6,0,0,83,84,7,1,0,0,84,91,3,14,7,7,85,86,10,5,0,
0,86,87,7,2,0,0,87,91,3,14,7,6,88,89,10,1,0,0,89,91,3,14,7,2,90,82,1,0,0,
0,90,85,1,0,0,0,90,88,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,
93,15,1,0,0,0,94,92,1,0,0,0,95,99,3,18,9,0,96,98,3,20,10,0,97,96,1,0,0,0,
98,101,1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,
0,102,104,3,22,11,0,103,102,1,0,0,0,103,104,1,0,0,0,104,17,1,0,0,0,105,106,
5,14,0,0,106,107,5,4,0,0,107,108,3,24,12,0,108,109,5,5,0,0,109,113,5,6,0,
0,110,112,3,6,3,0,111,110,1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,
1,0,0,0,114,116,1,0,0,0,115,113,1,0,0,0,116,117,5,7,0,0,117,19,1,0,0,0,118,
119,5,15,0,0,119,120,3,18,9,0,120,21,1,0,0,0,121,122,5,15,0,0,122,126,5,
6,0,0,123,125,3,6,3,0,124,123,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,126,
127,1,0,0,0,127,129,1,0,0,0,128,126,1,0,0,0,129,130,5,7,0,0,130,23,1,0,0,
0,131,132,6,12,-1,0,132,138,7,3,0,0,133,134,3,14,7,0,134,135,7,3,0,0,135,
136,3,14,7,0,136,138,1,0,0,0,137,131,1,0,0,0,137,133,1,0,0,0,138,144,1,0,
0,0,139,140,10,1,0,0,140,141,7,3,0,0,141,143,3,24,12,2,142,139,1,0,0,0,143,
146,1,0,0,0,144,142,1,0,0,0,144,145,1,0,0,0,145,25,1,0,0,0,146,144,1,0,0,
0,15,29,39,46,52,58,60,80,90,92,99,103,113,126,137,144];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompiladorParser extends antlr4.Parser {

    static grammarFileName = "Compilador.g4";
    static literalNames = [ null, "'chichak'", null, null, "'('", "')'", 
                            "'{'", "'}'", "'*'", "'/'", "'+'", "'-'", "'='", 
                            "'inswae'", "'myeon'", "'namochi'" ];
    static symbolicNames = [ null, "CHICHAK", "PR", "STRING", "PARENTH_A", 
                             "PARENTH_B", "OPENKEY", "CLOSEKEY", "GOPSSEM", 
                             "NANU", "DO", "PPAEDA", "EQUALS", "PRINT", 
                             "IF", "ELSE", "LOGIC", "MATH", "BOOLEAN", "SUJJA", 
                             "GEULSSI", "CHINCHA", "GONG" ];
    static ruleNames = [ "file", "start", "content", "main", "declaracion", 
                         "asignacion", "impresion", "expr", "condicionalBucle", 
                         "condicional", "condicionalElseIf", "condicionalElse", 
                         "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CompiladorParser.ruleNames;
        this.literalNames = CompiladorParser.literalNames;
        this.symbolicNames = CompiladorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.expr_sempred(localctx, predIndex);
    	case 12:
    	    		return this.condicion_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    condicion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
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
	        this.state = 27; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 26;
	            this.start();
	            this.state = 29; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
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
	        this.state = 31;
	        this.match(CompiladorParser.CHICHAK);
	        this.state = 32;
	        this.match(CompiladorParser.OPENKEY);
	        this.state = 33;
	        this.content();
	        this.state = 34;
	        this.match(CompiladorParser.CLOSEKEY);
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 24580) !== 0)) {
	            this.state = 36;
	            this.main();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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
	        this.state = 46;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.declaracion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.asignacion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.condicionalBucle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 45;
	            this.impresion();
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
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ValidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.match(CompiladorParser.PR);
	            this.state = 49;
	            this.match(CompiladorParser.GEULSSI);
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===12) {
	                this.state = 50;
	                this.match(CompiladorParser.EQUALS);
	                this.state = 51;
	                this.expr(0);
	            }

	            break;

	        case 2:
	            localctx = new InvalidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.match(CompiladorParser.PR);
	            this.state = 55;
	            localctx.ID = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===19 || _la===21)) {
	                localctx.ID = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===12) {
	                this.state = 56;
	                this.match(CompiladorParser.EQUALS);
	                this.state = 57;
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
	        this.state = 62;
	        this.match(CompiladorParser.PR);
	        this.state = 63;
	        this.match(CompiladorParser.GEULSSI);
	        this.state = 64;
	        this.match(CompiladorParser.EQUALS);
	        this.state = 65;
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



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CompiladorParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(CompiladorParser.PRINT);
	        this.state = 68;
	        this.match(CompiladorParser.PARENTH_A);
	        this.state = 69;
	        this.expr(0);
	        this.state = 70;
	        this.match(CompiladorParser.PARENTH_B);
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
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, CompiladorParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 73;
	            this.match(CompiladorParser.PARENTH_A);
	            this.state = 74;
	            this.expr(0);
	            this.state = 75;
	            this.match(CompiladorParser.PARENTH_B);
	            break;
	        case 20:
	            localctx = new GeulssiContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 77;
	            this.match(CompiladorParser.GEULSSI);
	            break;
	        case 19:
	            localctx = new SujjaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 78;
	            this.match(CompiladorParser.SUJJA);
	            break;
	        case 3:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 79;
	            this.match(CompiladorParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 92;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 90;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MuldivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 82;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 83;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===8 || _la===9)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 84;
	                    this.expr(7);
	                    break;

	                case 2:
	                    localctx = new SumresContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 85;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 86;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 87;
	                    this.expr(6);
	                    break;

	                case 3:
	                    localctx = new ImplicitMultContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 88;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 89;
	                    this.expr(2);
	                    break;

	                } 
	            }
	            this.state = 94;
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



	condicionalBucle() {
	    let localctx = new CondicionalBucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CompiladorParser.RULE_condicionalBucle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.condicional();
	        this.state = 99;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 96;
	                this.condicionalElseIf(); 
	            }
	            this.state = 101;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 102;
	            this.condicionalElse();
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



	condicional() {
	    let localctx = new CondicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CompiladorParser.RULE_condicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(CompiladorParser.IF);
	        this.state = 106;
	        this.match(CompiladorParser.PARENTH_A);
	        this.state = 107;
	        this.condicion(0);
	        this.state = 108;
	        this.match(CompiladorParser.PARENTH_B);
	        this.state = 109;
	        this.match(CompiladorParser.OPENKEY);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 24580) !== 0)) {
	            this.state = 110;
	            this.main();
	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 116;
	        this.match(CompiladorParser.CLOSEKEY);
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



	condicionalElseIf() {
	    let localctx = new CondicionalElseIfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CompiladorParser.RULE_condicionalElseIf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(CompiladorParser.ELSE);
	        this.state = 119;
	        this.condicional();
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



	condicionalElse() {
	    let localctx = new CondicionalElseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CompiladorParser.RULE_condicionalElse);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(CompiladorParser.ELSE);
	        this.state = 122;
	        this.match(CompiladorParser.OPENKEY);
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 24580) !== 0)) {
	            this.state = 123;
	            this.main();
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 129;
	        this.match(CompiladorParser.CLOSEKEY);
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


	condicion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CondicionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 24;
	    this.enterRecursionRule(localctx, 24, CompiladorParser.RULE_condicion, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 132;
	            localctx.simbolo = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 458760) !== 0))) {
	                localctx.simbolo = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 2:
	            this.state = 133;
	            this.expr(0);
	            this.state = 134;
	            localctx.simbolo = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 458760) !== 0))) {
	                localctx.simbolo = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 135;
	            this.expr(0);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 144;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CondicionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_condicion);
	                this.state = 139;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 140;
	                localctx.simbolo = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 458760) !== 0))) {
	                    localctx.simbolo = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 141;
	                this.condicion(2); 
	            }
	            this.state = 146;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
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
CompiladorParser.CHICHAK = 1;
CompiladorParser.PR = 2;
CompiladorParser.STRING = 3;
CompiladorParser.PARENTH_A = 4;
CompiladorParser.PARENTH_B = 5;
CompiladorParser.OPENKEY = 6;
CompiladorParser.CLOSEKEY = 7;
CompiladorParser.GOPSSEM = 8;
CompiladorParser.NANU = 9;
CompiladorParser.DO = 10;
CompiladorParser.PPAEDA = 11;
CompiladorParser.EQUALS = 12;
CompiladorParser.PRINT = 13;
CompiladorParser.IF = 14;
CompiladorParser.ELSE = 15;
CompiladorParser.LOGIC = 16;
CompiladorParser.MATH = 17;
CompiladorParser.BOOLEAN = 18;
CompiladorParser.SUJJA = 19;
CompiladorParser.GEULSSI = 20;
CompiladorParser.CHINCHA = 21;
CompiladorParser.GONG = 22;

CompiladorParser.RULE_file = 0;
CompiladorParser.RULE_start = 1;
CompiladorParser.RULE_content = 2;
CompiladorParser.RULE_main = 3;
CompiladorParser.RULE_declaracion = 4;
CompiladorParser.RULE_asignacion = 5;
CompiladorParser.RULE_impresion = 6;
CompiladorParser.RULE_expr = 7;
CompiladorParser.RULE_condicionalBucle = 8;
CompiladorParser.RULE_condicional = 9;
CompiladorParser.RULE_condicionalElseIf = 10;
CompiladorParser.RULE_condicionalElse = 11;
CompiladorParser.RULE_condicion = 12;

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

	OPENKEY() {
	    return this.getToken(CompiladorParser.OPENKEY, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	CLOSEKEY() {
	    return this.getToken(CompiladorParser.CLOSEKEY, 0);
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

	condicionalBucle() {
	    return this.getTypedRuleContext(CondicionalBucleContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
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

	EQUALS() {
	    return this.getToken(CompiladorParser.EQUALS, 0);
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

	EQUALS() {
	    return this.getToken(CompiladorParser.EQUALS, 0);
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

	EQUALS() {
	    return this.getToken(CompiladorParser.EQUALS, 0);
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

	PARENTH_A() {
	    return this.getToken(CompiladorParser.PARENTH_A, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PARENTH_B() {
	    return this.getToken(CompiladorParser.PARENTH_B, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitImpresion(this);
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

	PARENTH_A() {
	    return this.getToken(CompiladorParser.PARENTH_A, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PARENTH_B() {
	    return this.getToken(CompiladorParser.PARENTH_B, 0);
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

class StringContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(CompiladorParser.STRING, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.StringContext = StringContext;

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

class CondicionalBucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_condicionalBucle;
    }

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	condicionalElseIf = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CondicionalElseIfContext);
	    } else {
	        return this.getTypedRuleContext(CondicionalElseIfContext,i);
	    }
	};

	condicionalElse() {
	    return this.getTypedRuleContext(CondicionalElseContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitCondicionalBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_condicional;
    }

	IF() {
	    return this.getToken(CompiladorParser.IF, 0);
	};

	PARENTH_A() {
	    return this.getToken(CompiladorParser.PARENTH_A, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	PARENTH_B() {
	    return this.getToken(CompiladorParser.PARENTH_B, 0);
	};

	OPENKEY() {
	    return this.getToken(CompiladorParser.OPENKEY, 0);
	};

	CLOSEKEY() {
	    return this.getToken(CompiladorParser.CLOSEKEY, 0);
	};

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
	        return visitor.visitCondicional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionalElseIfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_condicionalElseIf;
    }

	ELSE() {
	    return this.getToken(CompiladorParser.ELSE, 0);
	};

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitCondicionalElseIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionalElseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_condicionalElse;
    }

	ELSE() {
	    return this.getToken(CompiladorParser.ELSE, 0);
	};

	OPENKEY() {
	    return this.getToken(CompiladorParser.OPENKEY, 0);
	};

	CLOSEKEY() {
	    return this.getToken(CompiladorParser.CLOSEKEY, 0);
	};

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
	        return visitor.visitCondicionalElse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_condicion;
        this.simbolo = null;
    }

	LOGIC() {
	    return this.getToken(CompiladorParser.LOGIC, 0);
	};

	MATH() {
	    return this.getToken(CompiladorParser.MATH, 0);
	};

	BOOLEAN() {
	    return this.getToken(CompiladorParser.BOOLEAN, 0);
	};

	STRING() {
	    return this.getToken(CompiladorParser.STRING, 0);
	};

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

	condicion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CondicionContext);
	    } else {
	        return this.getTypedRuleContext(CondicionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitCondicion(this);
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
CompiladorParser.ImpresionContext = ImpresionContext; 
CompiladorParser.ExprContext = ExprContext; 
CompiladorParser.CondicionalBucleContext = CondicionalBucleContext; 
CompiladorParser.CondicionalContext = CondicionalContext; 
CompiladorParser.CondicionalElseIfContext = CondicionalElseIfContext; 
CompiladorParser.CondicionalElseContext = CondicionalElseContext; 
CompiladorParser.CondicionContext = CondicionContext; 
