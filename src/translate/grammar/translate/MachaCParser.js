// Generated from ./grammar/translate/MachaC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MachaCVisitor from './MachaCVisitor.js';

const serializedATN = [4,1,26,139,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,4,0,28,8,0,11,0,12,0,29,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,5,2,41,8,
2,10,2,12,2,44,9,2,1,3,1,3,1,3,1,3,3,3,50,8,3,1,4,1,4,1,4,1,4,3,4,56,8,4,
1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,
75,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,85,8,7,10,7,12,7,88,9,7,1,8,1,
8,5,8,92,8,8,10,8,12,8,95,9,8,1,8,3,8,98,8,8,1,9,1,9,1,9,1,9,1,9,1,9,5,9,
106,8,9,10,9,12,9,109,9,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,5,11,119,
8,11,10,11,12,11,122,9,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,5,12,132,
8,12,10,12,12,12,135,9,12,1,12,1,12,1,12,0,1,14,13,0,2,4,6,8,10,12,14,16,
18,20,22,24,0,2,1,0,7,8,1,0,9,10,142,0,27,1,0,0,0,2,31,1,0,0,0,4,42,1,0,
0,0,6,49,1,0,0,0,8,51,1,0,0,0,10,57,1,0,0,0,12,61,1,0,0,0,14,74,1,0,0,0,
16,89,1,0,0,0,18,99,1,0,0,0,20,112,1,0,0,0,22,115,1,0,0,0,24,125,1,0,0,0,
26,28,3,2,1,0,27,26,1,0,0,0,28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,
1,1,0,0,0,31,32,5,19,0,0,32,33,5,2,0,0,33,34,5,3,0,0,34,35,5,4,0,0,35,36,
3,4,2,0,36,37,5,5,0,0,37,38,5,12,0,0,38,3,1,0,0,0,39,41,3,6,3,0,40,39,1,
0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,5,1,0,0,0,44,42,1,0,0,
0,45,50,3,8,4,0,46,50,3,10,5,0,47,50,3,16,8,0,48,50,3,12,6,0,49,45,1,0,0,
0,49,46,1,0,0,0,49,47,1,0,0,0,49,48,1,0,0,0,50,7,1,0,0,0,51,52,5,1,0,0,52,
55,5,24,0,0,53,54,5,6,0,0,54,56,3,14,7,0,55,53,1,0,0,0,55,56,1,0,0,0,56,
9,1,0,0,0,57,58,5,24,0,0,58,59,5,6,0,0,59,60,3,14,7,0,60,11,1,0,0,0,61,62,
5,18,0,0,62,63,5,2,0,0,63,64,3,14,7,0,64,65,5,3,0,0,65,13,1,0,0,0,66,67,
6,7,-1,0,67,68,5,2,0,0,68,69,3,14,7,0,69,70,5,3,0,0,70,75,1,0,0,0,71,75,
5,24,0,0,72,75,5,21,0,0,73,75,5,23,0,0,74,66,1,0,0,0,74,71,1,0,0,0,74,72,
1,0,0,0,74,73,1,0,0,0,75,86,1,0,0,0,76,77,10,6,0,0,77,78,7,0,0,0,78,85,3,
14,7,7,79,80,10,5,0,0,80,81,7,1,0,0,81,85,3,14,7,6,82,83,10,1,0,0,83,85,
3,14,7,2,84,76,1,0,0,0,84,79,1,0,0,0,84,82,1,0,0,0,85,88,1,0,0,0,86,84,1,
0,0,0,86,87,1,0,0,0,87,15,1,0,0,0,88,86,1,0,0,0,89,93,3,18,9,0,90,92,3,20,
10,0,91,90,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,97,1,0,0,
0,95,93,1,0,0,0,96,98,3,22,11,0,97,96,1,0,0,0,97,98,1,0,0,0,98,17,1,0,0,
0,99,100,5,13,0,0,100,101,5,2,0,0,101,102,3,14,7,0,102,103,5,3,0,0,103,107,
5,4,0,0,104,106,3,6,3,0,105,104,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,
107,108,1,0,0,0,108,110,1,0,0,0,109,107,1,0,0,0,110,111,5,5,0,0,111,19,1,
0,0,0,112,113,5,14,0,0,113,114,3,18,9,0,114,21,1,0,0,0,115,116,5,14,0,0,
116,120,5,4,0,0,117,119,3,6,3,0,118,117,1,0,0,0,119,122,1,0,0,0,120,118,
1,0,0,0,120,121,1,0,0,0,121,123,1,0,0,0,122,120,1,0,0,0,123,124,5,5,0,0,
124,23,1,0,0,0,125,126,5,15,0,0,126,127,5,2,0,0,127,128,3,14,7,0,128,129,
5,3,0,0,129,133,5,4,0,0,130,132,3,6,3,0,131,130,1,0,0,0,132,135,1,0,0,0,
133,131,1,0,0,0,133,134,1,0,0,0,134,136,1,0,0,0,135,133,1,0,0,0,136,137,
5,5,0,0,137,25,1,0,0,0,12,29,42,49,55,74,84,86,93,97,107,120,133];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MachaCParser extends antlr4.Parser {

    static grammarFileName = "MachaC.g4";
    static literalNames = [ null, null, "'('", "')'", "'{'", "'}'", "'='", 
                            "'*'", "'/'", "'+'", "'-'", "'\"'", "';'", "'if'", 
                            "'else'", "'while'", null, null, "'printf'", 
                            "'void main()'" ];
    static symbolicNames = [ null, "PR", "PARENTH_A", "PARENTH_B", "OPENKEY", 
                             "CLOSEKEY", "EQUALS", "MULTI", "DIV", "SUM", 
                             "MIN", "DOUBLE_QUOTE", "SEMICOLON", "IF", "ELSE", 
                             "WHILE", "LOGIC", "MATH", "PRINT", "MAIN", 
                             "CHAR", "INT", "FLOAT", "STRING", "ID", "INVID", 
                             "WS" ];
    static ruleNames = [ "file", "start", "content", "main", "declaracion", 
                         "asignacion", "impresion", "expr", "condicionalBucle", 
                         "condicional", "condicionalElseIf", "condicionalElse", 
                         "while" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MachaCParser.ruleNames;
        this.literalNames = MachaCParser.literalNames;
        this.symbolicNames = MachaCParser.symbolicNames;
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
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MachaCParser.RULE_file);
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
	        } while(_la===19);
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
	    this.enterRule(localctx, 2, MachaCParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(MachaCParser.MAIN);
	        this.state = 32;
	        this.match(MachaCParser.PARENTH_A);
	        this.state = 33;
	        this.match(MachaCParser.PARENTH_B);
	        this.state = 34;
	        this.match(MachaCParser.OPENKEY);
	        this.state = 35;
	        this.content();
	        this.state = 36;
	        this.match(MachaCParser.CLOSEKEY);
	        this.state = 37;
	        this.match(MachaCParser.SEMICOLON);
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
	    this.enterRule(localctx, 4, MachaCParser.RULE_content);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 17047554) !== 0)) {
	            this.state = 39;
	            this.main();
	            this.state = 44;
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
	    this.enterRule(localctx, 6, MachaCParser.RULE_main);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.declaracion();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.asignacion();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 47;
	            this.condicionalBucle();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 48;
	            this.impresion();
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
	    this.enterRule(localctx, 8, MachaCParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(MachaCParser.PR);
	        this.state = 52;
	        this.match(MachaCParser.ID);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 53;
	            this.match(MachaCParser.EQUALS);
	            this.state = 54;
	            this.expr(0);
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
	    this.enterRule(localctx, 10, MachaCParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(MachaCParser.ID);
	        this.state = 58;
	        this.match(MachaCParser.EQUALS);
	        this.state = 59;
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
	    this.enterRule(localctx, 12, MachaCParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(MachaCParser.PRINT);
	        this.state = 62;
	        this.match(MachaCParser.PARENTH_A);
	        this.state = 63;
	        this.expr(0);
	        this.state = 64;
	        this.match(MachaCParser.PARENTH_B);
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
	    this.enterRecursionRule(localctx, 14, MachaCParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 67;
	            this.match(MachaCParser.PARENTH_A);
	            this.state = 68;
	            this.expr(0);
	            this.state = 69;
	            this.match(MachaCParser.PARENTH_B);
	            break;
	        case 24:
	            localctx = new GeulssiContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 71;
	            this.match(MachaCParser.ID);
	            break;
	        case 21:
	            localctx = new SujjaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 72;
	            this.match(MachaCParser.INT);
	            break;
	        case 23:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 73;
	            this.match(MachaCParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 86;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 84;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MuldivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MachaCParser.RULE_expr);
	                    this.state = 76;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 77;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===7 || _la===8)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 78;
	                    this.expr(7);
	                    break;

	                case 2:
	                    localctx = new SumresContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MachaCParser.RULE_expr);
	                    this.state = 79;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 80;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 81;
	                    this.expr(6);
	                    break;

	                case 3:
	                    localctx = new ImplicitMultContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MachaCParser.RULE_expr);
	                    this.state = 82;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 83;
	                    this.expr(2);
	                    break;

	                } 
	            }
	            this.state = 88;
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



	condicionalBucle() {
	    let localctx = new CondicionalBucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MachaCParser.RULE_condicionalBucle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.condicional();
	        this.state = 93;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 90;
	                this.condicionalElseIf(); 
	            }
	            this.state = 95;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 96;
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
	    this.enterRule(localctx, 18, MachaCParser.RULE_condicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(MachaCParser.IF);
	        this.state = 100;
	        this.match(MachaCParser.PARENTH_A);
	        this.state = 101;
	        this.expr(0);
	        this.state = 102;
	        this.match(MachaCParser.PARENTH_B);
	        this.state = 103;
	        this.match(MachaCParser.OPENKEY);
	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 17047554) !== 0)) {
	            this.state = 104;
	            this.main();
	            this.state = 109;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 110;
	        this.match(MachaCParser.CLOSEKEY);
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
	    this.enterRule(localctx, 20, MachaCParser.RULE_condicionalElseIf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(MachaCParser.ELSE);
	        this.state = 113;
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
	    this.enterRule(localctx, 22, MachaCParser.RULE_condicionalElse);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(MachaCParser.ELSE);
	        this.state = 116;
	        this.match(MachaCParser.OPENKEY);
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 17047554) !== 0)) {
	            this.state = 117;
	            this.main();
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 123;
	        this.match(MachaCParser.CLOSEKEY);
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
	    this.enterRule(localctx, 24, MachaCParser.RULE_while);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(MachaCParser.WHILE);
	        this.state = 126;
	        this.match(MachaCParser.PARENTH_A);
	        this.state = 127;
	        this.expr(0);
	        this.state = 128;
	        this.match(MachaCParser.PARENTH_B);
	        this.state = 129;
	        this.match(MachaCParser.OPENKEY);
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 17047554) !== 0)) {
	            this.state = 130;
	            this.main();
	            this.state = 135;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 136;
	        this.match(MachaCParser.CLOSEKEY);
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

MachaCParser.EOF = antlr4.Token.EOF;
MachaCParser.PR = 1;
MachaCParser.PARENTH_A = 2;
MachaCParser.PARENTH_B = 3;
MachaCParser.OPENKEY = 4;
MachaCParser.CLOSEKEY = 5;
MachaCParser.EQUALS = 6;
MachaCParser.MULTI = 7;
MachaCParser.DIV = 8;
MachaCParser.SUM = 9;
MachaCParser.MIN = 10;
MachaCParser.DOUBLE_QUOTE = 11;
MachaCParser.SEMICOLON = 12;
MachaCParser.IF = 13;
MachaCParser.ELSE = 14;
MachaCParser.WHILE = 15;
MachaCParser.LOGIC = 16;
MachaCParser.MATH = 17;
MachaCParser.PRINT = 18;
MachaCParser.MAIN = 19;
MachaCParser.CHAR = 20;
MachaCParser.INT = 21;
MachaCParser.FLOAT = 22;
MachaCParser.STRING = 23;
MachaCParser.ID = 24;
MachaCParser.INVID = 25;
MachaCParser.WS = 26;

MachaCParser.RULE_file = 0;
MachaCParser.RULE_start = 1;
MachaCParser.RULE_content = 2;
MachaCParser.RULE_main = 3;
MachaCParser.RULE_declaracion = 4;
MachaCParser.RULE_asignacion = 5;
MachaCParser.RULE_impresion = 6;
MachaCParser.RULE_expr = 7;
MachaCParser.RULE_condicionalBucle = 8;
MachaCParser.RULE_condicional = 9;
MachaCParser.RULE_condicionalElseIf = 10;
MachaCParser.RULE_condicionalElse = 11;
MachaCParser.RULE_while = 12;

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
        this.ruleIndex = MachaCParser.RULE_file;
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
	    if ( visitor instanceof MachaCVisitor ) {
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
        this.ruleIndex = MachaCParser.RULE_start;
    }

	MAIN() {
	    return this.getToken(MachaCParser.MAIN, 0);
	};

	PARENTH_A() {
	    return this.getToken(MachaCParser.PARENTH_A, 0);
	};

	PARENTH_B() {
	    return this.getToken(MachaCParser.PARENTH_B, 0);
	};

	OPENKEY() {
	    return this.getToken(MachaCParser.OPENKEY, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	CLOSEKEY() {
	    return this.getToken(MachaCParser.CLOSEKEY, 0);
	};

	SEMICOLON() {
	    return this.getToken(MachaCParser.SEMICOLON, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaCVisitor ) {
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
        this.ruleIndex = MachaCParser.RULE_content;
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
	    if ( visitor instanceof MachaCVisitor ) {
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
        this.ruleIndex = MachaCParser.RULE_main;
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
	    if ( visitor instanceof MachaCVisitor ) {
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
        this.ruleIndex = MachaCParser.RULE_declaracion;
    }

	PR() {
	    return this.getToken(MachaCParser.PR, 0);
	};

	ID() {
	    return this.getToken(MachaCParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(MachaCParser.EQUALS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaCVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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
        this.ruleIndex = MachaCParser.RULE_asignacion;
    }

	ID() {
	    return this.getToken(MachaCParser.ID, 0);
	};

	EQUALS() {
	    return this.getToken(MachaCParser.EQUALS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaCVisitor ) {
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
        this.ruleIndex = MachaCParser.RULE_impresion;
    }

	PRINT() {
	    return this.getToken(MachaCParser.PRINT, 0);
	};

	PARENTH_A() {
	    return this.getToken(MachaCParser.PARENTH_A, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PARENTH_B() {
	    return this.getToken(MachaCParser.PARENTH_B, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaCVisitor ) {
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
        this.ruleIndex = MachaCParser.RULE_expr;
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
	    return this.getToken(MachaCParser.PARENTH_A, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PARENTH_B() {
	    return this.getToken(MachaCParser.PARENTH_B, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaCVisitor ) {
	        return visitor.visitParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaCParser.ParentesisContext = ParentesisContext;

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
	    if ( visitor instanceof MachaCVisitor ) {
	        return visitor.visitImplicitMult(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaCParser.ImplicitMultContext = ImplicitMultContext;

class SujjaContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(MachaCParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaCVisitor ) {
	        return visitor.visitSujja(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaCParser.SujjaContext = SujjaContext;

class StringContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(MachaCParser.STRING, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaCVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaCParser.StringContext = StringContext;

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

	SUM() {
	    return this.getToken(MachaCParser.SUM, 0);
	};

	MIN() {
	    return this.getToken(MachaCParser.MIN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaCVisitor ) {
	        return visitor.visitSumres(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaCParser.SumresContext = SumresContext;

class GeulssiContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(MachaCParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaCVisitor ) {
	        return visitor.visitGeulssi(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaCParser.GeulssiContext = GeulssiContext;

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

	MULTI() {
	    return this.getToken(MachaCParser.MULTI, 0);
	};

	DIV() {
	    return this.getToken(MachaCParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaCVisitor ) {
	        return visitor.visitMuldiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MachaCParser.MuldivContext = MuldivContext;

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
        this.ruleIndex = MachaCParser.RULE_condicionalBucle;
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
	    if ( visitor instanceof MachaCVisitor ) {
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
        this.ruleIndex = MachaCParser.RULE_condicional;
    }

	IF() {
	    return this.getToken(MachaCParser.IF, 0);
	};

	PARENTH_A() {
	    return this.getToken(MachaCParser.PARENTH_A, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PARENTH_B() {
	    return this.getToken(MachaCParser.PARENTH_B, 0);
	};

	OPENKEY() {
	    return this.getToken(MachaCParser.OPENKEY, 0);
	};

	CLOSEKEY() {
	    return this.getToken(MachaCParser.CLOSEKEY, 0);
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
	    if ( visitor instanceof MachaCVisitor ) {
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
        this.ruleIndex = MachaCParser.RULE_condicionalElseIf;
    }

	ELSE() {
	    return this.getToken(MachaCParser.ELSE, 0);
	};

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaCVisitor ) {
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
        this.ruleIndex = MachaCParser.RULE_condicionalElse;
    }

	ELSE() {
	    return this.getToken(MachaCParser.ELSE, 0);
	};

	OPENKEY() {
	    return this.getToken(MachaCParser.OPENKEY, 0);
	};

	CLOSEKEY() {
	    return this.getToken(MachaCParser.CLOSEKEY, 0);
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
	    if ( visitor instanceof MachaCVisitor ) {
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
        this.ruleIndex = MachaCParser.RULE_while;
    }

	WHILE() {
	    return this.getToken(MachaCParser.WHILE, 0);
	};

	PARENTH_A() {
	    return this.getToken(MachaCParser.PARENTH_A, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PARENTH_B() {
	    return this.getToken(MachaCParser.PARENTH_B, 0);
	};

	OPENKEY() {
	    return this.getToken(MachaCParser.OPENKEY, 0);
	};

	CLOSEKEY() {
	    return this.getToken(MachaCParser.CLOSEKEY, 0);
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
	    if ( visitor instanceof MachaCVisitor ) {
	        return visitor.visitWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MachaCParser.FileContext = FileContext; 
MachaCParser.StartContext = StartContext; 
MachaCParser.ContentContext = ContentContext; 
MachaCParser.MainContext = MainContext; 
MachaCParser.DeclaracionContext = DeclaracionContext; 
MachaCParser.AsignacionContext = AsignacionContext; 
MachaCParser.ImpresionContext = ImpresionContext; 
MachaCParser.ExprContext = ExprContext; 
MachaCParser.CondicionalBucleContext = CondicionalBucleContext; 
MachaCParser.CondicionalContext = CondicionalContext; 
MachaCParser.CondicionalElseIfContext = CondicionalElseIfContext; 
MachaCParser.CondicionalElseContext = CondicionalElseContext; 
MachaCParser.WhileContext = WhileContext; 
