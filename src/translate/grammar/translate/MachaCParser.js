// Generated from ./grammar/translate/MachaC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MachaCVisitor from './MachaCVisitor.js';

const serializedATN = [4,1,28,160,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,5,
2,42,8,2,10,2,12,2,45,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,3,3,59,8,3,1,4,1,4,1,4,1,4,3,4,65,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,
1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,85,8,7,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,5,7,96,8,7,10,7,12,7,99,9,7,1,8,1,8,3,8,103,8,8,1,8,1,8,1,
8,1,8,3,8,109,8,8,1,9,1,9,5,9,113,8,9,10,9,12,9,116,9,9,1,9,3,9,119,8,9,
1,10,1,10,1,10,1,10,1,10,1,10,5,10,127,8,10,10,10,12,10,130,9,10,1,10,1,
10,1,11,1,11,1,11,1,12,1,12,1,12,5,12,140,8,12,10,12,12,12,143,9,12,1,12,
1,12,1,13,1,13,1,13,1,13,1,13,1,13,5,13,153,8,13,10,13,12,13,156,9,13,1,
13,1,13,1,13,0,1,14,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,3,2,0,7,8,
13,13,1,0,9,10,2,0,17,17,19,19,167,0,29,1,0,0,0,2,33,1,0,0,0,4,43,1,0,0,
0,6,58,1,0,0,0,8,60,1,0,0,0,10,66,1,0,0,0,12,70,1,0,0,0,14,84,1,0,0,0,16,
100,1,0,0,0,18,110,1,0,0,0,20,120,1,0,0,0,22,133,1,0,0,0,24,136,1,0,0,0,
26,146,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,31,1,0,0,0,31,29,1,0,0,0,31,
32,1,0,0,0,32,1,1,0,0,0,33,34,5,21,0,0,34,35,5,2,0,0,35,36,5,3,0,0,36,37,
5,4,0,0,37,38,3,4,2,0,38,39,5,5,0,0,39,3,1,0,0,0,40,42,3,6,3,0,41,40,1,0,
0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,5,1,0,0,0,45,43,1,0,0,0,
46,47,3,8,4,0,47,48,5,12,0,0,48,59,1,0,0,0,49,50,3,10,5,0,50,51,5,12,0,0,
51,59,1,0,0,0,52,59,3,18,9,0,53,59,3,26,13,0,54,55,3,12,6,0,55,56,5,12,0,
0,56,59,1,0,0,0,57,59,3,16,8,0,58,46,1,0,0,0,58,49,1,0,0,0,58,52,1,0,0,0,
58,53,1,0,0,0,58,54,1,0,0,0,58,57,1,0,0,0,59,7,1,0,0,0,60,61,5,1,0,0,61,
64,5,26,0,0,62,63,5,6,0,0,63,65,3,14,7,0,64,62,1,0,0,0,64,65,1,0,0,0,65,
9,1,0,0,0,66,67,5,26,0,0,67,68,5,6,0,0,68,69,3,14,7,0,69,11,1,0,0,0,70,71,
5,20,0,0,71,72,5,2,0,0,72,73,3,14,7,0,73,74,5,3,0,0,74,13,1,0,0,0,75,76,
6,7,-1,0,76,77,5,2,0,0,77,78,3,14,7,0,78,79,5,3,0,0,79,85,1,0,0,0,80,85,
5,18,0,0,81,85,5,26,0,0,82,85,5,23,0,0,83,85,5,25,0,0,84,75,1,0,0,0,84,80,
1,0,0,0,84,81,1,0,0,0,84,82,1,0,0,0,84,83,1,0,0,0,85,97,1,0,0,0,86,87,10,
7,0,0,87,88,7,0,0,0,88,96,3,14,7,8,89,90,10,6,0,0,90,91,7,1,0,0,91,96,3,
14,7,7,92,93,10,4,0,0,93,94,7,2,0,0,94,96,3,14,7,5,95,86,1,0,0,0,95,89,1,
0,0,0,95,92,1,0,0,0,96,99,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,15,1,0,
0,0,99,97,1,0,0,0,100,102,5,26,0,0,101,103,5,28,0,0,102,101,1,0,0,0,102,
103,1,0,0,0,103,108,1,0,0,0,104,105,5,9,0,0,105,109,5,9,0,0,106,107,5,10,
0,0,107,109,5,10,0,0,108,104,1,0,0,0,108,106,1,0,0,0,109,17,1,0,0,0,110,
114,3,20,10,0,111,113,3,22,11,0,112,111,1,0,0,0,113,116,1,0,0,0,114,112,
1,0,0,0,114,115,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,117,119,3,24,12,
0,118,117,1,0,0,0,118,119,1,0,0,0,119,19,1,0,0,0,120,121,5,14,0,0,121,122,
5,2,0,0,122,123,3,14,7,0,123,124,5,3,0,0,124,128,5,4,0,0,125,127,3,6,3,0,
126,125,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,131,
1,0,0,0,130,128,1,0,0,0,131,132,5,5,0,0,132,21,1,0,0,0,133,134,5,15,0,0,
134,135,3,20,10,0,135,23,1,0,0,0,136,137,5,15,0,0,137,141,5,4,0,0,138,140,
3,6,3,0,139,138,1,0,0,0,140,143,1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,
142,144,1,0,0,0,143,141,1,0,0,0,144,145,5,5,0,0,145,25,1,0,0,0,146,147,5,
16,0,0,147,148,5,2,0,0,148,149,3,14,7,0,149,150,5,3,0,0,150,154,5,4,0,0,
151,153,3,6,3,0,152,151,1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,
1,0,0,0,155,157,1,0,0,0,156,154,1,0,0,0,157,158,5,5,0,0,158,27,1,0,0,0,14,
31,43,58,64,84,95,97,102,108,114,118,128,141,154];


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
                         "asignacion", "impresion", "expr", "incremento", 
                         "condicionalBucle", "condicional", "condicionalElseIf", 
                         "condicionalElse", "while" ];

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
	        this.state = 29; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 28;
	            this.start();
	            this.state = 31; 
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
	        this.state = 33;
	        this.match(MachaCParser.MAIN);
	        this.state = 34;
	        this.match(MachaCParser.PARENTH_A);
	        this.state = 35;
	        this.match(MachaCParser.PARENTH_B);
	        this.state = 36;
	        this.match(MachaCParser.OPENKEY);
	        this.state = 37;
	        this.content();
	        this.state = 38;
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
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 68239362) !== 0)) {
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
	    this.enterRule(localctx, 6, MachaCParser.RULE_main);
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.declaracion();
	            this.state = 47;
	            this.match(MachaCParser.SEMICOLON);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.asignacion();
	            this.state = 50;
	            this.match(MachaCParser.SEMICOLON);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 52;
	            this.condicionalBucle();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 53;
	            this.while_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 54;
	            this.impresion();
	            this.state = 55;
	            this.match(MachaCParser.SEMICOLON);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 57;
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
	        this.state = 60;
	        this.match(MachaCParser.PR);
	        this.state = 61;
	        this.match(MachaCParser.ID);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 62;
	            this.match(MachaCParser.EQUALS);
	            this.state = 63;
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
	        this.state = 66;
	        this.match(MachaCParser.ID);
	        this.state = 67;
	        this.match(MachaCParser.EQUALS);
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
	    this.enterRule(localctx, 12, MachaCParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(MachaCParser.PRINT);
	        this.state = 71;
	        this.match(MachaCParser.PARENTH_A);
	        this.state = 72;
	        this.expr(0);
	        this.state = 73;
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
	        this.state = 84;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.state = 76;
	            this.match(MachaCParser.PARENTH_A);
	            this.state = 77;
	            this.expr(0);
	            this.state = 78;
	            this.match(MachaCParser.PARENTH_B);
	            break;
	        case 18:
	            this.state = 80;
	            this.match(MachaCParser.BOOLEAN);
	            break;
	        case 26:
	            this.state = 81;
	            this.match(MachaCParser.ID);
	            break;
	        case 23:
	            this.state = 82;
	            this.match(MachaCParser.INT);
	            break;
	        case 25:
	            this.state = 83;
	            this.match(MachaCParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 97;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 95;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MachaCParser.RULE_expr);
	                    this.state = 86;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 87;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 8576) !== 0))) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 88;
	                    this.expr(8);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MachaCParser.RULE_expr);
	                    this.state = 89;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
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
	                    this.expr(7);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MachaCParser.RULE_expr);
	                    this.state = 92;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 93;
	                    localctx.simbolo = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===17 || _la===19)) {
	                        localctx.simbolo = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 94;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 99;
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
	        this.state = 100;
	        this.match(MachaCParser.ID);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 101;
	            this.match(MachaCParser.WS);
	        }

	        this.state = 108;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.state = 104;
	            this.match(MachaCParser.SUM);
	            this.state = 105;
	            this.match(MachaCParser.SUM);
	            break;
	        case 10:
	            this.state = 106;
	            this.match(MachaCParser.MIN);
	            this.state = 107;
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
	        this.state = 110;
	        this.condicional();
	        this.state = 114;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 111;
	                this.condicionalElseIf(); 
	            }
	            this.state = 116;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 117;
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
	        this.state = 120;
	        this.match(MachaCParser.IF);
	        this.state = 121;
	        this.match(MachaCParser.PARENTH_A);
	        this.state = 122;
	        this.expr(0);
	        this.state = 123;
	        this.match(MachaCParser.PARENTH_B);
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



	condicionalElseIf() {
	    let localctx = new CondicionalElseIfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MachaCParser.RULE_condicionalElseIf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.match(MachaCParser.ELSE);
	        this.state = 134;
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
	        this.state = 136;
	        this.match(MachaCParser.ELSE);
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



	while_() {
	    let localctx = new WhileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MachaCParser.RULE_while);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(MachaCParser.WHILE);
	        this.state = 147;
	        this.match(MachaCParser.PARENTH_A);
	        this.state = 148;
	        this.expr(0);
	        this.state = 149;
	        this.match(MachaCParser.PARENTH_B);
	        this.state = 150;
	        this.match(MachaCParser.OPENKEY);
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 68239362) !== 0)) {
	            this.state = 151;
	            this.main();
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 157;
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
MachaCParser.RULE_incremento = 8;
MachaCParser.RULE_condicionalBucle = 9;
MachaCParser.RULE_condicional = 10;
MachaCParser.RULE_condicionalElseIf = 11;
MachaCParser.RULE_condicionalElse = 12;
MachaCParser.RULE_while = 13;

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
