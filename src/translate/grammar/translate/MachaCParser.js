// Generated from ./grammar/translate/MachaC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MachaCVisitor from './MachaCVisitor.js';

const serializedATN = [4,1,28,147,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,4,0,28,8,0,11,0,12,0,29,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,5,2,40,8,2,10,
2,12,2,43,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,56,8,3,1,4,
1,4,1,4,1,4,3,4,62,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,3,7,82,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,
93,8,7,10,7,12,7,96,9,7,1,8,1,8,5,8,100,8,8,10,8,12,8,103,9,8,1,8,3,8,106,
8,8,1,9,1,9,1,9,1,9,1,9,1,9,5,9,114,8,9,10,9,12,9,117,9,9,1,9,1,9,1,10,1,
10,1,10,1,11,1,11,1,11,5,11,127,8,11,10,11,12,11,130,9,11,1,11,1,11,1,12,
1,12,1,12,1,12,1,12,1,12,5,12,140,8,12,10,12,12,12,143,9,12,1,12,1,12,1,
12,0,1,14,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,3,2,0,7,8,13,13,1,0,9,10,
2,0,17,17,19,19,152,0,27,1,0,0,0,2,31,1,0,0,0,4,41,1,0,0,0,6,55,1,0,0,0,
8,57,1,0,0,0,10,63,1,0,0,0,12,67,1,0,0,0,14,81,1,0,0,0,16,97,1,0,0,0,18,
107,1,0,0,0,20,120,1,0,0,0,22,123,1,0,0,0,24,133,1,0,0,0,26,28,3,2,1,0,27,
26,1,0,0,0,28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,1,1,0,0,0,31,32,
5,21,0,0,32,33,5,2,0,0,33,34,5,3,0,0,34,35,5,4,0,0,35,36,3,4,2,0,36,37,5,
5,0,0,37,3,1,0,0,0,38,40,3,6,3,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,
0,41,42,1,0,0,0,42,5,1,0,0,0,43,41,1,0,0,0,44,45,3,8,4,0,45,46,5,12,0,0,
46,56,1,0,0,0,47,48,3,10,5,0,48,49,5,12,0,0,49,56,1,0,0,0,50,56,3,16,8,0,
51,52,3,12,6,0,52,53,5,12,0,0,53,56,1,0,0,0,54,56,3,24,12,0,55,44,1,0,0,
0,55,47,1,0,0,0,55,50,1,0,0,0,55,51,1,0,0,0,55,54,1,0,0,0,56,7,1,0,0,0,57,
58,5,1,0,0,58,61,5,26,0,0,59,60,5,6,0,0,60,62,3,14,7,0,61,59,1,0,0,0,61,
62,1,0,0,0,62,9,1,0,0,0,63,64,5,26,0,0,64,65,5,6,0,0,65,66,3,14,7,0,66,11,
1,0,0,0,67,68,5,20,0,0,68,69,5,2,0,0,69,70,3,14,7,0,70,71,5,3,0,0,71,13,
1,0,0,0,72,73,6,7,-1,0,73,74,5,2,0,0,74,75,3,14,7,0,75,76,5,3,0,0,76,82,
1,0,0,0,77,82,5,18,0,0,78,82,5,26,0,0,79,82,5,23,0,0,80,82,5,25,0,0,81,72,
1,0,0,0,81,77,1,0,0,0,81,78,1,0,0,0,81,79,1,0,0,0,81,80,1,0,0,0,82,94,1,
0,0,0,83,84,10,7,0,0,84,85,7,0,0,0,85,93,3,14,7,8,86,87,10,6,0,0,87,88,7,
1,0,0,88,93,3,14,7,7,89,90,10,4,0,0,90,91,7,2,0,0,91,93,3,14,7,5,92,83,1,
0,0,0,92,86,1,0,0,0,92,89,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,1,0,
0,0,95,15,1,0,0,0,96,94,1,0,0,0,97,101,3,18,9,0,98,100,3,20,10,0,99,98,1,
0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,105,1,0,0,0,103,
101,1,0,0,0,104,106,3,22,11,0,105,104,1,0,0,0,105,106,1,0,0,0,106,17,1,0,
0,0,107,108,5,14,0,0,108,109,5,2,0,0,109,110,3,14,7,0,110,111,5,3,0,0,111,
115,5,4,0,0,112,114,3,6,3,0,113,112,1,0,0,0,114,117,1,0,0,0,115,113,1,0,
0,0,115,116,1,0,0,0,116,118,1,0,0,0,117,115,1,0,0,0,118,119,5,5,0,0,119,
19,1,0,0,0,120,121,5,15,0,0,121,122,3,18,9,0,122,21,1,0,0,0,123,124,5,15,
0,0,124,128,5,4,0,0,125,127,3,6,3,0,126,125,1,0,0,0,127,130,1,0,0,0,128,
126,1,0,0,0,128,129,1,0,0,0,129,131,1,0,0,0,130,128,1,0,0,0,131,132,5,5,
0,0,132,23,1,0,0,0,133,134,5,16,0,0,134,135,5,2,0,0,135,136,3,14,7,0,136,
137,5,3,0,0,137,141,5,4,0,0,138,140,3,6,3,0,139,138,1,0,0,0,140,143,1,0,
0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,144,1,0,0,0,143,141,1,0,0,0,144,
145,5,5,0,0,145,25,1,0,0,0,12,29,41,55,61,81,92,94,101,105,115,128,141];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MachaCParser extends antlr4.Parser {

    static grammarFileName = "MachaC.g4";
    static literalNames = [ null, null, "'('", "')'", "'{'", "'}'", "'='", 
                            "'*'", "'/'", "'+'", "'-'", "'\"'", "';'", "'%'", 
                            "'if'", "'else'", "'while'", null, null, null, 
                            "'printf'", "'void main'" ];
    static symbolicNames = [ null, "PR", "PARENTH_A", "PARENTH_B", "OPENKEY", 
                             "CLOSEKEY", "EQUALS", "MULTI", "DIV", "SUM", 
                             "MIN", "DOUBLE_QUOTE", "SEMICOLON", "PORCENT", 
                             "IF", "ELSE", "WHILE", "LOGIC", "BOOLEAN", 
                             "MATH", "PRINT", "MAIN", "CHAR", "INT", "FLOAT", 
                             "STRING", "ID", "INVID", "WS" ];
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
    			return this.precpred(this._ctx, 7);
    		case 1:
    			return this.precpred(this._ctx, 6);
    		case 2:
    			return this.precpred(this._ctx, 4);
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
	        } while(_la===21);
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
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 68239362) !== 0)) {
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
	    this.enterRule(localctx, 6, MachaCParser.RULE_main);
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.declaracion();
	            this.state = 45;
	            this.match(MachaCParser.SEMICOLON);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.asignacion();
	            this.state = 48;
	            this.match(MachaCParser.SEMICOLON);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 50;
	            this.condicionalBucle();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 51;
	            this.impresion();
	            this.state = 52;
	            this.match(MachaCParser.SEMICOLON);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 54;
	            this.while_();
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
	        this.state = 57;
	        this.match(MachaCParser.PR);
	        this.state = 58;
	        this.match(MachaCParser.ID);
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 59;
	            this.match(MachaCParser.EQUALS);
	            this.state = 60;
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
	        this.state = 63;
	        this.match(MachaCParser.ID);
	        this.state = 64;
	        this.match(MachaCParser.EQUALS);
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
	    this.enterRule(localctx, 12, MachaCParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(MachaCParser.PRINT);
	        this.state = 68;
	        this.match(MachaCParser.PARENTH_A);
	        this.state = 69;
	        this.expr(0);
	        this.state = 70;
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
	        this.state = 81;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.state = 73;
	            this.match(MachaCParser.PARENTH_A);
	            this.state = 74;
	            this.expr(0);
	            this.state = 75;
	            this.match(MachaCParser.PARENTH_B);
	            break;
	        case 18:
	            this.state = 77;
	            this.match(MachaCParser.BOOLEAN);
	            break;
	        case 26:
	            this.state = 78;
	            this.match(MachaCParser.ID);
	            break;
	        case 23:
	            this.state = 79;
	            this.match(MachaCParser.INT);
	            break;
	        case 25:
	            this.state = 80;
	            this.match(MachaCParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 94;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 92;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MachaCParser.RULE_expr);
	                    this.state = 83;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 84;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 8576) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 85;
	                    this.expr(8);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MachaCParser.RULE_expr);
	                    this.state = 86;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 87;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 88;
	                    this.expr(7);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MachaCParser.RULE_expr);
	                    this.state = 89;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 90;
	                    localctx.simbolo = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===17 || _la===19)) {
	                        localctx.simbolo = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 91;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 96;
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
	        this.state = 97;
	        this.condicional();
	        this.state = 101;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 98;
	                this.condicionalElseIf(); 
	            }
	            this.state = 103;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 104;
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
	        this.state = 107;
	        this.match(MachaCParser.IF);
	        this.state = 108;
	        this.match(MachaCParser.PARENTH_A);
	        this.state = 109;
	        this.expr(0);
	        this.state = 110;
	        this.match(MachaCParser.PARENTH_B);
	        this.state = 111;
	        this.match(MachaCParser.OPENKEY);
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 68239362) !== 0)) {
	            this.state = 112;
	            this.main();
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 118;
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
	        this.state = 120;
	        this.match(MachaCParser.ELSE);
	        this.state = 121;
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
	        this.state = 123;
	        this.match(MachaCParser.ELSE);
	        this.state = 124;
	        this.match(MachaCParser.OPENKEY);
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 68239362) !== 0)) {
	            this.state = 125;
	            this.main();
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 131;
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
	        this.state = 133;
	        this.match(MachaCParser.WHILE);
	        this.state = 134;
	        this.match(MachaCParser.PARENTH_A);
	        this.state = 135;
	        this.expr(0);
	        this.state = 136;
	        this.match(MachaCParser.PARENTH_B);
	        this.state = 137;
	        this.match(MachaCParser.OPENKEY);
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 68239362) !== 0)) {
	            this.state = 138;
	            this.main();
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 144;
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
MachaCParser.PORCENT = 13;
MachaCParser.IF = 14;
MachaCParser.ELSE = 15;
MachaCParser.WHILE = 16;
MachaCParser.LOGIC = 17;
MachaCParser.BOOLEAN = 18;
MachaCParser.MATH = 19;
MachaCParser.PRINT = 20;
MachaCParser.MAIN = 21;
MachaCParser.CHAR = 22;
MachaCParser.INT = 23;
MachaCParser.FLOAT = 24;
MachaCParser.STRING = 25;
MachaCParser.ID = 26;
MachaCParser.INVID = 27;
MachaCParser.WS = 28;

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

	SEMICOLON() {
	    return this.getToken(MachaCParser.SEMICOLON, 0);
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

	while_() {
	    return this.getTypedRuleContext(WhileContext,0);
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
        this.operation = null;
        this.simbolo = null;
    }

	PARENTH_A() {
	    return this.getToken(MachaCParser.PARENTH_A, 0);
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

	PARENTH_B() {
	    return this.getToken(MachaCParser.PARENTH_B, 0);
	};

	BOOLEAN() {
	    return this.getToken(MachaCParser.BOOLEAN, 0);
	};

	ID() {
	    return this.getToken(MachaCParser.ID, 0);
	};

	INT() {
	    return this.getToken(MachaCParser.INT, 0);
	};

	STRING() {
	    return this.getToken(MachaCParser.STRING, 0);
	};

	MULTI() {
	    return this.getToken(MachaCParser.MULTI, 0);
	};

	DIV() {
	    return this.getToken(MachaCParser.DIV, 0);
	};

	PORCENT() {
	    return this.getToken(MachaCParser.PORCENT, 0);
	};

	SUM() {
	    return this.getToken(MachaCParser.SUM, 0);
	};

	MIN() {
	    return this.getToken(MachaCParser.MIN, 0);
	};

	LOGIC() {
	    return this.getToken(MachaCParser.LOGIC, 0);
	};

	MATH() {
	    return this.getToken(MachaCParser.MATH, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaCVisitor ) {
	        return visitor.visitExpr(this);
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
