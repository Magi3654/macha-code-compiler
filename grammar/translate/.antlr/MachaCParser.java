// Generated from /home/mrsmin/Escritorio/automatas/automatas 2/macha-code-compiler/grammar/translate/MachaC.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MachaCParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PR=1, PARENTH_A=2, PARENTH_B=3, OPENKEY=4, CLOSEKEY=5, EQUALS=6, MULTI=7, 
		DIV=8, SUM=9, MIN=10, DOUBLE_QUOTE=11, SEMICOLON=12, PORCENT=13, IF=14, 
		ELSE=15, WHILE=16, LOGIC=17, BOOLEAN=18, MATH=19, PRINT=20, MAIN=21, CHAR=22, 
		INT=23, FLOAT=24, STRING=25, ID=26, INVID=27, WS=28;
	public static final int
		RULE_file = 0, RULE_start = 1, RULE_content = 2, RULE_main = 3, RULE_declaracion = 4, 
		RULE_asignacion = 5, RULE_impresion = 6, RULE_expr = 7, RULE_incremento = 8, 
		RULE_condicionalBucle = 9, RULE_condicional = 10, RULE_condicionalElseIf = 11, 
		RULE_condicionalElse = 12, RULE_while = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "start", "content", "main", "declaracion", "asignacion", "impresion", 
			"expr", "incremento", "condicionalBucle", "condicional", "condicionalElseIf", 
			"condicionalElse", "while"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'('", "')'", "'{'", "'}'", "'='", "'*'", "'/'", "'+'", "'-'", 
			"'\"'", "';'", "'%'", "'if'", "'else'", "'while'", null, null, null, 
			"'printf'", "'void main'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PR", "PARENTH_A", "PARENTH_B", "OPENKEY", "CLOSEKEY", "EQUALS", 
			"MULTI", "DIV", "SUM", "MIN", "DOUBLE_QUOTE", "SEMICOLON", "PORCENT", 
			"IF", "ELSE", "WHILE", "LOGIC", "BOOLEAN", "MATH", "PRINT", "MAIN", "CHAR", 
			"INT", "FLOAT", "STRING", "ID", "INVID", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "MachaC.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MachaCParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FileContext extends ParserRuleContext {
		public List<StartContext> start() {
			return getRuleContexts(StartContext.class);
		}
		public StartContext start(int i) {
			return getRuleContext(StartContext.class,i);
		}
		public FileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_file; }
	}

	public final FileContext file() throws RecognitionException {
		FileContext _localctx = new FileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_file);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(29); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(28);
				start();
				}
				}
				setState(31); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==MAIN );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StartContext extends ParserRuleContext {
		public TerminalNode MAIN() { return getToken(MachaCParser.MAIN, 0); }
		public TerminalNode PARENTH_A() { return getToken(MachaCParser.PARENTH_A, 0); }
		public TerminalNode PARENTH_B() { return getToken(MachaCParser.PARENTH_B, 0); }
		public TerminalNode OPENKEY() { return getToken(MachaCParser.OPENKEY, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode CLOSEKEY() { return getToken(MachaCParser.CLOSEKEY, 0); }
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_start);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(33);
			match(MAIN);
			setState(34);
			match(PARENTH_A);
			setState(35);
			match(PARENTH_B);
			setState(36);
			match(OPENKEY);
			setState(37);
			content();
			setState(38);
			match(CLOSEKEY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ContentContext extends ParserRuleContext {
		public List<MainContext> main() {
			return getRuleContexts(MainContext.class);
		}
		public MainContext main(int i) {
			return getRuleContext(MainContext.class,i);
		}
		public ContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_content; }
	}

	public final ContentContext content() throws RecognitionException {
		ContentContext _localctx = new ContentContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_content);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68239362L) != 0)) {
				{
				{
				setState(40);
				main();
				}
				}
				setState(45);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MainContext extends ParserRuleContext {
		public DeclaracionContext declaracion() {
			return getRuleContext(DeclaracionContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(MachaCParser.SEMICOLON, 0); }
		public AsignacionContext asignacion() {
			return getRuleContext(AsignacionContext.class,0);
		}
		public CondicionalBucleContext condicionalBucle() {
			return getRuleContext(CondicionalBucleContext.class,0);
		}
		public WhileContext while_() {
			return getRuleContext(WhileContext.class,0);
		}
		public ImpresionContext impresion() {
			return getRuleContext(ImpresionContext.class,0);
		}
		public IncrementoContext incremento() {
			return getRuleContext(IncrementoContext.class,0);
		}
		public MainContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_main; }
	}

	public final MainContext main() throws RecognitionException {
		MainContext _localctx = new MainContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_main);
		try {
			setState(58);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(46);
				declaracion();
				setState(47);
				match(SEMICOLON);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(49);
				asignacion();
				setState(50);
				match(SEMICOLON);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(52);
				condicionalBucle();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(53);
				while_();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(54);
				impresion();
				setState(55);
				match(SEMICOLON);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(57);
				incremento();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionContext extends ParserRuleContext {
		public TerminalNode PR() { return getToken(MachaCParser.PR, 0); }
		public TerminalNode ID() { return getToken(MachaCParser.ID, 0); }
		public TerminalNode EQUALS() { return getToken(MachaCParser.EQUALS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public DeclaracionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracion; }
	}

	public final DeclaracionContext declaracion() throws RecognitionException {
		DeclaracionContext _localctx = new DeclaracionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_declaracion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(PR);
			setState(61);
			match(ID);
			setState(64);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQUALS) {
				{
				setState(62);
				match(EQUALS);
				setState(63);
				expr(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AsignacionContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MachaCParser.ID, 0); }
		public TerminalNode EQUALS() { return getToken(MachaCParser.EQUALS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public AsignacionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asignacion; }
	}

	public final AsignacionContext asignacion() throws RecognitionException {
		AsignacionContext _localctx = new AsignacionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_asignacion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			match(ID);
			setState(67);
			match(EQUALS);
			setState(68);
			expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImpresionContext extends ParserRuleContext {
		public TerminalNode PRINT() { return getToken(MachaCParser.PRINT, 0); }
		public TerminalNode PARENTH_A() { return getToken(MachaCParser.PARENTH_A, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PARENTH_B() { return getToken(MachaCParser.PARENTH_B, 0); }
		public ImpresionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_impresion; }
	}

	public final ImpresionContext impresion() throws RecognitionException {
		ImpresionContext _localctx = new ImpresionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_impresion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(70);
			match(PRINT);
			setState(71);
			match(PARENTH_A);
			setState(72);
			expr(0);
			setState(73);
			match(PARENTH_B);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public Token operation;
		public Token simbolo;
		public TerminalNode PARENTH_A() { return getToken(MachaCParser.PARENTH_A, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode PARENTH_B() { return getToken(MachaCParser.PARENTH_B, 0); }
		public TerminalNode BOOLEAN() { return getToken(MachaCParser.BOOLEAN, 0); }
		public TerminalNode ID() { return getToken(MachaCParser.ID, 0); }
		public TerminalNode INT() { return getToken(MachaCParser.INT, 0); }
		public TerminalNode STRING() { return getToken(MachaCParser.STRING, 0); }
		public TerminalNode MULTI() { return getToken(MachaCParser.MULTI, 0); }
		public TerminalNode DIV() { return getToken(MachaCParser.DIV, 0); }
		public TerminalNode PORCENT() { return getToken(MachaCParser.PORCENT, 0); }
		public TerminalNode SUM() { return getToken(MachaCParser.SUM, 0); }
		public TerminalNode MIN() { return getToken(MachaCParser.MIN, 0); }
		public TerminalNode LOGIC() { return getToken(MachaCParser.LOGIC, 0); }
		public TerminalNode MATH() { return getToken(MachaCParser.MATH, 0); }
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 14;
		enterRecursionRule(_localctx, 14, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(84);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PARENTH_A:
				{
				setState(76);
				match(PARENTH_A);
				setState(77);
				expr(0);
				setState(78);
				match(PARENTH_B);
				}
				break;
			case BOOLEAN:
				{
				setState(80);
				match(BOOLEAN);
				}
				break;
			case ID:
				{
				setState(81);
				match(ID);
				}
				break;
			case INT:
				{
				setState(82);
				match(INT);
				}
				break;
			case STRING:
				{
				setState(83);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(97);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(95);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(86);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(87);
						((ExprContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 8576L) != 0)) ) {
							((ExprContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(88);
						expr(8);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(89);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(90);
						((ExprContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==SUM || _la==MIN) ) {
							((ExprContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(91);
						expr(7);
						}
						break;
					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(92);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(93);
						((ExprContext)_localctx).simbolo = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==LOGIC || _la==MATH) ) {
							((ExprContext)_localctx).simbolo = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(94);
						expr(5);
						}
						break;
					}
					} 
				}
				setState(99);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IncrementoContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MachaCParser.ID, 0); }
		public List<TerminalNode> SUM() { return getTokens(MachaCParser.SUM); }
		public TerminalNode SUM(int i) {
			return getToken(MachaCParser.SUM, i);
		}
		public List<TerminalNode> MIN() { return getTokens(MachaCParser.MIN); }
		public TerminalNode MIN(int i) {
			return getToken(MachaCParser.MIN, i);
		}
		public TerminalNode WS() { return getToken(MachaCParser.WS, 0); }
		public IncrementoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_incremento; }
	}

	public final IncrementoContext incremento() throws RecognitionException {
		IncrementoContext _localctx = new IncrementoContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_incremento);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			match(ID);
			setState(102);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(101);
				match(WS);
				}
			}

			setState(108);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SUM:
				{
				setState(104);
				match(SUM);
				setState(105);
				match(SUM);
				}
				break;
			case MIN:
				{
				setState(106);
				match(MIN);
				setState(107);
				match(MIN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CondicionalBucleContext extends ParserRuleContext {
		public CondicionalContext condicional() {
			return getRuleContext(CondicionalContext.class,0);
		}
		public List<CondicionalElseIfContext> condicionalElseIf() {
			return getRuleContexts(CondicionalElseIfContext.class);
		}
		public CondicionalElseIfContext condicionalElseIf(int i) {
			return getRuleContext(CondicionalElseIfContext.class,i);
		}
		public CondicionalElseContext condicionalElse() {
			return getRuleContext(CondicionalElseContext.class,0);
		}
		public CondicionalBucleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condicionalBucle; }
	}

	public final CondicionalBucleContext condicionalBucle() throws RecognitionException {
		CondicionalBucleContext _localctx = new CondicionalBucleContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_condicionalBucle);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			condicional();
			setState(114);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(111);
					condicionalElseIf();
					}
					} 
				}
				setState(116);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			setState(118);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(117);
				condicionalElse();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CondicionalContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(MachaCParser.IF, 0); }
		public TerminalNode PARENTH_A() { return getToken(MachaCParser.PARENTH_A, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PARENTH_B() { return getToken(MachaCParser.PARENTH_B, 0); }
		public TerminalNode OPENKEY() { return getToken(MachaCParser.OPENKEY, 0); }
		public TerminalNode CLOSEKEY() { return getToken(MachaCParser.CLOSEKEY, 0); }
		public List<MainContext> main() {
			return getRuleContexts(MainContext.class);
		}
		public MainContext main(int i) {
			return getRuleContext(MainContext.class,i);
		}
		public CondicionalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condicional; }
	}

	public final CondicionalContext condicional() throws RecognitionException {
		CondicionalContext _localctx = new CondicionalContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_condicional);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			match(IF);
			setState(121);
			match(PARENTH_A);
			setState(122);
			expr(0);
			setState(123);
			match(PARENTH_B);
			setState(124);
			match(OPENKEY);
			setState(128);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68239362L) != 0)) {
				{
				{
				setState(125);
				main();
				}
				}
				setState(130);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(131);
			match(CLOSEKEY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CondicionalElseIfContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(MachaCParser.ELSE, 0); }
		public CondicionalContext condicional() {
			return getRuleContext(CondicionalContext.class,0);
		}
		public CondicionalElseIfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condicionalElseIf; }
	}

	public final CondicionalElseIfContext condicionalElseIf() throws RecognitionException {
		CondicionalElseIfContext _localctx = new CondicionalElseIfContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_condicionalElseIf);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			match(ELSE);
			setState(134);
			condicional();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CondicionalElseContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(MachaCParser.ELSE, 0); }
		public TerminalNode OPENKEY() { return getToken(MachaCParser.OPENKEY, 0); }
		public TerminalNode CLOSEKEY() { return getToken(MachaCParser.CLOSEKEY, 0); }
		public List<MainContext> main() {
			return getRuleContexts(MainContext.class);
		}
		public MainContext main(int i) {
			return getRuleContext(MainContext.class,i);
		}
		public CondicionalElseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condicionalElse; }
	}

	public final CondicionalElseContext condicionalElse() throws RecognitionException {
		CondicionalElseContext _localctx = new CondicionalElseContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_condicionalElse);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			match(ELSE);
			setState(137);
			match(OPENKEY);
			setState(141);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68239362L) != 0)) {
				{
				{
				setState(138);
				main();
				}
				}
				setState(143);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(144);
			match(CLOSEKEY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WhileContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(MachaCParser.WHILE, 0); }
		public TerminalNode PARENTH_A() { return getToken(MachaCParser.PARENTH_A, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PARENTH_B() { return getToken(MachaCParser.PARENTH_B, 0); }
		public TerminalNode OPENKEY() { return getToken(MachaCParser.OPENKEY, 0); }
		public TerminalNode CLOSEKEY() { return getToken(MachaCParser.CLOSEKEY, 0); }
		public List<MainContext> main() {
			return getRuleContexts(MainContext.class);
		}
		public MainContext main(int i) {
			return getRuleContext(MainContext.class,i);
		}
		public WhileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_while; }
	}

	public final WhileContext while_() throws RecognitionException {
		WhileContext _localctx = new WhileContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_while);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(146);
			match(WHILE);
			setState(147);
			match(PARENTH_A);
			setState(148);
			expr(0);
			setState(149);
			match(PARENTH_B);
			setState(150);
			match(OPENKEY);
			setState(154);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68239362L) != 0)) {
				{
				{
				setState(151);
				main();
				}
				}
				setState(156);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(157);
			match(CLOSEKEY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 7:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 7);
		case 1:
			return precpred(_ctx, 6);
		case 2:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u001c\u00a0\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0004\u0000\u001e\b\u0000"+
		"\u000b\u0000\f\u0000\u001f\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0005\u0002*\b\u0002"+
		"\n\u0002\f\u0002-\t\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0003\u0003;\b\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0003\u0004A\b\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007U\b\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007`\b\u0007\n\u0007\f\u0007"+
		"c\t\u0007\u0001\b\u0001\b\u0003\bg\b\b\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0003\bm\b\b\u0001\t\u0001\t\u0005\tq\b\t\n\t\f\tt\t\t\u0001\t\u0003"+
		"\tw\b\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0005\n\u007f"+
		"\b\n\n\n\f\n\u0082\t\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0005\f\u008c\b\f\n\f\f\f\u008f\t\f\u0001\f\u0001"+
		"\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005\r\u0099\b\r\n"+
		"\r\f\r\u009c\t\r\u0001\r\u0001\r\u0001\r\u0000\u0001\u000e\u000e\u0000"+
		"\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0000"+
		"\u0003\u0002\u0000\u0007\b\r\r\u0001\u0000\t\n\u0002\u0000\u0011\u0011"+
		"\u0013\u0013\u00a7\u0000\u001d\u0001\u0000\u0000\u0000\u0002!\u0001\u0000"+
		"\u0000\u0000\u0004+\u0001\u0000\u0000\u0000\u0006:\u0001\u0000\u0000\u0000"+
		"\b<\u0001\u0000\u0000\u0000\nB\u0001\u0000\u0000\u0000\fF\u0001\u0000"+
		"\u0000\u0000\u000eT\u0001\u0000\u0000\u0000\u0010d\u0001\u0000\u0000\u0000"+
		"\u0012n\u0001\u0000\u0000\u0000\u0014x\u0001\u0000\u0000\u0000\u0016\u0085"+
		"\u0001\u0000\u0000\u0000\u0018\u0088\u0001\u0000\u0000\u0000\u001a\u0092"+
		"\u0001\u0000\u0000\u0000\u001c\u001e\u0003\u0002\u0001\u0000\u001d\u001c"+
		"\u0001\u0000\u0000\u0000\u001e\u001f\u0001\u0000\u0000\u0000\u001f\u001d"+
		"\u0001\u0000\u0000\u0000\u001f \u0001\u0000\u0000\u0000 \u0001\u0001\u0000"+
		"\u0000\u0000!\"\u0005\u0015\u0000\u0000\"#\u0005\u0002\u0000\u0000#$\u0005"+
		"\u0003\u0000\u0000$%\u0005\u0004\u0000\u0000%&\u0003\u0004\u0002\u0000"+
		"&\'\u0005\u0005\u0000\u0000\'\u0003\u0001\u0000\u0000\u0000(*\u0003\u0006"+
		"\u0003\u0000)(\u0001\u0000\u0000\u0000*-\u0001\u0000\u0000\u0000+)\u0001"+
		"\u0000\u0000\u0000+,\u0001\u0000\u0000\u0000,\u0005\u0001\u0000\u0000"+
		"\u0000-+\u0001\u0000\u0000\u0000./\u0003\b\u0004\u0000/0\u0005\f\u0000"+
		"\u00000;\u0001\u0000\u0000\u000012\u0003\n\u0005\u000023\u0005\f\u0000"+
		"\u00003;\u0001\u0000\u0000\u00004;\u0003\u0012\t\u00005;\u0003\u001a\r"+
		"\u000067\u0003\f\u0006\u000078\u0005\f\u0000\u00008;\u0001\u0000\u0000"+
		"\u00009;\u0003\u0010\b\u0000:.\u0001\u0000\u0000\u0000:1\u0001\u0000\u0000"+
		"\u0000:4\u0001\u0000\u0000\u0000:5\u0001\u0000\u0000\u0000:6\u0001\u0000"+
		"\u0000\u0000:9\u0001\u0000\u0000\u0000;\u0007\u0001\u0000\u0000\u0000"+
		"<=\u0005\u0001\u0000\u0000=@\u0005\u001a\u0000\u0000>?\u0005\u0006\u0000"+
		"\u0000?A\u0003\u000e\u0007\u0000@>\u0001\u0000\u0000\u0000@A\u0001\u0000"+
		"\u0000\u0000A\t\u0001\u0000\u0000\u0000BC\u0005\u001a\u0000\u0000CD\u0005"+
		"\u0006\u0000\u0000DE\u0003\u000e\u0007\u0000E\u000b\u0001\u0000\u0000"+
		"\u0000FG\u0005\u0014\u0000\u0000GH\u0005\u0002\u0000\u0000HI\u0003\u000e"+
		"\u0007\u0000IJ\u0005\u0003\u0000\u0000J\r\u0001\u0000\u0000\u0000KL\u0006"+
		"\u0007\uffff\uffff\u0000LM\u0005\u0002\u0000\u0000MN\u0003\u000e\u0007"+
		"\u0000NO\u0005\u0003\u0000\u0000OU\u0001\u0000\u0000\u0000PU\u0005\u0012"+
		"\u0000\u0000QU\u0005\u001a\u0000\u0000RU\u0005\u0017\u0000\u0000SU\u0005"+
		"\u0019\u0000\u0000TK\u0001\u0000\u0000\u0000TP\u0001\u0000\u0000\u0000"+
		"TQ\u0001\u0000\u0000\u0000TR\u0001\u0000\u0000\u0000TS\u0001\u0000\u0000"+
		"\u0000Ua\u0001\u0000\u0000\u0000VW\n\u0007\u0000\u0000WX\u0007\u0000\u0000"+
		"\u0000X`\u0003\u000e\u0007\bYZ\n\u0006\u0000\u0000Z[\u0007\u0001\u0000"+
		"\u0000[`\u0003\u000e\u0007\u0007\\]\n\u0004\u0000\u0000]^\u0007\u0002"+
		"\u0000\u0000^`\u0003\u000e\u0007\u0005_V\u0001\u0000\u0000\u0000_Y\u0001"+
		"\u0000\u0000\u0000_\\\u0001\u0000\u0000\u0000`c\u0001\u0000\u0000\u0000"+
		"a_\u0001\u0000\u0000\u0000ab\u0001\u0000\u0000\u0000b\u000f\u0001\u0000"+
		"\u0000\u0000ca\u0001\u0000\u0000\u0000df\u0005\u001a\u0000\u0000eg\u0005"+
		"\u001c\u0000\u0000fe\u0001\u0000\u0000\u0000fg\u0001\u0000\u0000\u0000"+
		"gl\u0001\u0000\u0000\u0000hi\u0005\t\u0000\u0000im\u0005\t\u0000\u0000"+
		"jk\u0005\n\u0000\u0000km\u0005\n\u0000\u0000lh\u0001\u0000\u0000\u0000"+
		"lj\u0001\u0000\u0000\u0000m\u0011\u0001\u0000\u0000\u0000nr\u0003\u0014"+
		"\n\u0000oq\u0003\u0016\u000b\u0000po\u0001\u0000\u0000\u0000qt\u0001\u0000"+
		"\u0000\u0000rp\u0001\u0000\u0000\u0000rs\u0001\u0000\u0000\u0000sv\u0001"+
		"\u0000\u0000\u0000tr\u0001\u0000\u0000\u0000uw\u0003\u0018\f\u0000vu\u0001"+
		"\u0000\u0000\u0000vw\u0001\u0000\u0000\u0000w\u0013\u0001\u0000\u0000"+
		"\u0000xy\u0005\u000e\u0000\u0000yz\u0005\u0002\u0000\u0000z{\u0003\u000e"+
		"\u0007\u0000{|\u0005\u0003\u0000\u0000|\u0080\u0005\u0004\u0000\u0000"+
		"}\u007f\u0003\u0006\u0003\u0000~}\u0001\u0000\u0000\u0000\u007f\u0082"+
		"\u0001\u0000\u0000\u0000\u0080~\u0001\u0000\u0000\u0000\u0080\u0081\u0001"+
		"\u0000\u0000\u0000\u0081\u0083\u0001\u0000\u0000\u0000\u0082\u0080\u0001"+
		"\u0000\u0000\u0000\u0083\u0084\u0005\u0005\u0000\u0000\u0084\u0015\u0001"+
		"\u0000\u0000\u0000\u0085\u0086\u0005\u000f\u0000\u0000\u0086\u0087\u0003"+
		"\u0014\n\u0000\u0087\u0017\u0001\u0000\u0000\u0000\u0088\u0089\u0005\u000f"+
		"\u0000\u0000\u0089\u008d\u0005\u0004\u0000\u0000\u008a\u008c\u0003\u0006"+
		"\u0003\u0000\u008b\u008a\u0001\u0000\u0000\u0000\u008c\u008f\u0001\u0000"+
		"\u0000\u0000\u008d\u008b\u0001\u0000\u0000\u0000\u008d\u008e\u0001\u0000"+
		"\u0000\u0000\u008e\u0090\u0001\u0000\u0000\u0000\u008f\u008d\u0001\u0000"+
		"\u0000\u0000\u0090\u0091\u0005\u0005\u0000\u0000\u0091\u0019\u0001\u0000"+
		"\u0000\u0000\u0092\u0093\u0005\u0010\u0000\u0000\u0093\u0094\u0005\u0002"+
		"\u0000\u0000\u0094\u0095\u0003\u000e\u0007\u0000\u0095\u0096\u0005\u0003"+
		"\u0000\u0000\u0096\u009a\u0005\u0004\u0000\u0000\u0097\u0099\u0003\u0006"+
		"\u0003\u0000\u0098\u0097\u0001\u0000\u0000\u0000\u0099\u009c\u0001\u0000"+
		"\u0000\u0000\u009a\u0098\u0001\u0000\u0000\u0000\u009a\u009b\u0001\u0000"+
		"\u0000\u0000\u009b\u009d\u0001\u0000\u0000\u0000\u009c\u009a\u0001\u0000"+
		"\u0000\u0000\u009d\u009e\u0005\u0005\u0000\u0000\u009e\u001b\u0001\u0000"+
		"\u0000\u0000\u000e\u001f+:@T_aflrv\u0080\u008d\u009a";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}