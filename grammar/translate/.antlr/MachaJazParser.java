// Generated from /home/mrsmin/Escritorio/automatas/automatas 2/macha-code-compiler/grammar/translate/MachaJaz.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MachaJazParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CHICHAK=1, OPENKEY=2, CLOSEKEY=3, PR=4, GEULSSI=5, EQUALS=6, CHINCHA=7, 
		SUJJA=8, PRINT=9, PARENTH_A=10, PARENTH_B=11, LOGIC=12, MATH=13, BOOLEAN=14, 
		STRING=15, GOPSSEM=16, NANU=17, PORCENT=18, DO=19, PPAEDA=20, GONG=21, 
		IF=22, ELSE=23, WHILE=24, FOR=25;
	public static final int
		RULE_file = 0, RULE_start = 1, RULE_content = 2, RULE_main = 3, RULE_declaracion = 4, 
		RULE_asignacion = 5, RULE_impresion = 6, RULE_expr = 7, RULE_incremento = 8, 
		RULE_condicionalBucle = 9, RULE_condicional = 10, RULE_condicionalElseIf = 11, 
		RULE_condicionalElse = 12, RULE_while = 13, RULE_for = 14;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "start", "content", "main", "declaracion", "asignacion", "impresion", 
			"expr", "incremento", "condicionalBucle", "condicional", "condicionalElseIf", 
			"condicionalElse", "while", "for"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "CHICHAK", "OPENKEY", "CLOSEKEY", "PR", "GEULSSI", "EQUALS", "CHINCHA", 
			"SUJJA", "PRINT", "PARENTH_A", "PARENTH_B", "LOGIC", "MATH", "BOOLEAN", 
			"STRING", "GOPSSEM", "NANU", "PORCENT", "DO", "PPAEDA", "GONG", "IF", 
			"ELSE", "WHILE", "FOR"
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
	public String getGrammarFileName() { return "MachaJaz.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MachaJazParser(TokenStream input) {
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
			setState(31); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(30);
				start();
				}
				}
				setState(33); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==CHICHAK );
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
		public TerminalNode CHICHAK() { return getToken(MachaJazParser.CHICHAK, 0); }
		public TerminalNode OPENKEY() { return getToken(MachaJazParser.OPENKEY, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode CLOSEKEY() { return getToken(MachaJazParser.CLOSEKEY, 0); }
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
			setState(35);
			match(CHICHAK);
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
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 20972080L) != 0)) {
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
			setState(52);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(46);
				declaracion();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(47);
				asignacion();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(48);
				condicionalBucle();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(49);
				while_();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(50);
				impresion();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(51);
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
		public DeclaracionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracion; }
	 
		public DeclaracionContext() { }
		public void copyFrom(DeclaracionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ValidAssignContext extends DeclaracionContext {
		public TerminalNode PR() { return getToken(MachaJazParser.PR, 0); }
		public TerminalNode GEULSSI() { return getToken(MachaJazParser.GEULSSI, 0); }
		public TerminalNode EQUALS() { return getToken(MachaJazParser.EQUALS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ValidAssignContext(DeclaracionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class InvalidAssignContext extends DeclaracionContext {
		public Token ID;
		public TerminalNode PR() { return getToken(MachaJazParser.PR, 0); }
		public TerminalNode CHINCHA() { return getToken(MachaJazParser.CHINCHA, 0); }
		public TerminalNode SUJJA() { return getToken(MachaJazParser.SUJJA, 0); }
		public TerminalNode EQUALS() { return getToken(MachaJazParser.EQUALS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public InvalidAssignContext(DeclaracionContext ctx) { copyFrom(ctx); }
	}

	public final DeclaracionContext declaracion() throws RecognitionException {
		DeclaracionContext _localctx = new DeclaracionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_declaracion);
		int _la;
		try {
			setState(66);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				_localctx = new ValidAssignContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(54);
				match(PR);
				setState(55);
				match(GEULSSI);
				setState(58);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQUALS) {
					{
					setState(56);
					match(EQUALS);
					setState(57);
					expr(0);
					}
				}

				}
				break;
			case 2:
				_localctx = new InvalidAssignContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(60);
				match(PR);
				setState(61);
				((InvalidAssignContext)_localctx).ID = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==CHINCHA || _la==SUJJA) ) {
					((InvalidAssignContext)_localctx).ID = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
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
	public static class AsignacionContext extends ParserRuleContext {
		public TerminalNode GEULSSI() { return getToken(MachaJazParser.GEULSSI, 0); }
		public TerminalNode EQUALS() { return getToken(MachaJazParser.EQUALS, 0); }
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
			setState(68);
			match(GEULSSI);
			setState(69);
			match(EQUALS);
			setState(70);
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
		public TerminalNode PRINT() { return getToken(MachaJazParser.PRINT, 0); }
		public TerminalNode PARENTH_A() { return getToken(MachaJazParser.PARENTH_A, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PARENTH_B() { return getToken(MachaJazParser.PARENTH_B, 0); }
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
			setState(72);
			match(PRINT);
			setState(73);
			match(PARENTH_A);
			setState(74);
			expr(0);
			setState(75);
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
		public TerminalNode PARENTH_A() { return getToken(MachaJazParser.PARENTH_A, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PARENTH_B() { return getToken(MachaJazParser.PARENTH_B, 0); }
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
		public TerminalNode SUJJA() { return getToken(MachaJazParser.SUJJA, 0); }
		public SujjaContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StringContext extends ExprContext {
		public TerminalNode STRING() { return getToken(MachaJazParser.STRING, 0); }
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
		public TerminalNode DO() { return getToken(MachaJazParser.DO, 0); }
		public TerminalNode PPAEDA() { return getToken(MachaJazParser.PPAEDA, 0); }
		public SumresContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class GeulssiContext extends ExprContext {
		public TerminalNode GEULSSI() { return getToken(MachaJazParser.GEULSSI, 0); }
		public GeulssiContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CondicionContext extends ExprContext {
		public Token simbolo;
		public TerminalNode LOGIC() { return getToken(MachaJazParser.LOGIC, 0); }
		public TerminalNode MATH() { return getToken(MachaJazParser.MATH, 0); }
		public TerminalNode BOOLEAN() { return getToken(MachaJazParser.BOOLEAN, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public CondicionContext(ExprContext ctx) { copyFrom(ctx); }
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
		public TerminalNode GOPSSEM() { return getToken(MachaJazParser.GOPSSEM, 0); }
		public TerminalNode NANU() { return getToken(MachaJazParser.NANU, 0); }
		public TerminalNode PORCENT() { return getToken(MachaJazParser.PORCENT, 0); }
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
			setState(86);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PARENTH_A:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(78);
				match(PARENTH_A);
				setState(79);
				expr(0);
				setState(80);
				match(PARENTH_B);
				}
				break;
			case LOGIC:
			case MATH:
			case BOOLEAN:
				{
				_localctx = new CondicionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(82);
				((CondicionContext)_localctx).simbolo = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 28672L) != 0)) ) {
					((CondicionContext)_localctx).simbolo = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case GEULSSI:
				{
				_localctx = new GeulssiContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(83);
				match(GEULSSI);
				}
				break;
			case SUJJA:
				{
				_localctx = new SujjaContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(84);
				match(SUJJA);
				}
				break;
			case STRING:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(85);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(101);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(99);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
					case 1:
						{
						_localctx = new MuldivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(88);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(89);
						((MuldivContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 458752L) != 0)) ) {
							((MuldivContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(90);
						expr(9);
						}
						break;
					case 2:
						{
						_localctx = new SumresContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(91);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(92);
						((SumresContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==DO || _la==PPAEDA) ) {
							((SumresContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(93);
						expr(8);
						}
						break;
					case 3:
						{
						_localctx = new CondicionContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(94);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(95);
						((CondicionContext)_localctx).simbolo = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 28672L) != 0)) ) {
							((CondicionContext)_localctx).simbolo = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(96);
						expr(6);
						}
						break;
					case 4:
						{
						_localctx = new ImplicitMultContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(97);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(98);
						expr(2);
						}
						break;
					}
					} 
				}
				setState(103);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
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
		public TerminalNode GEULSSI() { return getToken(MachaJazParser.GEULSSI, 0); }
		public List<TerminalNode> DO() { return getTokens(MachaJazParser.DO); }
		public TerminalNode DO(int i) {
			return getToken(MachaJazParser.DO, i);
		}
		public List<TerminalNode> PPAEDA() { return getTokens(MachaJazParser.PPAEDA); }
		public TerminalNode PPAEDA(int i) {
			return getToken(MachaJazParser.PPAEDA, i);
		}
		public TerminalNode GONG() { return getToken(MachaJazParser.GONG, 0); }
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
			setState(104);
			match(GEULSSI);
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==GONG) {
				{
				setState(105);
				match(GONG);
				}
			}

			setState(112);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DO:
				{
				setState(108);
				match(DO);
				setState(109);
				match(DO);
				}
				break;
			case PPAEDA:
				{
				setState(110);
				match(PPAEDA);
				setState(111);
				match(PPAEDA);
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
			setState(114);
			condicional();
			setState(118);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(115);
					condicionalElseIf();
					}
					} 
				}
				setState(120);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			}
			setState(122);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(121);
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
		public TerminalNode IF() { return getToken(MachaJazParser.IF, 0); }
		public TerminalNode PARENTH_A() { return getToken(MachaJazParser.PARENTH_A, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PARENTH_B() { return getToken(MachaJazParser.PARENTH_B, 0); }
		public TerminalNode OPENKEY() { return getToken(MachaJazParser.OPENKEY, 0); }
		public TerminalNode CLOSEKEY() { return getToken(MachaJazParser.CLOSEKEY, 0); }
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
			setState(124);
			match(IF);
			setState(125);
			match(PARENTH_A);
			setState(126);
			expr(0);
			setState(127);
			match(PARENTH_B);
			setState(128);
			match(OPENKEY);
			setState(132);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 20972080L) != 0)) {
				{
				{
				setState(129);
				main();
				}
				}
				setState(134);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(135);
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
		public TerminalNode ELSE() { return getToken(MachaJazParser.ELSE, 0); }
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
			setState(137);
			match(ELSE);
			setState(138);
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
		public TerminalNode ELSE() { return getToken(MachaJazParser.ELSE, 0); }
		public TerminalNode OPENKEY() { return getToken(MachaJazParser.OPENKEY, 0); }
		public TerminalNode CLOSEKEY() { return getToken(MachaJazParser.CLOSEKEY, 0); }
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
			setState(140);
			match(ELSE);
			setState(141);
			match(OPENKEY);
			setState(145);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 20972080L) != 0)) {
				{
				{
				setState(142);
				main();
				}
				}
				setState(147);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(148);
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
		public TerminalNode WHILE() { return getToken(MachaJazParser.WHILE, 0); }
		public TerminalNode PARENTH_A() { return getToken(MachaJazParser.PARENTH_A, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PARENTH_B() { return getToken(MachaJazParser.PARENTH_B, 0); }
		public TerminalNode OPENKEY() { return getToken(MachaJazParser.OPENKEY, 0); }
		public TerminalNode CLOSEKEY() { return getToken(MachaJazParser.CLOSEKEY, 0); }
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
			setState(150);
			match(WHILE);
			setState(151);
			match(PARENTH_A);
			setState(152);
			expr(0);
			setState(153);
			match(PARENTH_B);
			setState(154);
			match(OPENKEY);
			setState(158);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 20972080L) != 0)) {
				{
				{
				setState(155);
				main();
				}
				}
				setState(160);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(161);
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
	public static class ForContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(MachaJazParser.FOR, 0); }
		public TerminalNode PARENTH_A() { return getToken(MachaJazParser.PARENTH_A, 0); }
		public DeclaracionContext declaracion() {
			return getRuleContext(DeclaracionContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public IncrementoContext incremento() {
			return getRuleContext(IncrementoContext.class,0);
		}
		public TerminalNode PARENTH_B() { return getToken(MachaJazParser.PARENTH_B, 0); }
		public TerminalNode OPENKEY() { return getToken(MachaJazParser.OPENKEY, 0); }
		public MainContext main() {
			return getRuleContext(MainContext.class,0);
		}
		public TerminalNode CLOSEKEY() { return getToken(MachaJazParser.CLOSEKEY, 0); }
		public ForContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for; }
	}

	public final ForContext for_() throws RecognitionException {
		ForContext _localctx = new ForContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_for);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			match(FOR);
			setState(164);
			match(PARENTH_A);
			setState(165);
			declaracion();
			setState(166);
			expr(0);
			setState(167);
			incremento();
			setState(168);
			match(PARENTH_B);
			setState(169);
			match(OPENKEY);
			setState(170);
			main();
			setState(171);
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
			return precpred(_ctx, 8);
		case 1:
			return precpred(_ctx, 7);
		case 2:
			return precpred(_ctx, 5);
		case 3:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0019\u00ae\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0001\u0000\u0004"+
		"\u0000 \b\u0000\u000b\u0000\f\u0000!\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0005\u0002*\b\u0002\n\u0002\f\u0002"+
		"-\t\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0003\u00035\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0003\u0004;\b\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0003\u0004A\b\u0004\u0003\u0004C\b\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007W\b"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005"+
		"\u0007d\b\u0007\n\u0007\f\u0007g\t\u0007\u0001\b\u0001\b\u0003\bk\b\b"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0003\bq\b\b\u0001\t\u0001\t\u0005\t"+
		"u\b\t\n\t\f\tx\t\t\u0001\t\u0003\t{\b\t\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0005\n\u0083\b\n\n\n\f\n\u0086\t\n\u0001\n\u0001\n"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0005\f\u0090"+
		"\b\f\n\f\f\f\u0093\t\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r"+
		"\u0001\r\u0001\r\u0005\r\u009d\b\r\n\r\f\r\u00a0\t\r\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0000\u0001\u000e"+
		"\u000f\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u001c\u0000\u0004\u0001\u0000\u0007\b\u0001\u0000\f\u000e\u0001"+
		"\u0000\u0010\u0012\u0001\u0000\u0013\u0014\u00b7\u0000\u001f\u0001\u0000"+
		"\u0000\u0000\u0002#\u0001\u0000\u0000\u0000\u0004+\u0001\u0000\u0000\u0000"+
		"\u00064\u0001\u0000\u0000\u0000\bB\u0001\u0000\u0000\u0000\nD\u0001\u0000"+
		"\u0000\u0000\fH\u0001\u0000\u0000\u0000\u000eV\u0001\u0000\u0000\u0000"+
		"\u0010h\u0001\u0000\u0000\u0000\u0012r\u0001\u0000\u0000\u0000\u0014|"+
		"\u0001\u0000\u0000\u0000\u0016\u0089\u0001\u0000\u0000\u0000\u0018\u008c"+
		"\u0001\u0000\u0000\u0000\u001a\u0096\u0001\u0000\u0000\u0000\u001c\u00a3"+
		"\u0001\u0000\u0000\u0000\u001e \u0003\u0002\u0001\u0000\u001f\u001e\u0001"+
		"\u0000\u0000\u0000 !\u0001\u0000\u0000\u0000!\u001f\u0001\u0000\u0000"+
		"\u0000!\"\u0001\u0000\u0000\u0000\"\u0001\u0001\u0000\u0000\u0000#$\u0005"+
		"\u0001\u0000\u0000$%\u0005\u0002\u0000\u0000%&\u0003\u0004\u0002\u0000"+
		"&\'\u0005\u0003\u0000\u0000\'\u0003\u0001\u0000\u0000\u0000(*\u0003\u0006"+
		"\u0003\u0000)(\u0001\u0000\u0000\u0000*-\u0001\u0000\u0000\u0000+)\u0001"+
		"\u0000\u0000\u0000+,\u0001\u0000\u0000\u0000,\u0005\u0001\u0000\u0000"+
		"\u0000-+\u0001\u0000\u0000\u0000.5\u0003\b\u0004\u0000/5\u0003\n\u0005"+
		"\u000005\u0003\u0012\t\u000015\u0003\u001a\r\u000025\u0003\f\u0006\u0000"+
		"35\u0003\u0010\b\u00004.\u0001\u0000\u0000\u00004/\u0001\u0000\u0000\u0000"+
		"40\u0001\u0000\u0000\u000041\u0001\u0000\u0000\u000042\u0001\u0000\u0000"+
		"\u000043\u0001\u0000\u0000\u00005\u0007\u0001\u0000\u0000\u000067\u0005"+
		"\u0004\u0000\u00007:\u0005\u0005\u0000\u000089\u0005\u0006\u0000\u0000"+
		"9;\u0003\u000e\u0007\u0000:8\u0001\u0000\u0000\u0000:;\u0001\u0000\u0000"+
		"\u0000;C\u0001\u0000\u0000\u0000<=\u0005\u0004\u0000\u0000=@\u0007\u0000"+
		"\u0000\u0000>?\u0005\u0006\u0000\u0000?A\u0003\u000e\u0007\u0000@>\u0001"+
		"\u0000\u0000\u0000@A\u0001\u0000\u0000\u0000AC\u0001\u0000\u0000\u0000"+
		"B6\u0001\u0000\u0000\u0000B<\u0001\u0000\u0000\u0000C\t\u0001\u0000\u0000"+
		"\u0000DE\u0005\u0005\u0000\u0000EF\u0005\u0006\u0000\u0000FG\u0003\u000e"+
		"\u0007\u0000G\u000b\u0001\u0000\u0000\u0000HI\u0005\t\u0000\u0000IJ\u0005"+
		"\n\u0000\u0000JK\u0003\u000e\u0007\u0000KL\u0005\u000b\u0000\u0000L\r"+
		"\u0001\u0000\u0000\u0000MN\u0006\u0007\uffff\uffff\u0000NO\u0005\n\u0000"+
		"\u0000OP\u0003\u000e\u0007\u0000PQ\u0005\u000b\u0000\u0000QW\u0001\u0000"+
		"\u0000\u0000RW\u0007\u0001\u0000\u0000SW\u0005\u0005\u0000\u0000TW\u0005"+
		"\b\u0000\u0000UW\u0005\u000f\u0000\u0000VM\u0001\u0000\u0000\u0000VR\u0001"+
		"\u0000\u0000\u0000VS\u0001\u0000\u0000\u0000VT\u0001\u0000\u0000\u0000"+
		"VU\u0001\u0000\u0000\u0000We\u0001\u0000\u0000\u0000XY\n\b\u0000\u0000"+
		"YZ\u0007\u0002\u0000\u0000Zd\u0003\u000e\u0007\t[\\\n\u0007\u0000\u0000"+
		"\\]\u0007\u0003\u0000\u0000]d\u0003\u000e\u0007\b^_\n\u0005\u0000\u0000"+
		"_`\u0007\u0001\u0000\u0000`d\u0003\u000e\u0007\u0006ab\n\u0001\u0000\u0000"+
		"bd\u0003\u000e\u0007\u0002cX\u0001\u0000\u0000\u0000c[\u0001\u0000\u0000"+
		"\u0000c^\u0001\u0000\u0000\u0000ca\u0001\u0000\u0000\u0000dg\u0001\u0000"+
		"\u0000\u0000ec\u0001\u0000\u0000\u0000ef\u0001\u0000\u0000\u0000f\u000f"+
		"\u0001\u0000\u0000\u0000ge\u0001\u0000\u0000\u0000hj\u0005\u0005\u0000"+
		"\u0000ik\u0005\u0015\u0000\u0000ji\u0001\u0000\u0000\u0000jk\u0001\u0000"+
		"\u0000\u0000kp\u0001\u0000\u0000\u0000lm\u0005\u0013\u0000\u0000mq\u0005"+
		"\u0013\u0000\u0000no\u0005\u0014\u0000\u0000oq\u0005\u0014\u0000\u0000"+
		"pl\u0001\u0000\u0000\u0000pn\u0001\u0000\u0000\u0000q\u0011\u0001\u0000"+
		"\u0000\u0000rv\u0003\u0014\n\u0000su\u0003\u0016\u000b\u0000ts\u0001\u0000"+
		"\u0000\u0000ux\u0001\u0000\u0000\u0000vt\u0001\u0000\u0000\u0000vw\u0001"+
		"\u0000\u0000\u0000wz\u0001\u0000\u0000\u0000xv\u0001\u0000\u0000\u0000"+
		"y{\u0003\u0018\f\u0000zy\u0001\u0000\u0000\u0000z{\u0001\u0000\u0000\u0000"+
		"{\u0013\u0001\u0000\u0000\u0000|}\u0005\u0016\u0000\u0000}~\u0005\n\u0000"+
		"\u0000~\u007f\u0003\u000e\u0007\u0000\u007f\u0080\u0005\u000b\u0000\u0000"+
		"\u0080\u0084\u0005\u0002\u0000\u0000\u0081\u0083\u0003\u0006\u0003\u0000"+
		"\u0082\u0081\u0001\u0000\u0000\u0000\u0083\u0086\u0001\u0000\u0000\u0000"+
		"\u0084\u0082\u0001\u0000\u0000\u0000\u0084\u0085\u0001\u0000\u0000\u0000"+
		"\u0085\u0087\u0001\u0000\u0000\u0000\u0086\u0084\u0001\u0000\u0000\u0000"+
		"\u0087\u0088\u0005\u0003\u0000\u0000\u0088\u0015\u0001\u0000\u0000\u0000"+
		"\u0089\u008a\u0005\u0017\u0000\u0000\u008a\u008b\u0003\u0014\n\u0000\u008b"+
		"\u0017\u0001\u0000\u0000\u0000\u008c\u008d\u0005\u0017\u0000\u0000\u008d"+
		"\u0091\u0005\u0002\u0000\u0000\u008e\u0090\u0003\u0006\u0003\u0000\u008f"+
		"\u008e\u0001\u0000\u0000\u0000\u0090\u0093\u0001\u0000\u0000\u0000\u0091"+
		"\u008f\u0001\u0000\u0000\u0000\u0091\u0092\u0001\u0000\u0000\u0000\u0092"+
		"\u0094\u0001\u0000\u0000\u0000\u0093\u0091\u0001\u0000\u0000\u0000\u0094"+
		"\u0095\u0005\u0003\u0000\u0000\u0095\u0019\u0001\u0000\u0000\u0000\u0096"+
		"\u0097\u0005\u0018\u0000\u0000\u0097\u0098\u0005\n\u0000\u0000\u0098\u0099"+
		"\u0003\u000e\u0007\u0000\u0099\u009a\u0005\u000b\u0000\u0000\u009a\u009e"+
		"\u0005\u0002\u0000\u0000\u009b\u009d\u0003\u0006\u0003\u0000\u009c\u009b"+
		"\u0001\u0000\u0000\u0000\u009d\u00a0\u0001\u0000\u0000\u0000\u009e\u009c"+
		"\u0001\u0000\u0000\u0000\u009e\u009f\u0001\u0000\u0000\u0000\u009f\u00a1"+
		"\u0001\u0000\u0000\u0000\u00a0\u009e\u0001\u0000\u0000\u0000\u00a1\u00a2"+
		"\u0005\u0003\u0000\u0000\u00a2\u001b\u0001\u0000\u0000\u0000\u00a3\u00a4"+
		"\u0005\u0019\u0000\u0000\u00a4\u00a5\u0005\n\u0000\u0000\u00a5\u00a6\u0003"+
		"\b\u0004\u0000\u00a6\u00a7\u0003\u000e\u0007\u0000\u00a7\u00a8\u0003\u0010"+
		"\b\u0000\u00a8\u00a9\u0005\u000b\u0000\u0000\u00a9\u00aa\u0005\u0002\u0000"+
		"\u0000\u00aa\u00ab\u0003\u0006\u0003\u0000\u00ab\u00ac\u0005\u0003\u0000"+
		"\u0000\u00ac\u001d\u0001\u0000\u0000\u0000\u0010!+4:@BVcejpvz\u0084\u0091"+
		"\u009e";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}