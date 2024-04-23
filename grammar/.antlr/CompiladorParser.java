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
		CHICHAK=1, PR=2, STRING=3, PARENTH_A=4, PARENTH_B=5, OPENKEY=6, CLOSEKEY=7, 
		GOPSSEM=8, NANU=9, DO=10, PPAEDA=11, EQUALS=12, PRINT=13, IF=14, ELSE=15, 
		LOGIC=16, MATH=17, BOOLEAN=18, SUJJA=19, GEULSSI=20, CHINCHA=21, GONG=22;
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
			null, "'chichak'", null, null, "'('", "')'", "'{'", "'}'", "'*'", "'/'", 
			"'+'", "'-'", "'='", "'inswae'", "'myeon'", "'namochi'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "CHICHAK", "PR", "STRING", "PARENTH_A", "PARENTH_B", "OPENKEY", 
			"CLOSEKEY", "GOPSSEM", "NANU", "DO", "PPAEDA", "EQUALS", "PRINT", "IF", 
			"ELSE", "LOGIC", "MATH", "BOOLEAN", "SUJJA", "GEULSSI", "CHINCHA", "GONG"
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
			setState(29);
			match(CHICHAK);
			setState(30);
			match(OPENKEY);
			setState(31);
			content();
			setState(32);
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
			setState(37);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 24580L) != 0)) {
				{
				{
				setState(34);
				main();
				}
				}
				setState(39);
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
			setState(44);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(40);
				declaracion();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(41);
				asignacion();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(42);
				condicionalBucle();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(43);
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
			setState(58);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				_localctx = new ValidAssignContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(46);
				match(PR);
				setState(47);
				match(GEULSSI);
				setState(50);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQUALS) {
					{
					setState(48);
					match(EQUALS);
					setState(49);
					expr(0);
					}
				}

				}
				break;
			case 2:
				_localctx = new InvalidAssignContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(52);
				match(PR);
				setState(53);
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
				setState(56);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQUALS) {
					{
					setState(54);
					match(EQUALS);
					setState(55);
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
		public TerminalNode PR() { return getToken(CompiladorParser.PR, 0); }
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
			setState(60);
			match(PR);
			setState(61);
			match(GEULSSI);
			setState(62);
			match(EQUALS);
			setState(63);
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
			setState(65);
			match(PRINT);
			setState(66);
			match(PARENTH_A);
			setState(67);
			expr(0);
			setState(68);
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
		public TerminalNode STRING() { return getToken(CompiladorParser.STRING, 0); }
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
			setState(79);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(71);
				match(PARENTH_A);
				setState(72);
				expr(0);
				setState(73);
				match(PARENTH_B);
				}
				break;
			case 2:
				{
				_localctx = new CondicionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(75);
				((CondicionContext)_localctx).simbolo = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 458760L) != 0)) ) {
					((CondicionContext)_localctx).simbolo = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 3:
				{
				_localctx = new GeulssiContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(76);
				match(GEULSSI);
				}
				break;
			case 4:
				{
				_localctx = new SujjaContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(77);
				match(SUJJA);
				}
				break;
			case 5:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(78);
				match(STRING);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(94);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(92);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
					case 1:
						{
						_localctx = new MuldivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(81);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(82);
						((MuldivContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==GOPSSEM || _la==NANU) ) {
							((MuldivContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(83);
						expr(9);
						}
						break;
					case 2:
						{
						_localctx = new SumresContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(84);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(85);
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
						setState(86);
						expr(8);
						}
						break;
					case 3:
						{
						_localctx = new CondicionContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(87);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(88);
						((CondicionContext)_localctx).simbolo = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 458760L) != 0)) ) {
							((CondicionContext)_localctx).simbolo = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(89);
						expr(6);
						}
						break;
					case 4:
						{
						_localctx = new ImplicitMultContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(90);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(91);
						expr(2);
						}
						break;
					}
					} 
				}
				setState(96);
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
			setState(97);
			condicional();
			setState(101);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(98);
					condicionalElseIf();
					}
					} 
				}
				setState(103);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			setState(105);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(104);
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
		enterRule(_localctx, 18, RULE_condicional);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			match(IF);
			setState(108);
			match(PARENTH_A);
			setState(109);
			expr(0);
			setState(110);
			match(PARENTH_B);
			setState(111);
			match(OPENKEY);
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 24580L) != 0)) {
				{
				{
				setState(112);
				main();
				}
				}
				setState(117);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(118);
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
		enterRule(_localctx, 20, RULE_condicionalElseIf);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			match(ELSE);
			setState(121);
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
		enterRule(_localctx, 22, RULE_condicionalElse);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(123);
			match(ELSE);
			setState(124);
			match(OPENKEY);
			setState(128);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 24580L) != 0)) {
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
		"\u0004\u0001\u0016\u0086\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0001\u0000\u0004\u0000\u001a\b\u0000\u000b\u0000\f\u0000\u001b\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0005"+
		"\u0002$\b\u0002\n\u0002\f\u0002\'\t\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0003\u0003-\b\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0003\u00043\b\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0003\u00049\b\u0004\u0003\u0004;\b\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0003\u0007P\b\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0005\u0007]\b\u0007\n\u0007\f\u0007`\t\u0007\u0001\b\u0001"+
		"\b\u0005\bd\b\b\n\b\f\bg\t\b\u0001\b\u0003\bj\b\b\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0005\tr\b\t\n\t\f\tu\t\t\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u007f"+
		"\b\u000b\n\u000b\f\u000b\u0082\t\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0000\u0001\u000e\f\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014"+
		"\u0016\u0000\u0004\u0002\u0000\u0013\u0013\u0015\u0015\u0002\u0000\u0003"+
		"\u0003\u0010\u0012\u0001\u0000\b\t\u0001\u0000\n\u000b\u008d\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0002\u001d\u0001\u0000\u0000\u0000\u0004%\u0001"+
		"\u0000\u0000\u0000\u0006,\u0001\u0000\u0000\u0000\b:\u0001\u0000\u0000"+
		"\u0000\n<\u0001\u0000\u0000\u0000\fA\u0001\u0000\u0000\u0000\u000eO\u0001"+
		"\u0000\u0000\u0000\u0010a\u0001\u0000\u0000\u0000\u0012k\u0001\u0000\u0000"+
		"\u0000\u0014x\u0001\u0000\u0000\u0000\u0016{\u0001\u0000\u0000\u0000\u0018"+
		"\u001a\u0003\u0002\u0001\u0000\u0019\u0018\u0001\u0000\u0000\u0000\u001a"+
		"\u001b\u0001\u0000\u0000\u0000\u001b\u0019\u0001\u0000\u0000\u0000\u001b"+
		"\u001c\u0001\u0000\u0000\u0000\u001c\u0001\u0001\u0000\u0000\u0000\u001d"+
		"\u001e\u0005\u0001\u0000\u0000\u001e\u001f\u0005\u0006\u0000\u0000\u001f"+
		" \u0003\u0004\u0002\u0000 !\u0005\u0007\u0000\u0000!\u0003\u0001\u0000"+
		"\u0000\u0000\"$\u0003\u0006\u0003\u0000#\"\u0001\u0000\u0000\u0000$\'"+
		"\u0001\u0000\u0000\u0000%#\u0001\u0000\u0000\u0000%&\u0001\u0000\u0000"+
		"\u0000&\u0005\u0001\u0000\u0000\u0000\'%\u0001\u0000\u0000\u0000(-\u0003"+
		"\b\u0004\u0000)-\u0003\n\u0005\u0000*-\u0003\u0010\b\u0000+-\u0003\f\u0006"+
		"\u0000,(\u0001\u0000\u0000\u0000,)\u0001\u0000\u0000\u0000,*\u0001\u0000"+
		"\u0000\u0000,+\u0001\u0000\u0000\u0000-\u0007\u0001\u0000\u0000\u0000"+
		"./\u0005\u0002\u0000\u0000/2\u0005\u0014\u0000\u000001\u0005\f\u0000\u0000"+
		"13\u0003\u000e\u0007\u000020\u0001\u0000\u0000\u000023\u0001\u0000\u0000"+
		"\u00003;\u0001\u0000\u0000\u000045\u0005\u0002\u0000\u000058\u0007\u0000"+
		"\u0000\u000067\u0005\f\u0000\u000079\u0003\u000e\u0007\u000086\u0001\u0000"+
		"\u0000\u000089\u0001\u0000\u0000\u00009;\u0001\u0000\u0000\u0000:.\u0001"+
		"\u0000\u0000\u0000:4\u0001\u0000\u0000\u0000;\t\u0001\u0000\u0000\u0000"+
		"<=\u0005\u0002\u0000\u0000=>\u0005\u0014\u0000\u0000>?\u0005\f\u0000\u0000"+
		"?@\u0003\u000e\u0007\u0000@\u000b\u0001\u0000\u0000\u0000AB\u0005\r\u0000"+
		"\u0000BC\u0005\u0004\u0000\u0000CD\u0003\u000e\u0007\u0000DE\u0005\u0005"+
		"\u0000\u0000E\r\u0001\u0000\u0000\u0000FG\u0006\u0007\uffff\uffff\u0000"+
		"GH\u0005\u0004\u0000\u0000HI\u0003\u000e\u0007\u0000IJ\u0005\u0005\u0000"+
		"\u0000JP\u0001\u0000\u0000\u0000KP\u0007\u0001\u0000\u0000LP\u0005\u0014"+
		"\u0000\u0000MP\u0005\u0013\u0000\u0000NP\u0005\u0003\u0000\u0000OF\u0001"+
		"\u0000\u0000\u0000OK\u0001\u0000\u0000\u0000OL\u0001\u0000\u0000\u0000"+
		"OM\u0001\u0000\u0000\u0000ON\u0001\u0000\u0000\u0000P^\u0001\u0000\u0000"+
		"\u0000QR\n\b\u0000\u0000RS\u0007\u0002\u0000\u0000S]\u0003\u000e\u0007"+
		"\tTU\n\u0007\u0000\u0000UV\u0007\u0003\u0000\u0000V]\u0003\u000e\u0007"+
		"\bWX\n\u0005\u0000\u0000XY\u0007\u0001\u0000\u0000Y]\u0003\u000e\u0007"+
		"\u0006Z[\n\u0001\u0000\u0000[]\u0003\u000e\u0007\u0002\\Q\u0001\u0000"+
		"\u0000\u0000\\T\u0001\u0000\u0000\u0000\\W\u0001\u0000\u0000\u0000\\Z"+
		"\u0001\u0000\u0000\u0000]`\u0001\u0000\u0000\u0000^\\\u0001\u0000\u0000"+
		"\u0000^_\u0001\u0000\u0000\u0000_\u000f\u0001\u0000\u0000\u0000`^\u0001"+
		"\u0000\u0000\u0000ae\u0003\u0012\t\u0000bd\u0003\u0014\n\u0000cb\u0001"+
		"\u0000\u0000\u0000dg\u0001\u0000\u0000\u0000ec\u0001\u0000\u0000\u0000"+
		"ef\u0001\u0000\u0000\u0000fi\u0001\u0000\u0000\u0000ge\u0001\u0000\u0000"+
		"\u0000hj\u0003\u0016\u000b\u0000ih\u0001\u0000\u0000\u0000ij\u0001\u0000"+
		"\u0000\u0000j\u0011\u0001\u0000\u0000\u0000kl\u0005\u000e\u0000\u0000"+
		"lm\u0005\u0004\u0000\u0000mn\u0003\u000e\u0007\u0000no\u0005\u0005\u0000"+
		"\u0000os\u0005\u0006\u0000\u0000pr\u0003\u0006\u0003\u0000qp\u0001\u0000"+
		"\u0000\u0000ru\u0001\u0000\u0000\u0000sq\u0001\u0000\u0000\u0000st\u0001"+
		"\u0000\u0000\u0000tv\u0001\u0000\u0000\u0000us\u0001\u0000\u0000\u0000"+
		"vw\u0005\u0007\u0000\u0000w\u0013\u0001\u0000\u0000\u0000xy\u0005\u000f"+
		"\u0000\u0000yz\u0003\u0012\t\u0000z\u0015\u0001\u0000\u0000\u0000{|\u0005"+
		"\u000f\u0000\u0000|\u0080\u0005\u0006\u0000\u0000}\u007f\u0003\u0006\u0003"+
		"\u0000~}\u0001\u0000\u0000\u0000\u007f\u0082\u0001\u0000\u0000\u0000\u0080"+
		"~\u0001\u0000\u0000\u0000\u0080\u0081\u0001\u0000\u0000\u0000\u0081\u0083"+
		"\u0001\u0000\u0000\u0000\u0082\u0080\u0001\u0000\u0000\u0000\u0083\u0084"+
		"\u0005\u0007\u0000\u0000\u0084\u0017\u0001\u0000\u0000\u0000\r\u001b%"+
		",28:O\\^eis\u0080";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}