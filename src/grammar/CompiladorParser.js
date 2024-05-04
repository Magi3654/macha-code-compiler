// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompiladorVisitor from './CompiladorVisitor.js';

const serializedATN = [4,1,25,162,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,1,1,1,1,1,1,1,1,1,1,2,5,2,40,8,2,
10,2,12,2,43,9,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,51,8,3,1,4,1,4,1,4,1,4,3,4,
57,8,4,1,4,1,4,1,4,1,4,3,4,63,8,4,3,4,65,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,
1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,85,8,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,98,8,7,10,7,12,7,101,9,7,1,8,1,8,3,8,105,8,
8,1,8,1,8,1,8,1,8,3,8,111,8,8,1,9,1,9,5,9,115,8,9,10,9,12,9,118,9,9,1,9,
3,9,121,8,9,1,10,1,10,1,10,1,10,1,10,1,10,5,10,129,8,10,10,10,12,10,132,
9,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,5,12,142,8,12,10,12,12,12,145,
9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,5,13,155,8,13,10,13,12,13,158,
9,13,1,13,1,13,1,13,0,1,14,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,4,2,
0,22,22,24,24,1,0,17,19,2,0,7,8,12,12,1,0,9,10,172,0,29,1,0,0,0,2,33,1,0,
0,0,4,41,1,0,0,0,6,50,1,0,0,0,8,64,1,0,0,0,10,66,1,0,0,0,12,70,1,0,0,0,14,
84,1,0,0,0,16,102,1,0,0,0,18,112,1,0,0,0,20,122,1,0,0,0,22,135,1,0,0,0,24,
138,1,0,0,0,26,148,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,31,1,0,0,0,31,
29,1,0,0,0,31,32,1,0,0,0,32,1,1,0,0,0,33,34,5,1,0,0,34,35,5,5,0,0,35,36,
3,4,2,0,36,37,5,6,0,0,37,3,1,0,0,0,38,40,3,6,3,0,39,38,1,0,0,0,40,43,1,0,
0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,5,1,0,0,0,43,41,1,0,0,0,44,51,3,8,4,0,
45,51,3,10,5,0,46,51,3,18,9,0,47,51,3,26,13,0,48,51,3,12,6,0,49,51,3,16,
8,0,50,44,1,0,0,0,50,45,1,0,0,0,50,46,1,0,0,0,50,47,1,0,0,0,50,48,1,0,0,
0,50,49,1,0,0,0,51,7,1,0,0,0,52,53,5,2,0,0,53,56,5,23,0,0,54,55,5,11,0,0,
55,57,3,14,7,0,56,54,1,0,0,0,56,57,1,0,0,0,57,65,1,0,0,0,58,59,5,2,0,0,59,
62,7,0,0,0,60,61,5,11,0,0,61,63,3,14,7,0,62,60,1,0,0,0,62,63,1,0,0,0,63,
65,1,0,0,0,64,52,1,0,0,0,64,58,1,0,0,0,65,9,1,0,0,0,66,67,5,23,0,0,67,68,
5,11,0,0,68,69,3,14,7,0,69,11,1,0,0,0,70,71,5,13,0,0,71,72,5,3,0,0,72,73,
3,14,7,0,73,74,5,4,0,0,74,13,1,0,0,0,75,76,6,7,-1,0,76,77,5,3,0,0,77,78,
3,14,7,0,78,79,5,4,0,0,79,85,1,0,0,0,80,85,7,1,0,0,81,85,5,23,0,0,82,85,
5,22,0,0,83,85,5,20,0,0,84,75,1,0,0,0,84,80,1,0,0,0,84,81,1,0,0,0,84,82,
1,0,0,0,84,83,1,0,0,0,85,99,1,0,0,0,86,87,10,8,0,0,87,88,7,2,0,0,88,98,3,
14,7,9,89,90,10,7,0,0,90,91,7,3,0,0,91,98,3,14,7,8,92,93,10,5,0,0,93,94,
7,1,0,0,94,98,3,14,7,6,95,96,10,1,0,0,96,98,3,14,7,2,97,86,1,0,0,0,97,89,
1,0,0,0,97,92,1,0,0,0,97,95,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,
1,0,0,0,100,15,1,0,0,0,101,99,1,0,0,0,102,104,5,23,0,0,103,105,5,25,0,0,
104,103,1,0,0,0,104,105,1,0,0,0,105,110,1,0,0,0,106,107,5,9,0,0,107,111,
5,9,0,0,108,109,5,10,0,0,109,111,5,10,0,0,110,106,1,0,0,0,110,108,1,0,0,
0,111,17,1,0,0,0,112,116,3,20,10,0,113,115,3,22,11,0,114,113,1,0,0,0,115,
118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,120,1,0,0,0,118,116,1,0,
0,0,119,121,3,24,12,0,120,119,1,0,0,0,120,121,1,0,0,0,121,19,1,0,0,0,122,
123,5,14,0,0,123,124,5,3,0,0,124,125,3,14,7,0,125,126,5,4,0,0,126,130,5,
5,0,0,127,129,3,6,3,0,128,127,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,130,
131,1,0,0,0,131,133,1,0,0,0,132,130,1,0,0,0,133,134,5,6,0,0,134,21,1,0,0,
0,135,136,5,15,0,0,136,137,3,20,10,0,137,23,1,0,0,0,138,139,5,15,0,0,139,
143,5,5,0,0,140,142,3,6,3,0,141,140,1,0,0,0,142,145,1,0,0,0,143,141,1,0,
0,0,143,144,1,0,0,0,144,146,1,0,0,0,145,143,1,0,0,0,146,147,5,6,0,0,147,
25,1,0,0,0,148,149,5,16,0,0,149,150,5,3,0,0,150,151,3,14,7,0,151,152,5,4,
0,0,152,156,5,5,0,0,153,155,3,6,3,0,154,153,1,0,0,0,155,158,1,0,0,0,156,
154,1,0,0,0,156,157,1,0,0,0,157,159,1,0,0,0,158,156,1,0,0,0,159,160,5,6,
0,0,160,27,1,0,0,0,16,31,41,50,56,62,64,84,97,99,104,110,116,120,130,143,
156];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompiladorParser extends antlr4.Parser {

    static grammarFileName = "Compilador.g4";
    static literalNames = [ null, "'chichak'", null, "'('", "')'", "'{'", 
                            "'}'", "'*'", "'/'", "'+'", "'-'", "'='", "'%'", 
                            "'inswae'", "'myeon'", "'namochi'", "'geuttae'" ];
    static symbolicNames = [ null, "CHICHAK", "PR", "PARENTH_A", "PARENTH_B", 
                             "OPENKEY", "CLOSEKEY", "GOPSSEM", "NANU", "DO", 
                             "PPAEDA", "EQUALS", "PORCENT", "PRINT", "IF", 
                             "ELSE", "WHILE", "LOGIC", "MATH", "BOOLEAN", 
                             "STRING", "CHAR", "SUJJA", "GEULSSI", "CHINCHA", 
                             "GONG" ];
    static ruleNames = [ "file", "start", "content", "main", "declaracion", 
                         "asignacion", "impresion", "expr", "incremento", 
                         "condicionalBucle", "condicional", "condicionalElseIf", 
                         "condicionalElse", "while" ];

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
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 8);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 5);
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
	        this.state = 29; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 28;
	            this.start();
	            this.state = 31; 
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
	        this.state = 33;
	        this.match(CompiladorParser.CHICHAK);
	        this.state = 34;
	        this.match(CompiladorParser.OPENKEY);
	        this.state = 35;
	        this.content();
	        this.state = 36;
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
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8478724) !== 0)) {
	            this.state = 38;
	            this.main();
	            this.state = 43;
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
	        this.state = 50;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.declaracion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.asignacion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 46;
	            this.condicionalBucle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 47;
	            this.while_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 48;
	            this.impresion();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 49;
	            this.incremento();
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
	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ValidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.match(CompiladorParser.PR);
	            this.state = 53;
	            this.match(CompiladorParser.GEULSSI);
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===11) {
	                this.state = 54;
	                this.match(CompiladorParser.EQUALS);
	                this.state = 55;
	                this.expr(0);
	            }

	            break;

	        case 2:
	            localctx = new InvalidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.match(CompiladorParser.PR);
	            this.state = 59;
	            localctx.ID = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===22 || _la===24)) {
	                localctx.ID = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===11) {
	                this.state = 60;
	                this.match(CompiladorParser.EQUALS);
	                this.state = 61;
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
	        this.state = 66;
	        this.match(CompiladorParser.GEULSSI);
	        this.state = 67;
	        this.match(CompiladorParser.EQUALS);
	        this.state = 68;
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
	        this.state = 70;
	        this.match(CompiladorParser.PRINT);
	        this.state = 71;
	        this.match(CompiladorParser.PARENTH_A);
	        this.state = 72;
	        this.expr(0);
	        this.state = 73;
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
	        this.state = 84;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 76;
	            this.match(CompiladorParser.PARENTH_A);
	            this.state = 77;
	            this.expr(0);
	            this.state = 78;
	            this.match(CompiladorParser.PARENTH_B);
	            break;
	        case 17:
	        case 18:
	        case 19:
	            localctx = new CondicionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 80;
	            localctx.simbolo = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 917504) !== 0))) {
	                localctx.simbolo = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 23:
	            localctx = new GeulssiContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 81;
	            this.match(CompiladorParser.GEULSSI);
	            break;
	        case 22:
	            localctx = new SujjaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 82;
	            this.match(CompiladorParser.SUJJA);
	            break;
	        case 20:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 83;
	            this.match(CompiladorParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 99;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 97;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MuldivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 86;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 87;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4480) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 88;
	                    this.expr(9);
	                    break;

	                case 2:
	                    localctx = new SumresContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 89;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 90;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 91;
	                    this.expr(8);
	                    break;

	                case 3:
	                    localctx = new CondicionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 92;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 93;
	                    localctx.simbolo = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 917504) !== 0))) {
	                        localctx.simbolo = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 94;
	                    this.expr(6);
	                    break;

	                case 4:
	                    localctx = new ImplicitMultContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 95;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 96;
	                    this.expr(2);
	                    break;

	                } 
	            }
	            this.state = 101;
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



	incremento() {
	    let localctx = new IncrementoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CompiladorParser.RULE_incremento);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(CompiladorParser.GEULSSI);
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 103;
	            this.match(CompiladorParser.GONG);
	        }

	        this.state = 110;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.state = 106;
	            this.match(CompiladorParser.DO);
	            this.state = 107;
	            this.match(CompiladorParser.DO);
	            break;
	        case 10:
	            this.state = 108;
	            this.match(CompiladorParser.PPAEDA);
	            this.state = 109;
	            this.match(CompiladorParser.PPAEDA);
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



	condicionalBucle() {
	    let localctx = new CondicionalBucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CompiladorParser.RULE_condicionalBucle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.condicional();
	        this.state = 116;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 113;
	                this.condicionalElseIf(); 
	            }
	            this.state = 118;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 119;
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
	    this.enterRule(localctx, 20, CompiladorParser.RULE_condicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(CompiladorParser.IF);
	        this.state = 123;
	        this.match(CompiladorParser.PARENTH_A);
	        this.state = 124;
	        this.expr(0);
	        this.state = 125;
	        this.match(CompiladorParser.PARENTH_B);
	        this.state = 126;
	        this.match(CompiladorParser.OPENKEY);
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8478724) !== 0)) {
	            this.state = 127;
	            this.main();
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 133;
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
	    this.enterRule(localctx, 22, CompiladorParser.RULE_condicionalElseIf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(CompiladorParser.ELSE);
	        this.state = 136;
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
	    this.enterRule(localctx, 24, CompiladorParser.RULE_condicionalElse);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(CompiladorParser.ELSE);
	        this.state = 139;
	        this.match(CompiladorParser.OPENKEY);
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8478724) !== 0)) {
	            this.state = 140;
	            this.main();
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 146;
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



	while_() {
	    let localctx = new WhileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, CompiladorParser.RULE_while);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(CompiladorParser.WHILE);
	        this.state = 149;
	        this.match(CompiladorParser.PARENTH_A);
	        this.state = 150;
	        this.expr(0);
	        this.state = 151;
	        this.match(CompiladorParser.PARENTH_B);
	        this.state = 152;
	        this.match(CompiladorParser.OPENKEY);
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8478724) !== 0)) {
	            this.state = 153;
	            this.main();
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 159;
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


}

CompiladorParser.EOF = antlr4.Token.EOF;
CompiladorParser.CHICHAK = 1;
CompiladorParser.PR = 2;
CompiladorParser.PARENTH_A = 3;
CompiladorParser.PARENTH_B = 4;
CompiladorParser.OPENKEY = 5;
CompiladorParser.CLOSEKEY = 6;
CompiladorParser.GOPSSEM = 7;
CompiladorParser.NANU = 8;
CompiladorParser.DO = 9;
CompiladorParser.PPAEDA = 10;
CompiladorParser.EQUALS = 11;
CompiladorParser.PORCENT = 12;
CompiladorParser.PRINT = 13;
CompiladorParser.IF = 14;
CompiladorParser.ELSE = 15;
CompiladorParser.WHILE = 16;
CompiladorParser.LOGIC = 17;
CompiladorParser.MATH = 18;
CompiladorParser.BOOLEAN = 19;
CompiladorParser.STRING = 20;
CompiladorParser.CHAR = 21;
CompiladorParser.SUJJA = 22;
CompiladorParser.GEULSSI = 23;
CompiladorParser.CHINCHA = 24;
CompiladorParser.GONG = 25;

CompiladorParser.RULE_file = 0;
CompiladorParser.RULE_start = 1;
CompiladorParser.RULE_content = 2;
CompiladorParser.RULE_main = 3;
CompiladorParser.RULE_declaracion = 4;
CompiladorParser.RULE_asignacion = 5;
CompiladorParser.RULE_impresion = 6;
CompiladorParser.RULE_expr = 7;
CompiladorParser.RULE_incremento = 8;
CompiladorParser.RULE_condicionalBucle = 9;
CompiladorParser.RULE_condicional = 10;
CompiladorParser.RULE_condicionalElseIf = 11;
CompiladorParser.RULE_condicionalElse = 12;
CompiladorParser.RULE_while = 13;

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

	while_() {
	    return this.getTypedRuleContext(WhileContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	incremento() {
	    return this.getTypedRuleContext(IncrementoContext,0);
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

class CondicionContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.simbolo = null;;
        super.copyFrom(ctx);
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
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.CondicionContext = CondicionContext;

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

	PORCENT() {
	    return this.getToken(CompiladorParser.PORCENT, 0);
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

class IncrementoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_incremento;
    }

	GEULSSI() {
	    return this.getToken(CompiladorParser.GEULSSI, 0);
	};

	DO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CompiladorParser.DO);
	    } else {
	        return this.getToken(CompiladorParser.DO, i);
	    }
	};


	PPAEDA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CompiladorParser.PPAEDA);
	    } else {
	        return this.getToken(CompiladorParser.PPAEDA, i);
	    }
	};


	GONG() {
	    return this.getToken(CompiladorParser.GONG, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitIncremento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
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



class WhileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_while;
    }

	WHILE() {
	    return this.getToken(CompiladorParser.WHILE, 0);
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
	        return visitor.visitWhile(this);
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
CompiladorParser.IncrementoContext = IncrementoContext; 
CompiladorParser.CondicionalBucleContext = CondicionalBucleContext; 
CompiladorParser.CondicionalContext = CondicionalContext; 
CompiladorParser.CondicionalElseIfContext = CondicionalElseIfContext; 
CompiladorParser.CondicionalElseContext = CondicionalElseContext; 
CompiladorParser.WhileContext = WhileContext; 
