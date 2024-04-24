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
		PARENTH_A=1, PARENTH_B=2, OPENKEY=3, CLOSEKEY=4, EQUALS=5, MULTI=6, DIV=7, 
		SUM=8, MIN=9, DOUBLE_QUOTE=10, SEMICOLON=11, IF=12, ELSE=13, LOGIC=14, 
		MATH=15, PRINT=16, MAIN=17, CHAR=18, INT=19, FLOAT=20, STRING=21, ID=22, 
		INVID=23, WS=24;
	public static final int
		RULE_file = 0, RULE_start = 1, RULE_content = 2, RULE_main = 3, RULE_declaracion = 4, 
		RULE_asignacion = 5, RULE_impresion = 6, RULE_expr = 7, RULE_condicionalBucle = 8, 
		RULE_condicional = 9, RULE_condicionalElseIf = 10, RULE_condicionalElse = 11;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "start", "content", "main", "declaracion", "asignacion", "impresion", 
			"expr", "condicionalBucle", "condicional", "condicionalElseIf", "condicionalElse"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'{'", "'}'", "'='", "'*'", "'/'", "'+'", "'-'", 
			"'\"'", "';'", "'if'", "'else'", null, null, "'printf'", "'void main()'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PARENTH_A", "PARENTH_B", "OPENKEY", "CLOSEKEY", "EQUALS", "MULTI", 
			"DIV", "SUM", "MIN", "DOUBLE_QUOTE", "SEMICOLON", "IF", "ELSE", "LOGIC", 
			"MATH", "PRINT", "MAIN", "CHAR", "INT", "FLOAT", "STRING", "ID", "INVID", 
			"WS"
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
			setState(25); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(24);
				start();
				}
				}
				setState(27); 
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
			setState(29);
			match(MAIN);
			setState(30);
			match(PARENTH_A);
			setState(31);
			match(PARENTH_B);
			setState(32);
			match(OPENKEY);
			setState(33);
			content();
			setState(34);
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
			setState(39);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4263936L) != 0)) {
				{
				{
				setState(36);
				main();
				}
				}
				setState(41);
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
		public AsignacionContext asignacion() {
			return getRuleContext(AsignacionContext.class,0);
		}
		public CondicionalBucleContext condicionalBucle() {
			return getRuleContext(CondicionalBucleContext.class,0);
		}
		public ImpresionContext impresion() {
			return getRuleContext(ImpresionContext.class,0);
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
			setState(46);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(42);
				declaracion();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(43);
				asignacion();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(44);
				condicionalBucle();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(45);
				impresion();
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
			setState(48);
			match(ID);
			setState(51);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQUALS) {
				{
				setState(49);
				match(EQUALS);
				setState(50);
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
			setState(53);
			match(ID);
			setState(54);
			match(EQUALS);
			setState(55);
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
			setState(57);
			match(PRINT);
			setState(58);
			match(PARENTH_A);
			setState(59);
			expr(0);
			setState(60);
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
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParentesisContext extends ExprContext {
		public TerminalNode PARENTH_A() { return getToken(MachaCParser.PARENTH_A, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PARENTH_B() { return getToken(MachaCParser.PARENTH_B, 0); }
		public ParentesisContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ImplicitMultContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public ImplicitMultContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SujjaContext extends ExprContext {
		public TerminalNode INT() { return getToken(MachaCParser.INT, 0); }
		public SujjaContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StringContext extends ExprContext {
		public TerminalNode STRING() { return getToken(MachaCParser.STRING, 0); }
		public StringContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SumresContext extends ExprContext {
		public Token operation;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode SUM() { return getToken(MachaCParser.SUM, 0); }
		public TerminalNode MIN() { return getToken(MachaCParser.MIN, 0); }
		public SumresContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class GeulssiContext extends ExprContext {
		public TerminalNode ID() { return getToken(MachaCParser.ID, 0); }
		public GeulssiContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MuldivContext extends ExprContext {
		public Token operation;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode MULTI() { return getToken(MachaCParser.MULTI, 0); }
		public TerminalNode DIV() { return getToken(MachaCParser.DIV, 0); }
		public MuldivContext(ExprContext ctx) { copyFrom(ctx); }
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
			setState(70);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PARENTH_A:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(63);
				match(PARENTH_A);
				setState(64);
				expr(0);
				setState(65);
				match(PARENTH_B);
				}
				break;
			case ID:
				{
				_localctx = new GeulssiContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(67);
				match(ID);
				}
				break;
			case INT:
				{
				_localctx = new SujjaContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(68);
				match(INT);
				}
				break;
			case STRING:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(69);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(82);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(80);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
					case 1:
						{
						_localctx = new MuldivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(72);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(73);
						((MuldivContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==MULTI || _la==DIV) ) {
							((MuldivContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(74);
						expr(7);
						}
						break;
					case 2:
						{
						_localctx = new SumresContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(75);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(76);
						((SumresContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==SUM || _la==MIN) ) {
							((SumresContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(77);
						expr(6);
						}
						break;
					case 3:
						{
						_localctx = new ImplicitMultContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(78);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(79);
						expr(2);
						}
						break;
					}
					} 
				}
				setState(84);
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
		enterRule(_localctx, 16, RULE_condicionalBucle);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			condicional();
			setState(89);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(86);
					condicionalElseIf();
					}
					} 
				}
				setState(91);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			}
			setState(93);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(92);
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
		enterRule(_localctx, 18, RULE_condicional);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			match(IF);
			setState(96);
			match(PARENTH_A);
			setState(97);
			expr(0);
			setState(98);
			match(PARENTH_B);
			setState(99);
			match(OPENKEY);
			setState(103);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4263936L) != 0)) {
				{
				{
				setState(100);
				main();
				}
				}
				setState(105);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(106);
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
		enterRule(_localctx, 20, RULE_condicionalElseIf);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(108);
			match(ELSE);
			setState(109);
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
		enterRule(_localctx, 22, RULE_condicionalElse);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			match(ELSE);
			setState(112);
			match(OPENKEY);
			setState(116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4263936L) != 0)) {
				{
				{
				setState(113);
				main();
				}
				}
				setState(118);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(119);
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
			return precpred(_ctx, 6);
		case 1:
			return precpred(_ctx, 5);
		case 2:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0018z\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0001"+
		"\u0000\u0004\u0000\u001a\b\u0000\u000b\u0000\f\u0000\u001b\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0005\u0002&\b\u0002\n\u0002\f\u0002)\t\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003/\b\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0003\u00044\b\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007G\b\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0005\u0007Q\b\u0007\n\u0007\f\u0007T\t\u0007\u0001\b\u0001"+
		"\b\u0005\bX\b\b\n\b\f\b[\t\b\u0001\b\u0003\b^\b\b\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0005\tf\b\t\n\t\f\ti\t\t\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0005\u000bs\b"+
		"\u000b\n\u000b\f\u000bv\t\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0000"+
		"\u0001\u000e\f\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016"+
		"\u0000\u0002\u0001\u0000\u0006\u0007\u0001\u0000\b\t}\u0000\u0019\u0001"+
		"\u0000\u0000\u0000\u0002\u001d\u0001\u0000\u0000\u0000\u0004\'\u0001\u0000"+
		"\u0000\u0000\u0006.\u0001\u0000\u0000\u0000\b0\u0001\u0000\u0000\u0000"+
		"\n5\u0001\u0000\u0000\u0000\f9\u0001\u0000\u0000\u0000\u000eF\u0001\u0000"+
		"\u0000\u0000\u0010U\u0001\u0000\u0000\u0000\u0012_\u0001\u0000\u0000\u0000"+
		"\u0014l\u0001\u0000\u0000\u0000\u0016o\u0001\u0000\u0000\u0000\u0018\u001a"+
		"\u0003\u0002\u0001\u0000\u0019\u0018\u0001\u0000\u0000\u0000\u001a\u001b"+
		"\u0001\u0000\u0000\u0000\u001b\u0019\u0001\u0000\u0000\u0000\u001b\u001c"+
		"\u0001\u0000\u0000\u0000\u001c\u0001\u0001\u0000\u0000\u0000\u001d\u001e"+
		"\u0005\u0011\u0000\u0000\u001e\u001f\u0005\u0001\u0000\u0000\u001f \u0005"+
		"\u0002\u0000\u0000 !\u0005\u0003\u0000\u0000!\"\u0003\u0004\u0002\u0000"+
		"\"#\u0005\u0004\u0000\u0000#\u0003\u0001\u0000\u0000\u0000$&\u0003\u0006"+
		"\u0003\u0000%$\u0001\u0000\u0000\u0000&)\u0001\u0000\u0000\u0000\'%\u0001"+
		"\u0000\u0000\u0000\'(\u0001\u0000\u0000\u0000(\u0005\u0001\u0000\u0000"+
		"\u0000)\'\u0001\u0000\u0000\u0000*/\u0003\b\u0004\u0000+/\u0003\n\u0005"+
		"\u0000,/\u0003\u0010\b\u0000-/\u0003\f\u0006\u0000.*\u0001\u0000\u0000"+
		"\u0000.+\u0001\u0000\u0000\u0000.,\u0001\u0000\u0000\u0000.-\u0001\u0000"+
		"\u0000\u0000/\u0007\u0001\u0000\u0000\u000003\u0005\u0016\u0000\u0000"+
		"12\u0005\u0005\u0000\u000024\u0003\u000e\u0007\u000031\u0001\u0000\u0000"+
		"\u000034\u0001\u0000\u0000\u00004\t\u0001\u0000\u0000\u000056\u0005\u0016"+
		"\u0000\u000067\u0005\u0005\u0000\u000078\u0003\u000e\u0007\u00008\u000b"+
		"\u0001\u0000\u0000\u00009:\u0005\u0010\u0000\u0000:;\u0005\u0001\u0000"+
		"\u0000;<\u0003\u000e\u0007\u0000<=\u0005\u0002\u0000\u0000=\r\u0001\u0000"+
		"\u0000\u0000>?\u0006\u0007\uffff\uffff\u0000?@\u0005\u0001\u0000\u0000"+
		"@A\u0003\u000e\u0007\u0000AB\u0005\u0002\u0000\u0000BG\u0001\u0000\u0000"+
		"\u0000CG\u0005\u0016\u0000\u0000DG\u0005\u0013\u0000\u0000EG\u0005\u0015"+
		"\u0000\u0000F>\u0001\u0000\u0000\u0000FC\u0001\u0000\u0000\u0000FD\u0001"+
		"\u0000\u0000\u0000FE\u0001\u0000\u0000\u0000GR\u0001\u0000\u0000\u0000"+
		"HI\n\u0006\u0000\u0000IJ\u0007\u0000\u0000\u0000JQ\u0003\u000e\u0007\u0007"+
		"KL\n\u0005\u0000\u0000LM\u0007\u0001\u0000\u0000MQ\u0003\u000e\u0007\u0006"+
		"NO\n\u0001\u0000\u0000OQ\u0003\u000e\u0007\u0002PH\u0001\u0000\u0000\u0000"+
		"PK\u0001\u0000\u0000\u0000PN\u0001\u0000\u0000\u0000QT\u0001\u0000\u0000"+
		"\u0000RP\u0001\u0000\u0000\u0000RS\u0001\u0000\u0000\u0000S\u000f\u0001"+
		"\u0000\u0000\u0000TR\u0001\u0000\u0000\u0000UY\u0003\u0012\t\u0000VX\u0003"+
		"\u0014\n\u0000WV\u0001\u0000\u0000\u0000X[\u0001\u0000\u0000\u0000YW\u0001"+
		"\u0000\u0000\u0000YZ\u0001\u0000\u0000\u0000Z]\u0001\u0000\u0000\u0000"+
		"[Y\u0001\u0000\u0000\u0000\\^\u0003\u0016\u000b\u0000]\\\u0001\u0000\u0000"+
		"\u0000]^\u0001\u0000\u0000\u0000^\u0011\u0001\u0000\u0000\u0000_`\u0005"+
		"\f\u0000\u0000`a\u0005\u0001\u0000\u0000ab\u0003\u000e\u0007\u0000bc\u0005"+
		"\u0002\u0000\u0000cg\u0005\u0003\u0000\u0000df\u0003\u0006\u0003\u0000"+
		"ed\u0001\u0000\u0000\u0000fi\u0001\u0000\u0000\u0000ge\u0001\u0000\u0000"+
		"\u0000gh\u0001\u0000\u0000\u0000hj\u0001\u0000\u0000\u0000ig\u0001\u0000"+
		"\u0000\u0000jk\u0005\u0004\u0000\u0000k\u0013\u0001\u0000\u0000\u0000"+
		"lm\u0005\r\u0000\u0000mn\u0003\u0012\t\u0000n\u0015\u0001\u0000\u0000"+
		"\u0000op\u0005\r\u0000\u0000pt\u0005\u0003\u0000\u0000qs\u0003\u0006\u0003"+
		"\u0000rq\u0001\u0000\u0000\u0000sv\u0001\u0000\u0000\u0000tr\u0001\u0000"+
		"\u0000\u0000tu\u0001\u0000\u0000\u0000uw\u0001\u0000\u0000\u0000vt\u0001"+
		"\u0000\u0000\u0000wx\u0005\u0004\u0000\u0000x\u0017\u0001\u0000\u0000"+
		"\u0000\u000b\u001b\'.3FPRY]gt";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}