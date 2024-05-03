// Generated from /home/mrsmin/Escritorio/automatas/automatas 2/macha-code-compiler/grammar/Compilador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CompiladorParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CHICHAK=1, PR=2, PARENTH_A=3, PARENTH_B=4, OPENKEY=5, CLOSEKEY=6, GOPSSEM=7, 
		NANU=8, DO=9, PPAEDA=10, EQUALS=11, PORCENT=12, PRINT=13, IF=14, ELSE=15, 
		WHILE=16, LOGIC=17, MATH=18, BOOLEAN=19, STRING=20, CHAR=21, SUJJA=22, 
		GEULSSI=23, CHINCHA=24, GONG=25;
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
			null, "'chichak'", null, "'('", "')'", "'{'", "'}'", "'*'", "'/'", "'+'", 
			"'-'", "'='", "'%'", "'inswae'", "'myeon'", "'namochi'", "'geuttae'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "CHICHAK", "PR", "PARENTH_A", "PARENTH_B", "OPENKEY", "CLOSEKEY", 
			"GOPSSEM", "NANU", "DO", "PPAEDA", "EQUALS", "PORCENT", "PRINT", "IF", 
			"ELSE", "WHILE", "LOGIC", "MATH", "BOOLEAN", "STRING", "CHAR", "SUJJA", 
			"GEULSSI", "CHINCHA", "GONG"
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
	public String getGrammarFileName() { return "Compilador.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CompiladorParser(TokenStream input) {
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
		public TerminalNode CHICHAK() { return getToken(CompiladorParser.CHICHAK, 0); }
		public TerminalNode OPENKEY() { return getToken(CompiladorParser.OPENKEY, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode CLOSEKEY() { return getToken(CompiladorParser.CLOSEKEY, 0); }
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
			match(CHICHAK);
			setState(34);
			match(OPENKEY);
			setState(35);
			content();
			setState(36);
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
			setState(41);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8478724L) != 0)) {
				{
				{
				setState(38);
				main();
				}
				}
				setState(43);
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
		public MainContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_main; }
	}

	public final MainContext main() throws RecognitionException {
		MainContext _localctx = new MainContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_main);
		try {
			setState(49);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PR:
				enterOuterAlt(_localctx, 1);
				{
				setState(44);
				declaracion();
				}
				break;
			case GEULSSI:
				enterOuterAlt(_localctx, 2);
				{
				setState(45);
				asignacion();
				}
				break;
			case IF:
				enterOuterAlt(_localctx, 3);
				{
				setState(46);
				condicionalBucle();
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 4);
				{
				setState(47);
				while_();
				}
				break;
			case PRINT:
				enterOuterAlt(_localctx, 5);
				{
				setState(48);
				impresion();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		public TerminalNode PR() { return getToken(CompiladorParser.PR, 0); }
		public TerminalNode GEULSSI() { return getToken(CompiladorParser.GEULSSI, 0); }
		public TerminalNode EQUALS() { return getToken(CompiladorParser.EQUALS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ValidAssignContext(DeclaracionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class InvalidAssignContext extends DeclaracionContext {
		public Token ID;
		public TerminalNode PR() { return getToken(CompiladorParser.PR, 0); }
		public TerminalNode CHINCHA() { return getToken(CompiladorParser.CHINCHA, 0); }
		public TerminalNode SUJJA() { return getToken(CompiladorParser.SUJJA, 0); }
		public TerminalNode EQUALS() { return getToken(CompiladorParser.EQUALS, 0); }
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
			setState(63);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				_localctx = new ValidAssignContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(51);
				match(PR);
				setState(52);
				match(GEULSSI);
				setState(55);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQUALS) {
					{
					setState(53);
					match(EQUALS);
					setState(54);
					expr(0);
					}
				}

				}
				break;
			case 2:
				_localctx = new InvalidAssignContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(57);
				match(PR);
				setState(58);
				((InvalidAssignContext)_localctx).ID = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==SUJJA || _la==CHINCHA) ) {
					((InvalidAssignContext)_localctx).ID = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(61);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQUALS) {
					{
					setState(59);
					match(EQUALS);
					setState(60);
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
		public TerminalNode GEULSSI() { return getToken(CompiladorParser.GEULSSI, 0); }
		public TerminalNode EQUALS() { return getToken(CompiladorParser.EQUALS, 0); }
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
			setState(65);
			match(GEULSSI);
			setState(66);
			match(EQUALS);
			setState(67);
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
		public TerminalNode PRINT() { return getToken(CompiladorParser.PRINT, 0); }
		public TerminalNode PARENTH_A() { return getToken(CompiladorParser.PARENTH_A, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PARENTH_B() { return getToken(CompiladorParser.PARENTH_B, 0); }
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
			setState(69);
			match(PRINT);
			setState(70);
			match(PARENTH_A);
			setState(71);
			expr(0);
			setState(72);
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
		public TerminalNode PARENTH_A() { return getToken(CompiladorParser.PARENTH_A, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PARENTH_B() { return getToken(CompiladorParser.PARENTH_B, 0); }
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
		public TerminalNode SUJJA() { return getToken(CompiladorParser.SUJJA, 0); }
		public SujjaContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StringContext extends ExprContext {
		public TerminalNode STRING() { return getToken(CompiladorParser.STRING, 0); }
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
		public TerminalNode DO() { return getToken(CompiladorParser.DO, 0); }
		public TerminalNode PPAEDA() { return getToken(CompiladorParser.PPAEDA, 0); }
		public SumresContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class GeulssiContext extends ExprContext {
		public TerminalNode GEULSSI() { return getToken(CompiladorParser.GEULSSI, 0); }
		public GeulssiContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CondicionContext extends ExprContext {
		public Token simbolo;
		public TerminalNode LOGIC() { return getToken(CompiladorParser.LOGIC, 0); }
		public TerminalNode MATH() { return getToken(CompiladorParser.MATH, 0); }
		public TerminalNode BOOLEAN() { return getToken(CompiladorParser.BOOLEAN, 0); }
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
		public TerminalNode GOPSSEM() { return getToken(CompiladorParser.GOPSSEM, 0); }
		public TerminalNode NANU() { return getToken(CompiladorParser.NANU, 0); }
		public TerminalNode PORCENT() { return getToken(CompiladorParser.PORCENT, 0); }
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
			setState(83);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PARENTH_A:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(75);
				match(PARENTH_A);
				setState(76);
				expr(0);
				setState(77);
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
				setState(79);
				((CondicionContext)_localctx).simbolo = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 917504L) != 0)) ) {
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
				setState(80);
				match(GEULSSI);
				}
				break;
			case SUJJA:
				{
				_localctx = new SujjaContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(81);
				match(SUJJA);
				}
				break;
			case STRING:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(82);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(98);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(96);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
					case 1:
						{
						_localctx = new MuldivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(85);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(86);
						((MuldivContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 4480L) != 0)) ) {
							((MuldivContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(87);
						expr(9);
						}
						break;
					case 2:
						{
						_localctx = new SumresContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(88);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(89);
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
						setState(90);
						expr(8);
						}
						break;
					case 3:
						{
						_localctx = new CondicionContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(91);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(92);
						((CondicionContext)_localctx).simbolo = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 917504L) != 0)) ) {
							((CondicionContext)_localctx).simbolo = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(93);
						expr(6);
						}
						break;
					case 4:
						{
						_localctx = new ImplicitMultContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(94);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(95);
						expr(2);
						}
						break;
					}
					} 
				}
				setState(100);
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
		public TerminalNode GEULSSI() { return getToken(CompiladorParser.GEULSSI, 0); }
		public List<TerminalNode> DO() { return getTokens(CompiladorParser.DO); }
		public TerminalNode DO(int i) {
			return getToken(CompiladorParser.DO, i);
		}
		public List<TerminalNode> PPAEDA() { return getTokens(CompiladorParser.PPAEDA); }
		public TerminalNode PPAEDA(int i) {
			return getToken(CompiladorParser.PPAEDA, i);
		}
		public IncrementoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_incremento; }
	}

	public final IncrementoContext incremento() throws RecognitionException {
		IncrementoContext _localctx = new IncrementoContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_incremento);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			match(GEULSSI);
			setState(106);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DO:
				{
				setState(102);
				match(DO);
				setState(103);
				match(DO);
				}
				break;
			case PPAEDA:
				{
				setState(104);
				match(PPAEDA);
				setState(105);
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
			setState(108);
			condicional();
			setState(112);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(109);
					condicionalElseIf();
					}
					} 
				}
				setState(114);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			}
			setState(116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(115);
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
		public TerminalNode IF() { return getToken(CompiladorParser.IF, 0); }
		public TerminalNode PARENTH_A() { return getToken(CompiladorParser.PARENTH_A, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PARENTH_B() { return getToken(CompiladorParser.PARENTH_B, 0); }
		public TerminalNode OPENKEY() { return getToken(CompiladorParser.OPENKEY, 0); }
		public TerminalNode CLOSEKEY() { return getToken(CompiladorParser.CLOSEKEY, 0); }
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
			setState(118);
			match(IF);
			setState(119);
			match(PARENTH_A);
			setState(120);
			expr(0);
			setState(121);
			match(PARENTH_B);
			setState(122);
			match(OPENKEY);
			setState(126);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8478724L) != 0)) {
				{
				{
				setState(123);
				main();
				}
				}
				setState(128);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(129);
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
		public TerminalNode ELSE() { return getToken(CompiladorParser.ELSE, 0); }
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
			setState(131);
			match(ELSE);
			setState(132);
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
		public TerminalNode ELSE() { return getToken(CompiladorParser.ELSE, 0); }
		public TerminalNode OPENKEY() { return getToken(CompiladorParser.OPENKEY, 0); }
		public TerminalNode CLOSEKEY() { return getToken(CompiladorParser.CLOSEKEY, 0); }
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
			setState(134);
			match(ELSE);
			setState(135);
			match(OPENKEY);
			setState(139);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8478724L) != 0)) {
				{
				{
				setState(136);
				main();
				}
				}
				setState(141);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(142);
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
		public TerminalNode WHILE() { return getToken(CompiladorParser.WHILE, 0); }
		public TerminalNode PARENTH_A() { return getToken(CompiladorParser.PARENTH_A, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PARENTH_B() { return getToken(CompiladorParser.PARENTH_B, 0); }
		public TerminalNode OPENKEY() { return getToken(CompiladorParser.OPENKEY, 0); }
		public TerminalNode CLOSEKEY() { return getToken(CompiladorParser.CLOSEKEY, 0); }
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
			setState(144);
			match(WHILE);
			setState(145);
			match(PARENTH_A);
			setState(146);
			expr(0);
			setState(147);
			match(PARENTH_B);
			setState(148);
			match(OPENKEY);
			setState(152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8478724L) != 0)) {
				{
				{
				setState(149);
				main();
				}
				}
				setState(154);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(155);
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
		"\u0004\u0001\u0019\u009e\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0004\u0000\u001e\b\u0000"+
		"\u000b\u0000\f\u0000\u001f\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0002\u0005\u0002(\b\u0002\n\u0002\f\u0002+\t\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003"+
		"2\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004"+
		"8\b\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004"+
		">\b\u0004\u0003\u0004@\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0003\u0007T\b\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007a\b\u0007\n\u0007"+
		"\f\u0007d\t\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0003\bk\b\b"+
		"\u0001\t\u0001\t\u0005\to\b\t\n\t\f\tr\t\t\u0001\t\u0003\tu\b\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0005\n}\b\n\n\n\f\n\u0080"+
		"\t\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001"+
		"\f\u0001\f\u0005\f\u008a\b\f\n\f\f\f\u008d\t\f\u0001\f\u0001\f\u0001\r"+
		"\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005\r\u0097\b\r\n\r\f\r\u009a"+
		"\t\r\u0001\r\u0001\r\u0001\r\u0000\u0001\u000e\u000e\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0000\u0004\u0002"+
		"\u0000\u0016\u0016\u0018\u0018\u0001\u0000\u0011\u0013\u0002\u0000\u0007"+
		"\b\f\f\u0001\u0000\t\n\u00a6\u0000\u001d\u0001\u0000\u0000\u0000\u0002"+
		"!\u0001\u0000\u0000\u0000\u0004)\u0001\u0000\u0000\u0000\u00061\u0001"+
		"\u0000\u0000\u0000\b?\u0001\u0000\u0000\u0000\nA\u0001\u0000\u0000\u0000"+
		"\fE\u0001\u0000\u0000\u0000\u000eS\u0001\u0000\u0000\u0000\u0010e\u0001"+
		"\u0000\u0000\u0000\u0012l\u0001\u0000\u0000\u0000\u0014v\u0001\u0000\u0000"+
		"\u0000\u0016\u0083\u0001\u0000\u0000\u0000\u0018\u0086\u0001\u0000\u0000"+
		"\u0000\u001a\u0090\u0001\u0000\u0000\u0000\u001c\u001e\u0003\u0002\u0001"+
		"\u0000\u001d\u001c\u0001\u0000\u0000\u0000\u001e\u001f\u0001\u0000\u0000"+
		"\u0000\u001f\u001d\u0001\u0000\u0000\u0000\u001f \u0001\u0000\u0000\u0000"+
		" \u0001\u0001\u0000\u0000\u0000!\"\u0005\u0001\u0000\u0000\"#\u0005\u0005"+
		"\u0000\u0000#$\u0003\u0004\u0002\u0000$%\u0005\u0006\u0000\u0000%\u0003"+
		"\u0001\u0000\u0000\u0000&(\u0003\u0006\u0003\u0000\'&\u0001\u0000\u0000"+
		"\u0000(+\u0001\u0000\u0000\u0000)\'\u0001\u0000\u0000\u0000)*\u0001\u0000"+
		"\u0000\u0000*\u0005\u0001\u0000\u0000\u0000+)\u0001\u0000\u0000\u0000"+
		",2\u0003\b\u0004\u0000-2\u0003\n\u0005\u0000.2\u0003\u0012\t\u0000/2\u0003"+
		"\u001a\r\u000002\u0003\f\u0006\u00001,\u0001\u0000\u0000\u00001-\u0001"+
		"\u0000\u0000\u00001.\u0001\u0000\u0000\u00001/\u0001\u0000\u0000\u0000"+
		"10\u0001\u0000\u0000\u00002\u0007\u0001\u0000\u0000\u000034\u0005\u0002"+
		"\u0000\u000047\u0005\u0017\u0000\u000056\u0005\u000b\u0000\u000068\u0003"+
		"\u000e\u0007\u000075\u0001\u0000\u0000\u000078\u0001\u0000\u0000\u0000"+
		"8@\u0001\u0000\u0000\u00009:\u0005\u0002\u0000\u0000:=\u0007\u0000\u0000"+
		"\u0000;<\u0005\u000b\u0000\u0000<>\u0003\u000e\u0007\u0000=;\u0001\u0000"+
		"\u0000\u0000=>\u0001\u0000\u0000\u0000>@\u0001\u0000\u0000\u0000?3\u0001"+
		"\u0000\u0000\u0000?9\u0001\u0000\u0000\u0000@\t\u0001\u0000\u0000\u0000"+
		"AB\u0005\u0017\u0000\u0000BC\u0005\u000b\u0000\u0000CD\u0003\u000e\u0007"+
		"\u0000D\u000b\u0001\u0000\u0000\u0000EF\u0005\r\u0000\u0000FG\u0005\u0003"+
		"\u0000\u0000GH\u0003\u000e\u0007\u0000HI\u0005\u0004\u0000\u0000I\r\u0001"+
		"\u0000\u0000\u0000JK\u0006\u0007\uffff\uffff\u0000KL\u0005\u0003\u0000"+
		"\u0000LM\u0003\u000e\u0007\u0000MN\u0005\u0004\u0000\u0000NT\u0001\u0000"+
		"\u0000\u0000OT\u0007\u0001\u0000\u0000PT\u0005\u0017\u0000\u0000QT\u0005"+
		"\u0016\u0000\u0000RT\u0005\u0014\u0000\u0000SJ\u0001\u0000\u0000\u0000"+
		"SO\u0001\u0000\u0000\u0000SP\u0001\u0000\u0000\u0000SQ\u0001\u0000\u0000"+
		"\u0000SR\u0001\u0000\u0000\u0000Tb\u0001\u0000\u0000\u0000UV\n\b\u0000"+
		"\u0000VW\u0007\u0002\u0000\u0000Wa\u0003\u000e\u0007\tXY\n\u0007\u0000"+
		"\u0000YZ\u0007\u0003\u0000\u0000Za\u0003\u000e\u0007\b[\\\n\u0005\u0000"+
		"\u0000\\]\u0007\u0001\u0000\u0000]a\u0003\u000e\u0007\u0006^_\n\u0001"+
		"\u0000\u0000_a\u0003\u000e\u0007\u0002`U\u0001\u0000\u0000\u0000`X\u0001"+
		"\u0000\u0000\u0000`[\u0001\u0000\u0000\u0000`^\u0001\u0000\u0000\u0000"+
		"ad\u0001\u0000\u0000\u0000b`\u0001\u0000\u0000\u0000bc\u0001\u0000\u0000"+
		"\u0000c\u000f\u0001\u0000\u0000\u0000db\u0001\u0000\u0000\u0000ej\u0005"+
		"\u0017\u0000\u0000fg\u0005\t\u0000\u0000gk\u0005\t\u0000\u0000hi\u0005"+
		"\n\u0000\u0000ik\u0005\n\u0000\u0000jf\u0001\u0000\u0000\u0000jh\u0001"+
		"\u0000\u0000\u0000k\u0011\u0001\u0000\u0000\u0000lp\u0003\u0014\n\u0000"+
		"mo\u0003\u0016\u000b\u0000nm\u0001\u0000\u0000\u0000or\u0001\u0000\u0000"+
		"\u0000pn\u0001\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000qt\u0001\u0000"+
		"\u0000\u0000rp\u0001\u0000\u0000\u0000su\u0003\u0018\f\u0000ts\u0001\u0000"+
		"\u0000\u0000tu\u0001\u0000\u0000\u0000u\u0013\u0001\u0000\u0000\u0000"+
		"vw\u0005\u000e\u0000\u0000wx\u0005\u0003\u0000\u0000xy\u0003\u000e\u0007"+
		"\u0000yz\u0005\u0004\u0000\u0000z~\u0005\u0005\u0000\u0000{}\u0003\u0006"+
		"\u0003\u0000|{\u0001\u0000\u0000\u0000}\u0080\u0001\u0000\u0000\u0000"+
		"~|\u0001\u0000\u0000\u0000~\u007f\u0001\u0000\u0000\u0000\u007f\u0081"+
		"\u0001\u0000\u0000\u0000\u0080~\u0001\u0000\u0000\u0000\u0081\u0082\u0005"+
		"\u0006\u0000\u0000\u0082\u0015\u0001\u0000\u0000\u0000\u0083\u0084\u0005"+
		"\u000f\u0000\u0000\u0084\u0085\u0003\u0014\n\u0000\u0085\u0017\u0001\u0000"+
		"\u0000\u0000\u0086\u0087\u0005\u000f\u0000\u0000\u0087\u008b\u0005\u0005"+
		"\u0000\u0000\u0088\u008a\u0003\u0006\u0003\u0000\u0089\u0088\u0001\u0000"+
		"\u0000\u0000\u008a\u008d\u0001\u0000\u0000\u0000\u008b\u0089\u0001\u0000"+
		"\u0000\u0000\u008b\u008c\u0001\u0000\u0000\u0000\u008c\u008e\u0001\u0000"+
		"\u0000\u0000\u008d\u008b\u0001\u0000\u0000\u0000\u008e\u008f\u0005\u0006"+
		"\u0000\u0000\u008f\u0019\u0001\u0000\u0000\u0000\u0090\u0091\u0005\u0010"+
		"\u0000\u0000\u0091\u0092\u0005\u0003\u0000\u0000\u0092\u0093\u0003\u000e"+
		"\u0007\u0000\u0093\u0094\u0005\u0004\u0000\u0000\u0094\u0098\u0005\u0005"+
		"\u0000\u0000\u0095\u0097\u0003\u0006\u0003\u0000\u0096\u0095\u0001\u0000"+
		"\u0000\u0000\u0097\u009a\u0001\u0000\u0000\u0000\u0098\u0096\u0001\u0000"+
		"\u0000\u0000\u0098\u0099\u0001\u0000\u0000\u0000\u0099\u009b\u0001\u0000"+
		"\u0000\u0000\u009a\u0098\u0001\u0000\u0000\u0000\u009b\u009c\u0005\u0006"+
		"\u0000\u0000\u009c\u001b\u0001\u0000\u0000\u0000\u000f\u001f)17=?S`bj"+
		"pt~\u008b\u0098";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}