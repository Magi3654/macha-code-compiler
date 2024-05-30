// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompiladorVisitor from './CompiladorVisitor.js';

const serializedATN = [4,1,30,182,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,4,0,32,8,0,11,0,12,0,33,1,1,1,1,1,1,1,1,1,1,1,2,
5,2,42,8,2,10,2,12,2,45,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,54,8,3,1,4,1,
4,1,4,1,4,3,4,60,8,4,1,4,1,4,1,4,1,4,3,4,66,8,4,3,4,68,8,4,1,5,1,5,1,5,1,
5,1,5,1,5,3,5,76,8,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,3,7,92,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,
7,108,8,7,10,7,12,7,111,9,7,1,8,1,8,3,8,115,8,8,1,8,1,8,1,8,1,8,3,8,121,
8,8,1,9,1,9,5,9,125,8,9,10,9,12,9,128,9,9,1,9,3,9,131,8,9,1,10,1,10,1,10,
1,10,1,10,1,10,5,10,139,8,10,10,10,12,10,142,9,10,1,10,1,10,1,11,1,11,1,
11,1,12,1,12,1,12,5,12,152,8,12,10,12,12,12,155,9,12,1,12,1,12,1,13,1,13,
1,13,1,13,1,13,1,13,5,13,165,8,13,10,13,12,13,168,9,13,1,13,1,13,1,14,1,
14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,0,1,14,15,0,2,4,6,8,10,12,
14,16,18,20,22,24,26,28,0,5,2,0,27,27,29,29,2,0,20,20,23,24,2,0,7,8,12,12,
1,0,9,10,1,0,21,22,194,0,31,1,0,0,0,2,35,1,0,0,0,4,43,1,0,0,0,6,53,1,0,0,
0,8,67,1,0,0,0,10,75,1,0,0,0,12,77,1,0,0,0,14,91,1,0,0,0,16,112,1,0,0,0,
18,122,1,0,0,0,20,132,1,0,0,0,22,145,1,0,0,0,24,148,1,0,0,0,26,158,1,0,0,
0,28,171,1,0,0,0,30,32,3,2,1,0,31,30,1,0,0,0,32,33,1,0,0,0,33,31,1,0,0,0,
33,34,1,0,0,0,34,1,1,0,0,0,35,36,5,1,0,0,36,37,5,5,0,0,37,38,3,4,2,0,38,
39,5,6,0,0,39,3,1,0,0,0,40,42,3,6,3,0,41,40,1,0,0,0,42,45,1,0,0,0,43,41,
1,0,0,0,43,44,1,0,0,0,44,5,1,0,0,0,45,43,1,0,0,0,46,54,3,8,4,0,47,54,3,10,
5,0,48,54,3,18,9,0,49,54,3,26,13,0,50,54,3,28,14,0,51,54,3,12,6,0,52,54,
3,16,8,0,53,46,1,0,0,0,53,47,1,0,0,0,53,48,1,0,0,0,53,49,1,0,0,0,53,50,1,
0,0,0,53,51,1,0,0,0,53,52,1,0,0,0,54,7,1,0,0,0,55,56,5,2,0,0,56,59,5,28,
0,0,57,58,5,11,0,0,58,60,3,14,7,0,59,57,1,0,0,0,59,60,1,0,0,0,60,68,1,0,
0,0,61,62,5,2,0,0,62,65,7,0,0,0,63,64,5,11,0,0,64,66,3,14,7,0,65,63,1,0,
0,0,65,66,1,0,0,0,66,68,1,0,0,0,67,55,1,0,0,0,67,61,1,0,0,0,68,9,1,0,0,0,
69,70,5,28,0,0,70,71,5,11,0,0,71,76,3,14,7,0,72,73,5,28,0,0,73,74,5,13,0,
0,74,76,3,14,7,0,75,69,1,0,0,0,75,72,1,0,0,0,76,11,1,0,0,0,77,78,5,15,0,
0,78,79,5,3,0,0,79,80,3,14,7,0,80,81,5,4,0,0,81,13,1,0,0,0,82,83,6,7,-1,
0,83,84,5,3,0,0,84,85,3,14,7,0,85,86,5,4,0,0,86,92,1,0,0,0,87,92,7,1,0,0,
88,92,5,28,0,0,89,92,5,27,0,0,90,92,5,25,0,0,91,82,1,0,0,0,91,87,1,0,0,0,
91,88,1,0,0,0,91,89,1,0,0,0,91,90,1,0,0,0,92,109,1,0,0,0,93,94,10,9,0,0,
94,95,7,2,0,0,95,108,3,14,7,10,96,97,10,8,0,0,97,98,7,3,0,0,98,108,3,14,
7,9,99,100,10,6,0,0,100,101,7,1,0,0,101,108,3,14,7,7,102,103,10,5,0,0,103,
104,7,4,0,0,104,108,3,14,7,6,105,106,10,1,0,0,106,108,3,14,7,2,107,93,1,
0,0,0,107,96,1,0,0,0,107,99,1,0,0,0,107,102,1,0,0,0,107,105,1,0,0,0,108,
111,1,0,0,0,109,107,1,0,0,0,109,110,1,0,0,0,110,15,1,0,0,0,111,109,1,0,0,
0,112,114,5,28,0,0,113,115,5,30,0,0,114,113,1,0,0,0,114,115,1,0,0,0,115,
120,1,0,0,0,116,117,5,9,0,0,117,121,5,9,0,0,118,119,5,10,0,0,119,121,5,10,
0,0,120,116,1,0,0,0,120,118,1,0,0,0,121,17,1,0,0,0,122,126,3,20,10,0,123,
125,3,22,11,0,124,123,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,126,127,1,
0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,129,131,3,24,12,0,130,129,1,0,0,0,
130,131,1,0,0,0,131,19,1,0,0,0,132,133,5,16,0,0,133,134,5,3,0,0,134,135,
3,14,7,0,135,136,5,4,0,0,136,140,5,5,0,0,137,139,3,6,3,0,138,137,1,0,0,0,
139,142,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,143,1,0,0,0,142,140,
1,0,0,0,143,144,5,6,0,0,144,21,1,0,0,0,145,146,5,17,0,0,146,147,3,20,10,
0,147,23,1,0,0,0,148,149,5,17,0,0,149,153,5,5,0,0,150,152,3,6,3,0,151,150,
1,0,0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,156,1,0,0,0,
155,153,1,0,0,0,156,157,5,6,0,0,157,25,1,0,0,0,158,159,5,19,0,0,159,160,
5,3,0,0,160,161,3,14,7,0,161,162,5,4,0,0,162,166,5,5,0,0,163,165,3,6,3,0,
164,163,1,0,0,0,165,168,1,0,0,0,166,164,1,0,0,0,166,167,1,0,0,0,167,169,
1,0,0,0,168,166,1,0,0,0,169,170,5,6,0,0,170,27,1,0,0,0,171,172,5,18,0,0,
172,173,5,3,0,0,173,174,3,8,4,0,174,175,3,14,7,0,175,176,3,16,8,0,176,177,
5,4,0,0,177,178,5,5,0,0,178,179,3,6,3,0,179,180,5,6,0,0,180,29,1,0,0,0,17,
33,43,53,59,65,67,75,91,107,109,114,120,126,130,140,153,166];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompiladorParser extends antlr4.Parser {

    static grammarFileName = "Compilador.g4";
    static literalNames = [ null, "'chichak'", null, "'('", "')'", "'{'", 
                            "'}'", "'*'", "'/'", "'+'", "'-'", "'='", "'%'", 
                            null, "','", "'inswae'", "'myeon'", "'namochi'", 
                            "'wihan'", "'geuttae'", null, "'&&'", "'||'" ];
    static symbolicNames = [ null, "CHICHAK", "PR", "PARENTH_A", "PARENTH_B", 
                             "OPENKEY", "CLOSEKEY", "GOPSSEM", "NANU", "DO", 
                             "PPAEDA", "EQUALS", "PORCENT", "SUMARIZER", 
                             "COMA", "PRINT", "IF", "ELSE", "FOR", "WHILE", 
                             "LOGIC", "AND", "OR", "MATH", "BOOLEAN", "STRING", 
                             "CHAR", "SUJJA", "GEULSSI", "CHINCHA", "GONG" ];
    static ruleNames = [ "file", "start", "content", "main", "declaracion", 
                         "asignacion", "impresion", "expr", "incremento", 
                         "condicionalBucle", "condicional", "condicionalElseIf", 
                         "condicionalElse", "while", "for" ];

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
    			return this.precpred(this._ctx, 9);
    		case 1:
    			return this.precpred(this._ctx, 8);
    		case 2:
    			return this.precpred(this._ctx, 6);
    		case 3:
    			return this.precpred(this._ctx, 5);
    		case 4:
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
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.start();
	            this.state = 33; 
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
	        this.state = 35;
	        this.match(CompiladorParser.CHICHAK);
	        this.state = 36;
	        this.match(CompiladorParser.OPENKEY);
	        this.state = 37;
	        this.content();
	        this.state = 38;
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
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 269320196) !== 0)) {
	            this.state = 40;
	            this.main();
	            this.state = 45;
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
	        this.state = 53;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.declaracion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.asignacion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 48;
	            this.condicionalBucle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 49;
	            this.while_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 50;
	            this.for_();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 51;
	            this.impresion();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 52;
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
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ValidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 55;
	            this.match(CompiladorParser.PR);
	            this.state = 56;
	            this.match(CompiladorParser.GEULSSI);
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===11) {
	                this.state = 57;
	                this.match(CompiladorParser.EQUALS);
	                this.state = 58;
	                this.expr(0);
	            }

	            break;

	        case 2:
	            localctx = new InvalidAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.match(CompiladorParser.PR);
	            this.state = 62;
	            localctx.ID = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===27 || _la===29)) {
	                localctx.ID = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===11) {
	                this.state = 63;
	                this.match(CompiladorParser.EQUALS);
	                this.state = 64;
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
	        this.state = 75;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new SimpleAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.match(CompiladorParser.GEULSSI);
	            this.state = 70;
	            this.match(CompiladorParser.EQUALS);
	            this.state = 71;
	            this.expr(0);
	            break;

	        case 2:
	            localctx = new SumarizerAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 72;
	            this.match(CompiladorParser.GEULSSI);
	            this.state = 73;
	            this.match(CompiladorParser.SUMARIZER);
	            this.state = 74;
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



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CompiladorParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(CompiladorParser.PRINT);
	        this.state = 78;
	        this.match(CompiladorParser.PARENTH_A);
	        this.state = 79;
	        this.expr(0);
	        this.state = 80;
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
	        this.state = 91;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 83;
	            this.match(CompiladorParser.PARENTH_A);
	            this.state = 84;
	            this.expr(0);
	            this.state = 85;
	            this.match(CompiladorParser.PARENTH_B);
	            break;
	        case 20:
	        case 23:
	        case 24:
	            localctx = new CondicionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 87;
	            localctx.simbolo = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 26214400) !== 0))) {
	                localctx.simbolo = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 28:
	            localctx = new GeulssiContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 88;
	            this.match(CompiladorParser.GEULSSI);
	            break;
	        case 27:
	            localctx = new SujjaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 89;
	            this.match(CompiladorParser.SUJJA);
	            break;
	        case 25:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 90;
	            this.match(CompiladorParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 109;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 107;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MuldivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 93;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 94;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4480) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 95;
	                    this.expr(10);
	                    break;

	                case 2:
	                    localctx = new SumresContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 96;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 97;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 98;
	                    this.expr(9);
	                    break;

	                case 3:
	                    localctx = new CondicionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 99;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 100;
	                    localctx.simbolo = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 26214400) !== 0))) {
	                        localctx.simbolo = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 101;
	                    this.expr(7);
	                    break;

	                case 4:
	                    localctx = new CompandoContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 102;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 103;
	                    localctx.simbolo = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===21 || _la===22)) {
	                        localctx.simbolo = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 104;
	                    this.expr(6);
	                    break;

	                case 5:
	                    localctx = new ImplicitMultContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_expr);
	                    this.state = 105;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 106;
	                    this.expr(2);
	                    break;

	                } 
	            }
	            this.state = 111;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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
	        this.state = 112;
	        this.match(CompiladorParser.GEULSSI);
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 113;
	            this.match(CompiladorParser.GONG);
	        }

	        this.state = 120;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.state = 116;
	            this.match(CompiladorParser.DO);
	            this.state = 117;
	            this.match(CompiladorParser.DO);
	            break;
	        case 10:
	            this.state = 118;
	            this.match(CompiladorParser.PPAEDA);
	            this.state = 119;
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
	        this.state = 122;
	        this.condicional();
	        this.state = 126;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 123;
	                this.condicionalElseIf(); 
	            }
	            this.state = 128;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	        }

	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 129;
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
	        this.state = 132;
	        this.match(CompiladorParser.IF);
	        this.state = 133;
	        this.match(CompiladorParser.PARENTH_A);
	        this.state = 134;
	        this.expr(0);
	        this.state = 135;
	        this.match(CompiladorParser.PARENTH_B);
	        this.state = 136;
	        this.match(CompiladorParser.OPENKEY);
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 269320196) !== 0)) {
	            this.state = 137;
	            this.main();
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 143;
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
	        this.state = 145;
	        this.match(CompiladorParser.ELSE);
	        this.state = 146;
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
	        this.state = 148;
	        this.match(CompiladorParser.ELSE);
	        this.state = 149;
	        this.match(CompiladorParser.OPENKEY);
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 269320196) !== 0)) {
	            this.state = 150;
	            this.main();
	            this.state = 155;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 156;
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
	        this.state = 158;
	        this.match(CompiladorParser.WHILE);
	        this.state = 159;
	        this.match(CompiladorParser.PARENTH_A);
	        this.state = 160;
	        this.expr(0);
	        this.state = 161;
	        this.match(CompiladorParser.PARENTH_B);
	        this.state = 162;
	        this.match(CompiladorParser.OPENKEY);
	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 269320196) !== 0)) {
	            this.state = 163;
	            this.main();
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 169;
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



	for_() {
	    let localctx = new ForContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, CompiladorParser.RULE_for);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(CompiladorParser.FOR);
	        this.state = 172;
	        this.match(CompiladorParser.PARENTH_A);
	        this.state = 173;
	        this.declaracion();
	        this.state = 174;
	        this.expr(0);
	        this.state = 175;
	        this.incremento();
	        this.state = 176;
	        this.match(CompiladorParser.PARENTH_B);
	        this.state = 177;
	        this.match(CompiladorParser.OPENKEY);
	        this.state = 178;
	        this.main();
	        this.state = 179;
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
CompiladorParser.SUMARIZER = 13;
CompiladorParser.COMA = 14;
CompiladorParser.PRINT = 15;
CompiladorParser.IF = 16;
CompiladorParser.ELSE = 17;
CompiladorParser.FOR = 18;
CompiladorParser.WHILE = 19;
CompiladorParser.LOGIC = 20;
CompiladorParser.AND = 21;
CompiladorParser.OR = 22;
CompiladorParser.MATH = 23;
CompiladorParser.BOOLEAN = 24;
CompiladorParser.STRING = 25;
CompiladorParser.CHAR = 26;
CompiladorParser.SUJJA = 27;
CompiladorParser.GEULSSI = 28;
CompiladorParser.CHINCHA = 29;
CompiladorParser.GONG = 30;

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
CompiladorParser.RULE_for = 14;

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

	for_() {
	    return this.getTypedRuleContext(ForContext,0);
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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SumarizerAssignContext extends AsignacionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	GEULSSI() {
	    return this.getToken(CompiladorParser.GEULSSI, 0);
	};

	SUMARIZER() {
	    return this.getToken(CompiladorParser.SUMARIZER, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitSumarizerAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.SumarizerAssignContext = SumarizerAssignContext;

class SimpleAssignContext extends AsignacionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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
	        return visitor.visitSimpleAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.SimpleAssignContext = SimpleAssignContext;

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

class CompandoContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.simbolo = null;;
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

	AND() {
	    return this.getToken(CompiladorParser.AND, 0);
	};

	OR() {
	    return this.getToken(CompiladorParser.OR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitCompando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.CompandoContext = CompandoContext;

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



class ForContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_for;
    }

	FOR() {
	    return this.getToken(CompiladorParser.FOR, 0);
	};

	PARENTH_A() {
	    return this.getToken(CompiladorParser.PARENTH_A, 0);
	};

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	incremento() {
	    return this.getTypedRuleContext(IncrementoContext,0);
	};

	PARENTH_B() {
	    return this.getToken(CompiladorParser.PARENTH_B, 0);
	};

	OPENKEY() {
	    return this.getToken(CompiladorParser.OPENKEY, 0);
	};

	main() {
	    return this.getTypedRuleContext(MainContext,0);
	};

	CLOSEKEY() {
	    return this.getToken(CompiladorParser.CLOSEKEY, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitFor(this);
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
CompiladorParser.ForContext = ForContext; 
