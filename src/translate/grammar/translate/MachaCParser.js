// Generated from ./grammar/translate/MachaC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MachaCVisitor from './MachaCVisitor.js';

const serializedATN = [4,1,30,172,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,4,0,32,8,0,11,0,12,0,33,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,2,5,2,44,8,2,10,2,12,2,47,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,3,3,61,8,3,1,4,1,4,1,4,1,4,3,4,67,8,4,1,5,1,5,1,5,1,5,1,6,1,
6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,87,8,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,5,7,98,8,7,10,7,12,7,101,9,7,1,8,1,8,3,8,105,8,8,
1,8,1,8,1,8,1,8,3,8,111,8,8,1,9,1,9,5,9,115,8,9,10,9,12,9,118,9,9,1,9,3,
9,121,8,9,1,10,1,10,1,10,1,10,1,10,1,10,5,10,129,8,10,10,10,12,10,132,9,
10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,5,12,142,8,12,10,12,12,12,145,
9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,5,13,155,8,13,10,13,12,13,158,
9,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,0,
1,14,15,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,0,4,1,0,6,7,2,0,8,9,14,14,
1,0,10,11,2,0,19,19,21,21,178,0,31,1,0,0,0,2,35,1,0,0,0,4,45,1,0,0,0,6,60,
1,0,0,0,8,62,1,0,0,0,10,68,1,0,0,0,12,72,1,0,0,0,14,86,1,0,0,0,16,102,1,
0,0,0,18,112,1,0,0,0,20,122,1,0,0,0,22,135,1,0,0,0,24,138,1,0,0,0,26,148,
1,0,0,0,28,161,1,0,0,0,30,32,3,2,1,0,31,30,1,0,0,0,32,33,1,0,0,0,33,31,1,
0,0,0,33,34,1,0,0,0,34,1,1,0,0,0,35,36,5,23,0,0,36,37,5,2,0,0,37,38,5,3,
0,0,38,39,5,4,0,0,39,40,3,4,2,0,40,41,5,5,0,0,41,3,1,0,0,0,42,44,3,6,3,0,
43,42,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,5,1,0,0,0,47,
45,1,0,0,0,48,49,3,8,4,0,49,50,5,13,0,0,50,61,1,0,0,0,51,52,3,10,5,0,52,
53,5,13,0,0,53,61,1,0,0,0,54,61,3,18,9,0,55,61,3,26,13,0,56,57,3,12,6,0,
57,58,5,13,0,0,58,61,1,0,0,0,59,61,3,16,8,0,60,48,1,0,0,0,60,51,1,0,0,0,
60,54,1,0,0,0,60,55,1,0,0,0,60,56,1,0,0,0,60,59,1,0,0,0,61,7,1,0,0,0,62,
63,5,1,0,0,63,66,5,28,0,0,64,65,5,6,0,0,65,67,3,14,7,0,66,64,1,0,0,0,66,
67,1,0,0,0,67,9,1,0,0,0,68,69,5,28,0,0,69,70,7,0,0,0,70,71,3,14,7,0,71,11,
1,0,0,0,72,73,5,22,0,0,73,74,5,2,0,0,74,75,3,14,7,0,75,76,5,3,0,0,76,13,
1,0,0,0,77,78,6,7,-1,0,78,79,5,2,0,0,79,80,3,14,7,0,80,81,5,3,0,0,81,87,
1,0,0,0,82,87,5,20,0,0,83,87,5,28,0,0,84,87,5,25,0,0,85,87,5,27,0,0,86,77,
1,0,0,0,86,82,1,0,0,0,86,83,1,0,0,0,86,84,1,0,0,0,86,85,1,0,0,0,87,99,1,
0,0,0,88,89,10,7,0,0,89,90,7,1,0,0,90,98,3,14,7,8,91,92,10,6,0,0,92,93,7,
2,0,0,93,98,3,14,7,7,94,95,10,4,0,0,95,96,7,3,0,0,96,98,3,14,7,5,97,88,1,
0,0,0,97,91,1,0,0,0,97,94,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,1,
0,0,0,100,15,1,0,0,0,101,99,1,0,0,0,102,104,5,28,0,0,103,105,5,30,0,0,104,
103,1,0,0,0,104,105,1,0,0,0,105,110,1,0,0,0,106,107,5,10,0,0,107,111,5,10,
0,0,108,109,5,11,0,0,109,111,5,11,0,0,110,106,1,0,0,0,110,108,1,0,0,0,111,
17,1,0,0,0,112,116,3,20,10,0,113,115,3,22,11,0,114,113,1,0,0,0,115,118,1,
0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,119,
121,3,24,12,0,120,119,1,0,0,0,120,121,1,0,0,0,121,19,1,0,0,0,122,123,5,15,
0,0,123,124,5,2,0,0,124,125,3,14,7,0,125,126,5,3,0,0,126,130,5,4,0,0,127,
129,3,6,3,0,128,127,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,
0,0,131,133,1,0,0,0,132,130,1,0,0,0,133,134,5,5,0,0,134,21,1,0,0,0,135,136,
5,16,0,0,136,137,3,20,10,0,137,23,1,0,0,0,138,139,5,16,0,0,139,143,5,4,0,
0,140,142,3,6,3,0,141,140,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,144,
1,0,0,0,144,146,1,0,0,0,145,143,1,0,0,0,146,147,5,5,0,0,147,25,1,0,0,0,148,
149,5,18,0,0,149,150,5,2,0,0,150,151,3,14,7,0,151,152,5,3,0,0,152,156,5,
4,0,0,153,155,3,6,3,0,154,153,1,0,0,0,155,158,1,0,0,0,156,154,1,0,0,0,156,
157,1,0,0,0,157,159,1,0,0,0,158,156,1,0,0,0,159,160,5,5,0,0,160,27,1,0,0,
0,161,162,5,17,0,0,162,163,5,2,0,0,163,164,3,8,4,0,164,165,3,14,7,0,165,
166,3,16,8,0,166,167,5,3,0,0,167,168,5,4,0,0,168,169,3,6,3,0,169,170,5,5,
0,0,170,29,1,0,0,0,14,33,45,60,66,86,97,99,104,110,116,120,130,143,156];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MachaCParser extends antlr4.Parser {

    static grammarFileName = "MachaC.g4";
    static literalNames = [ null, null, "'('", "')'", "'{'", "'}'", "'='", 
                            null, "'*'", "'/'", "'+'", "'-'", "'\"'", "';'", 
                            "'%'", "'if'", "'else'", "'for'", "'while'", 
                            null, null, null, "'printf'", "'void main'" ];
    static symbolicNames = [ null, "PR", "PARENTH_A", "PARENTH_B", "OPENKEY", 
                             "CLOSEKEY", "EQUALS", "SUMARIZER", "MULTI", 
                             "DIV", "SUM", "MIN", "DOUBLE_QUOTE", "SEMICOLON", 
                             "PORCENT", "IF", "ELSE", "FOR", "WHILE", "LOGIC", 
                             "BOOLEAN", "MATH", "PRINT", "MAIN", "CHAR", 
                             "INT", "FLOAT", "STRING", "ID", "INVID", "WS" ];
    static ruleNames = [ "file", "start", "content", "main", "declaracion", 
                         "asignacion", "impresion", "expr", "incremento", 
                         "condicionalBucle", "condicional", "condicionalElseIf", 
                         "condicionalElse", "while", "for" ];

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
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 30;
	            this.start();
	            this.state = 33; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===23);
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
	        this.state = 35;
	        this.match(MachaCParser.MAIN);
	        this.state = 36;
	        this.match(MachaCParser.PARENTH_A);
	        this.state = 37;
	        this.match(MachaCParser.PARENTH_B);
	        this.state = 38;
	        this.match(MachaCParser.OPENKEY);
	        this.state = 39;
	        this.content();
	        this.state = 40;
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
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 272924674) !== 0)) {
	            this.state = 42;
	            this.main();
	            this.state = 47;
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
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.declaracion();
	            this.state = 49;
	            this.match(MachaCParser.SEMICOLON);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.asignacion();
	            this.state = 52;
	            this.match(MachaCParser.SEMICOLON);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 54;
	            this.condicionalBucle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 55;
	            this.while_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 56;
	            this.impresion();
	            this.state = 57;
	            this.match(MachaCParser.SEMICOLON);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 59;
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
	    this.enterRule(localctx, 8, MachaCParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(MachaCParser.PR);
	        this.state = 63;
	        this.match(MachaCParser.ID);
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 64;
	            this.match(MachaCParser.EQUALS);
	            this.state = 65;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(MachaCParser.ID);
	        this.state = 69;
	        localctx.ig = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===7)) {
	            localctx.ig = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 70;
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
	        this.state = 72;
	        this.match(MachaCParser.PRINT);
	        this.state = 73;
	        this.match(MachaCParser.PARENTH_A);
	        this.state = 74;
	        this.expr(0);
	        this.state = 75;
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
	        this.state = 86;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.state = 78;
	            this.match(MachaCParser.PARENTH_A);
	            this.state = 79;
	            this.expr(0);
	            this.state = 80;
	            this.match(MachaCParser.PARENTH_B);
	            break;
	        case 20:
	            this.state = 82;
	            this.match(MachaCParser.BOOLEAN);
	            break;
	        case 28:
	            this.state = 83;
	            this.match(MachaCParser.ID);
	            break;
	        case 25:
	            this.state = 84;
	            this.match(MachaCParser.INT);
	            break;
	        case 27:
	            this.state = 85;
	            this.match(MachaCParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 99;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 97;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MachaCParser.RULE_expr);
	                    this.state = 88;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 89;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 17152) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 90;
	                    this.expr(8);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MachaCParser.RULE_expr);
	                    this.state = 91;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 92;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 93;
	                    this.expr(7);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MachaCParser.RULE_expr);
	                    this.state = 94;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 95;
	                    localctx.simbolo = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===19 || _la===21)) {
	                        localctx.simbolo = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 96;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 101;
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



	incremento() {
	    let localctx = new IncrementoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MachaCParser.RULE_incremento);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(MachaCParser.ID);
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 103;
	            this.match(MachaCParser.WS);
	        }

	        this.state = 110;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.state = 106;
	            this.match(MachaCParser.SUM);
	            this.state = 107;
	            this.match(MachaCParser.SUM);
	            break;
	        case 11:
	            this.state = 108;
	            this.match(MachaCParser.MIN);
	            this.state = 109;
	            this.match(MachaCParser.MIN);
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
	    this.enterRule(localctx, 18, MachaCParser.RULE_condicionalBucle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.condicional();
	        this.state = 116;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 113;
	                this.condicionalElseIf(); 
	            }
	            this.state = 118;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
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
	    this.enterRule(localctx, 20, MachaCParser.RULE_condicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(MachaCParser.IF);
	        this.state = 123;
	        this.match(MachaCParser.PARENTH_A);
	        this.state = 124;
	        this.expr(0);
	        this.state = 125;
	        this.match(MachaCParser.PARENTH_B);
	        this.state = 126;
	        this.match(MachaCParser.OPENKEY);
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 272924674) !== 0)) {
	            this.state = 127;
	            this.main();
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 133;
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
	    this.enterRule(localctx, 22, MachaCParser.RULE_condicionalElseIf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(MachaCParser.ELSE);
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
	    this.enterRule(localctx, 24, MachaCParser.RULE_condicionalElse);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(MachaCParser.ELSE);
	        this.state = 139;
	        this.match(MachaCParser.OPENKEY);
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 272924674) !== 0)) {
	            this.state = 140;
	            this.main();
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 146;
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
	    this.enterRule(localctx, 26, MachaCParser.RULE_while);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(MachaCParser.WHILE);
	        this.state = 149;
	        this.match(MachaCParser.PARENTH_A);
	        this.state = 150;
	        this.expr(0);
	        this.state = 151;
	        this.match(MachaCParser.PARENTH_B);
	        this.state = 152;
	        this.match(MachaCParser.OPENKEY);
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 272924674) !== 0)) {
	            this.state = 153;
	            this.main();
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 159;
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



	for_() {
	    let localctx = new ForContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MachaCParser.RULE_for);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(MachaCParser.FOR);
	        this.state = 162;
	        this.match(MachaCParser.PARENTH_A);
	        this.state = 163;
	        this.declaracion();
	        this.state = 164;
	        this.expr(0);
	        this.state = 165;
	        this.incremento();
	        this.state = 166;
	        this.match(MachaCParser.PARENTH_B);
	        this.state = 167;
	        this.match(MachaCParser.OPENKEY);
	        this.state = 168;
	        this.main();
	        this.state = 169;
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
MachaCParser.SUMARIZER = 7;
MachaCParser.MULTI = 8;
MachaCParser.DIV = 9;
MachaCParser.SUM = 10;
MachaCParser.MIN = 11;
MachaCParser.DOUBLE_QUOTE = 12;
MachaCParser.SEMICOLON = 13;
MachaCParser.PORCENT = 14;
MachaCParser.IF = 15;
MachaCParser.ELSE = 16;
MachaCParser.FOR = 17;
MachaCParser.WHILE = 18;
MachaCParser.LOGIC = 19;
MachaCParser.BOOLEAN = 20;
MachaCParser.MATH = 21;
MachaCParser.PRINT = 22;
MachaCParser.MAIN = 23;
MachaCParser.CHAR = 24;
MachaCParser.INT = 25;
MachaCParser.FLOAT = 26;
MachaCParser.STRING = 27;
MachaCParser.ID = 28;
MachaCParser.INVID = 29;
MachaCParser.WS = 30;

MachaCParser.RULE_file = 0;
MachaCParser.RULE_start = 1;
MachaCParser.RULE_content = 2;
MachaCParser.RULE_main = 3;
MachaCParser.RULE_declaracion = 4;
MachaCParser.RULE_asignacion = 5;
MachaCParser.RULE_impresion = 6;
MachaCParser.RULE_expr = 7;
MachaCParser.RULE_incremento = 8;
MachaCParser.RULE_condicionalBucle = 9;
MachaCParser.RULE_condicional = 10;
MachaCParser.RULE_condicionalElseIf = 11;
MachaCParser.RULE_condicionalElse = 12;
MachaCParser.RULE_while = 13;
MachaCParser.RULE_for = 14;

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
        this.ig = null;
    }

	ID() {
	    return this.getToken(MachaCParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	EQUALS() {
	    return this.getToken(MachaCParser.EQUALS, 0);
	};

	SUMARIZER() {
	    return this.getToken(MachaCParser.SUMARIZER, 0);
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
        this.ruleIndex = MachaCParser.RULE_incremento;
    }

	ID() {
	    return this.getToken(MachaCParser.ID, 0);
	};

	SUM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MachaCParser.SUM);
	    } else {
	        return this.getToken(MachaCParser.SUM, i);
	    }
	};


	MIN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MachaCParser.MIN);
	    } else {
	        return this.getToken(MachaCParser.MIN, i);
	    }
	};


	WS() {
	    return this.getToken(MachaCParser.WS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaCVisitor ) {
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
        this.ruleIndex = MachaCParser.RULE_for;
    }

	FOR() {
	    return this.getToken(MachaCParser.FOR, 0);
	};

	PARENTH_A() {
	    return this.getToken(MachaCParser.PARENTH_A, 0);
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
	    return this.getToken(MachaCParser.PARENTH_B, 0);
	};

	OPENKEY() {
	    return this.getToken(MachaCParser.OPENKEY, 0);
	};

	main() {
	    return this.getTypedRuleContext(MainContext,0);
	};

	CLOSEKEY() {
	    return this.getToken(MachaCParser.CLOSEKEY, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MachaCVisitor ) {
	        return visitor.visitFor(this);
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
MachaCParser.IncrementoContext = IncrementoContext; 
MachaCParser.CondicionalBucleContext = CondicionalBucleContext; 
MachaCParser.CondicionalContext = CondicionalContext; 
MachaCParser.CondicionalElseIfContext = CondicionalElseIfContext; 
MachaCParser.CondicionalElseContext = CondicionalElseContext; 
MachaCParser.WhileContext = WhileContext; 
MachaCParser.ForContext = ForContext; 
