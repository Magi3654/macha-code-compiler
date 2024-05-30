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
		NANU=8, DO=9, PPAEDA=10, EQUALS=11, PORCENT=12, SUMARIZER=13, COMA=14, 
		PRINT=15, IF=16, ELSE=17, FOR=18, WHILE=19, LOGIC=20, AND=21, OR=22, MATH=23, 
		BOOLEAN=24, STRING=25, CHAR=26, SUJJA=27, GEULSSI=28, CHINCHA=29, GONG=30;
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
			null, "'chichak'", null, "'('", "')'", "'{'", "'}'", "'*'", "'/'", "'+'", 
			"'-'", "'='", "'%'", null, "','", "'inswae'", "'myeon'", "'namochi'", 
			"'wihan'", "'geuttae'", null, "'&&'", "'||'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "CHICHAK", "PR", "PARENTH_A", "PARENTH_B", "OPENKEY", "CLOSEKEY", 
			"GOPSSEM", "NANU", "DO", "PPAEDA", "EQUALS", "PORCENT", "SUMARIZER", 
			"COMA", "PRINT", "IF", "ELSE", "FOR", "WHILE", "LOGIC", "AND", "OR", 
			"MATH", "BOOLEAN", "STRING", "CHAR", "SUJJA", "GEULSSI", "CHINCHA", "GONG"
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
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 269320196L) != 0)) {
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
		public ForContext for_() {
			return getRuleContext(ForContext.class,0);
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
			setState(53);
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
				for_();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(51);
				impresion();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(52);
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
			setState(67);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				_localctx = new ValidAssignContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(55);
				match(PR);
				setState(56);
				match(GEULSSI);
				setState(59);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQUALS) {
					{
					setState(57);
					match(EQUALS);
					setState(58);
					expr(0);
					}
				}

				}
				break;
			case 2:
				_localctx = new InvalidAssignContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(61);
				match(PR);
				setState(62);
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
				setState(65);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==EQUALS) {
					{
					setState(63);
					match(EQUALS);
					setState(64);
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
		public AsignacionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asignacion; }
	 
		public AsignacionContext() { }
		public void copyFrom(AsignacionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SumarizerAssignContext extends AsignacionContext {
		public TerminalNode GEULSSI() { return getToken(CompiladorParser.GEULSSI, 0); }
		public TerminalNode SUMARIZER() { return getToken(CompiladorParser.SUMARIZER, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public SumarizerAssignContext(AsignacionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SimpleAssignContext extends AsignacionContext {
		public TerminalNode GEULSSI() { return getToken(CompiladorParser.GEULSSI, 0); }
		public TerminalNode EQUALS() { return getToken(CompiladorParser.EQUALS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public SimpleAssignContext(AsignacionContext ctx) { copyFrom(ctx); }
	}

	public final AsignacionContext asignacion() throws RecognitionException {
		AsignacionContext _localctx = new AsignacionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_asignacion);
		try {
			setState(75);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				_localctx = new SimpleAssignContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(69);
				match(GEULSSI);
				setState(70);
				match(EQUALS);
				setState(71);
				expr(0);
				}
				break;
			case 2:
				_localctx = new SumarizerAssignContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(72);
				match(GEULSSI);
				setState(73);
				match(SUMARIZER);
				setState(74);
				expr(0);
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
			setState(77);
			match(PRINT);
			setState(78);
			match(PARENTH_A);
			setState(79);
			expr(0);
			setState(80);
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
	public static class CompandoContext extends ExprContext {
		public Token simbolo;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode AND() { return getToken(CompiladorParser.AND, 0); }
		public TerminalNode OR() { return getToken(CompiladorParser.OR, 0); }
		public CompandoContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SnumberContext extends ExprContext {
		public Token operation;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode DO() { return getToken(CompiladorParser.DO, 0); }
		public TerminalNode PPAEDA() { return getToken(CompiladorParser.PPAEDA, 0); }
		public SnumberContext(ExprContext ctx) { copyFrom(ctx); }
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
			setState(93);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PARENTH_A:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(83);
				match(PARENTH_A);
				setState(84);
				expr(0);
				setState(85);
				match(PARENTH_B);
				}
				break;
			case DO:
			case PPAEDA:
				{
				_localctx = new SnumberContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(87);
				((SnumberContext)_localctx).operation = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==DO || _la==PPAEDA) ) {
					((SnumberContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(88);
				expr(7);
				}
				break;
			case LOGIC:
			case MATH:
			case BOOLEAN:
				{
				_localctx = new CondicionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(89);
				((CondicionContext)_localctx).simbolo = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 26214400L) != 0)) ) {
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
				setState(90);
				match(GEULSSI);
				}
				break;
			case SUJJA:
				{
				_localctx = new SujjaContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(91);
				match(SUJJA);
				}
				break;
			case STRING:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(92);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(109);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(107);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
					case 1:
						{
						_localctx = new MuldivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(95);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(96);
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
						setState(97);
						expr(10);
						}
						break;
					case 2:
						{
						_localctx = new SumresContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(98);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(99);
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
						setState(100);
						expr(9);
						}
						break;
					case 3:
						{
						_localctx = new CondicionContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(101);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(102);
						((CondicionContext)_localctx).simbolo = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 26214400L) != 0)) ) {
							((CondicionContext)_localctx).simbolo = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(103);
						expr(6);
						}
						break;
					case 4:
						{
						_localctx = new CompandoContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(104);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(105);
						((CompandoContext)_localctx).simbolo = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==AND || _la==OR) ) {
							((CompandoContext)_localctx).simbolo = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(106);
						expr(5);
						}
						break;
					}
					} 
				}
				setState(111);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
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
		public TerminalNode GONG() { return getToken(CompiladorParser.GONG, 0); }
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
			setState(112);
			match(GEULSSI);
			setState(114);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==GONG) {
				{
				setState(113);
				match(GONG);
				}
			}

			setState(120);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DO:
				{
				setState(116);
				match(DO);
				setState(117);
				match(DO);
				}
				break;
			case PPAEDA:
				{
				setState(118);
				match(PPAEDA);
				setState(119);
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
			setState(122);
			condicional();
			setState(126);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(123);
					condicionalElseIf();
					}
					} 
				}
				setState(128);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			}
			setState(130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(129);
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
			setState(132);
			match(IF);
			setState(133);
			match(PARENTH_A);
			setState(134);
			expr(0);
			setState(135);
			match(PARENTH_B);
			setState(136);
			match(OPENKEY);
			setState(140);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 269320196L) != 0)) {
				{
				{
				setState(137);
				main();
				}
				}
				setState(142);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(143);
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
			setState(145);
			match(ELSE);
			setState(146);
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
			setState(148);
			match(ELSE);
			setState(149);
			match(OPENKEY);
			setState(153);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 269320196L) != 0)) {
				{
				{
				setState(150);
				main();
				}
				}
				setState(155);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(156);
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
			setState(158);
			match(WHILE);
			setState(159);
			match(PARENTH_A);
			setState(160);
			expr(0);
			setState(161);
			match(PARENTH_B);
			setState(162);
			match(OPENKEY);
			setState(166);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 269320196L) != 0)) {
				{
				{
				setState(163);
				main();
				}
				}
				setState(168);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(169);
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
		public TerminalNode FOR() { return getToken(CompiladorParser.FOR, 0); }
		public TerminalNode PARENTH_A() { return getToken(CompiladorParser.PARENTH_A, 0); }
		public DeclaracionContext declaracion() {
			return getRuleContext(DeclaracionContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public IncrementoContext incremento() {
			return getRuleContext(IncrementoContext.class,0);
		}
		public TerminalNode PARENTH_B() { return getToken(CompiladorParser.PARENTH_B, 0); }
		public TerminalNode OPENKEY() { return getToken(CompiladorParser.OPENKEY, 0); }
		public MainContext main() {
			return getRuleContext(MainContext.class,0);
		}
		public TerminalNode CLOSEKEY() { return getToken(CompiladorParser.CLOSEKEY, 0); }
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
			setState(171);
			match(FOR);
			setState(172);
			match(PARENTH_A);
			setState(173);
			declaracion();
			setState(174);
			expr(0);
			setState(175);
			incremento();
			setState(176);
			match(PARENTH_B);
			setState(177);
			match(OPENKEY);
			setState(178);
			main();
			setState(179);
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
			return precpred(_ctx, 9);
		case 1:
			return precpred(_ctx, 8);
		case 2:
			return precpred(_ctx, 5);
		case 3:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u001e\u00b6\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0001\u0000\u0004"+
		"\u0000 \b\u0000\u000b\u0000\f\u0000!\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0005\u0002*\b\u0002\n\u0002\f\u0002"+
		"-\t\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0003\u00036\b\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0003\u0004<\b\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0003\u0004B\b\u0004\u0003\u0004D\b\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003"+
		"\u0005L\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003"+
		"\u0007^\b\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0005\u0007l\b\u0007\n\u0007\f\u0007o\t\u0007\u0001"+
		"\b\u0001\b\u0003\bs\b\b\u0001\b\u0001\b\u0001\b\u0001\b\u0003\by\b\b\u0001"+
		"\t\u0001\t\u0005\t}\b\t\n\t\f\t\u0080\t\t\u0001\t\u0003\t\u0083\b\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0005\n\u008b\b\n\n\n\f\n\u008e"+
		"\t\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001"+
		"\f\u0001\f\u0005\f\u0098\b\f\n\f\f\f\u009b\t\f\u0001\f\u0001\f\u0001\r"+
		"\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005\r\u00a5\b\r\n\r\f\r\u00a8"+
		"\t\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0000\u0001\u000e\u000f\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010"+
		"\u0012\u0014\u0016\u0018\u001a\u001c\u0000\u0005\u0002\u0000\u001b\u001b"+
		"\u001d\u001d\u0001\u0000\t\n\u0002\u0000\u0014\u0014\u0017\u0018\u0002"+
		"\u0000\u0007\b\f\f\u0001\u0000\u0015\u0016\u00c2\u0000\u001f\u0001\u0000"+
		"\u0000\u0000\u0002#\u0001\u0000\u0000\u0000\u0004+\u0001\u0000\u0000\u0000"+
		"\u00065\u0001\u0000\u0000\u0000\bC\u0001\u0000\u0000\u0000\nK\u0001\u0000"+
		"\u0000\u0000\fM\u0001\u0000\u0000\u0000\u000e]\u0001\u0000\u0000\u0000"+
		"\u0010p\u0001\u0000\u0000\u0000\u0012z\u0001\u0000\u0000\u0000\u0014\u0084"+
		"\u0001\u0000\u0000\u0000\u0016\u0091\u0001\u0000\u0000\u0000\u0018\u0094"+
		"\u0001\u0000\u0000\u0000\u001a\u009e\u0001\u0000\u0000\u0000\u001c\u00ab"+
		"\u0001\u0000\u0000\u0000\u001e \u0003\u0002\u0001\u0000\u001f\u001e\u0001"+
		"\u0000\u0000\u0000 !\u0001\u0000\u0000\u0000!\u001f\u0001\u0000\u0000"+
		"\u0000!\"\u0001\u0000\u0000\u0000\"\u0001\u0001\u0000\u0000\u0000#$\u0005"+
		"\u0001\u0000\u0000$%\u0005\u0005\u0000\u0000%&\u0003\u0004\u0002\u0000"+
		"&\'\u0005\u0006\u0000\u0000\'\u0003\u0001\u0000\u0000\u0000(*\u0003\u0006"+
		"\u0003\u0000)(\u0001\u0000\u0000\u0000*-\u0001\u0000\u0000\u0000+)\u0001"+
		"\u0000\u0000\u0000+,\u0001\u0000\u0000\u0000,\u0005\u0001\u0000\u0000"+
		"\u0000-+\u0001\u0000\u0000\u0000.6\u0003\b\u0004\u0000/6\u0003\n\u0005"+
		"\u000006\u0003\u0012\t\u000016\u0003\u001a\r\u000026\u0003\u001c\u000e"+
		"\u000036\u0003\f\u0006\u000046\u0003\u0010\b\u00005.\u0001\u0000\u0000"+
		"\u00005/\u0001\u0000\u0000\u000050\u0001\u0000\u0000\u000051\u0001\u0000"+
		"\u0000\u000052\u0001\u0000\u0000\u000053\u0001\u0000\u0000\u000054\u0001"+
		"\u0000\u0000\u00006\u0007\u0001\u0000\u0000\u000078\u0005\u0002\u0000"+
		"\u00008;\u0005\u001c\u0000\u00009:\u0005\u000b\u0000\u0000:<\u0003\u000e"+
		"\u0007\u0000;9\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000<D\u0001"+
		"\u0000\u0000\u0000=>\u0005\u0002\u0000\u0000>A\u0007\u0000\u0000\u0000"+
		"?@\u0005\u000b\u0000\u0000@B\u0003\u000e\u0007\u0000A?\u0001\u0000\u0000"+
		"\u0000AB\u0001\u0000\u0000\u0000BD\u0001\u0000\u0000\u0000C7\u0001\u0000"+
		"\u0000\u0000C=\u0001\u0000\u0000\u0000D\t\u0001\u0000\u0000\u0000EF\u0005"+
		"\u001c\u0000\u0000FG\u0005\u000b\u0000\u0000GL\u0003\u000e\u0007\u0000"+
		"HI\u0005\u001c\u0000\u0000IJ\u0005\r\u0000\u0000JL\u0003\u000e\u0007\u0000"+
		"KE\u0001\u0000\u0000\u0000KH\u0001\u0000\u0000\u0000L\u000b\u0001\u0000"+
		"\u0000\u0000MN\u0005\u000f\u0000\u0000NO\u0005\u0003\u0000\u0000OP\u0003"+
		"\u000e\u0007\u0000PQ\u0005\u0004\u0000\u0000Q\r\u0001\u0000\u0000\u0000"+
		"RS\u0006\u0007\uffff\uffff\u0000ST\u0005\u0003\u0000\u0000TU\u0003\u000e"+
		"\u0007\u0000UV\u0005\u0004\u0000\u0000V^\u0001\u0000\u0000\u0000WX\u0007"+
		"\u0001\u0000\u0000X^\u0003\u000e\u0007\u0007Y^\u0007\u0002\u0000\u0000"+
		"Z^\u0005\u001c\u0000\u0000[^\u0005\u001b\u0000\u0000\\^\u0005\u0019\u0000"+
		"\u0000]R\u0001\u0000\u0000\u0000]W\u0001\u0000\u0000\u0000]Y\u0001\u0000"+
		"\u0000\u0000]Z\u0001\u0000\u0000\u0000][\u0001\u0000\u0000\u0000]\\\u0001"+
		"\u0000\u0000\u0000^m\u0001\u0000\u0000\u0000_`\n\t\u0000\u0000`a\u0007"+
		"\u0003\u0000\u0000al\u0003\u000e\u0007\nbc\n\b\u0000\u0000cd\u0007\u0001"+
		"\u0000\u0000dl\u0003\u000e\u0007\tef\n\u0005\u0000\u0000fg\u0007\u0002"+
		"\u0000\u0000gl\u0003\u000e\u0007\u0006hi\n\u0004\u0000\u0000ij\u0007\u0004"+
		"\u0000\u0000jl\u0003\u000e\u0007\u0005k_\u0001\u0000\u0000\u0000kb\u0001"+
		"\u0000\u0000\u0000ke\u0001\u0000\u0000\u0000kh\u0001\u0000\u0000\u0000"+
		"lo\u0001\u0000\u0000\u0000mk\u0001\u0000\u0000\u0000mn\u0001\u0000\u0000"+
		"\u0000n\u000f\u0001\u0000\u0000\u0000om\u0001\u0000\u0000\u0000pr\u0005"+
		"\u001c\u0000\u0000qs\u0005\u001e\u0000\u0000rq\u0001\u0000\u0000\u0000"+
		"rs\u0001\u0000\u0000\u0000sx\u0001\u0000\u0000\u0000tu\u0005\t\u0000\u0000"+
		"uy\u0005\t\u0000\u0000vw\u0005\n\u0000\u0000wy\u0005\n\u0000\u0000xt\u0001"+
		"\u0000\u0000\u0000xv\u0001\u0000\u0000\u0000y\u0011\u0001\u0000\u0000"+
		"\u0000z~\u0003\u0014\n\u0000{}\u0003\u0016\u000b\u0000|{\u0001\u0000\u0000"+
		"\u0000}\u0080\u0001\u0000\u0000\u0000~|\u0001\u0000\u0000\u0000~\u007f"+
		"\u0001\u0000\u0000\u0000\u007f\u0082\u0001\u0000\u0000\u0000\u0080~\u0001"+
		"\u0000\u0000\u0000\u0081\u0083\u0003\u0018\f\u0000\u0082\u0081\u0001\u0000"+
		"\u0000\u0000\u0082\u0083\u0001\u0000\u0000\u0000\u0083\u0013\u0001\u0000"+
		"\u0000\u0000\u0084\u0085\u0005\u0010\u0000\u0000\u0085\u0086\u0005\u0003"+
		"\u0000\u0000\u0086\u0087\u0003\u000e\u0007\u0000\u0087\u0088\u0005\u0004"+
		"\u0000\u0000\u0088\u008c\u0005\u0005\u0000\u0000\u0089\u008b\u0003\u0006"+
		"\u0003\u0000\u008a\u0089\u0001\u0000\u0000\u0000\u008b\u008e\u0001\u0000"+
		"\u0000\u0000\u008c\u008a\u0001\u0000\u0000\u0000\u008c\u008d\u0001\u0000"+
		"\u0000\u0000\u008d\u008f\u0001\u0000\u0000\u0000\u008e\u008c\u0001\u0000"+
		"\u0000\u0000\u008f\u0090\u0005\u0006\u0000\u0000\u0090\u0015\u0001\u0000"+
		"\u0000\u0000\u0091\u0092\u0005\u0011\u0000\u0000\u0092\u0093\u0003\u0014"+
		"\n\u0000\u0093\u0017\u0001\u0000\u0000\u0000\u0094\u0095\u0005\u0011\u0000"+
		"\u0000\u0095\u0099\u0005\u0005\u0000\u0000\u0096\u0098\u0003\u0006\u0003"+
		"\u0000\u0097\u0096\u0001\u0000\u0000\u0000\u0098\u009b\u0001\u0000\u0000"+
		"\u0000\u0099\u0097\u0001\u0000\u0000\u0000\u0099\u009a\u0001\u0000\u0000"+
		"\u0000\u009a\u009c\u0001\u0000\u0000\u0000\u009b\u0099\u0001\u0000\u0000"+
		"\u0000\u009c\u009d\u0005\u0006\u0000\u0000\u009d\u0019\u0001\u0000\u0000"+
		"\u0000\u009e\u009f\u0005\u0013\u0000\u0000\u009f\u00a0\u0005\u0003\u0000"+
		"\u0000\u00a0\u00a1\u0003\u000e\u0007\u0000\u00a1\u00a2\u0005\u0004\u0000"+
		"\u0000\u00a2\u00a6\u0005\u0005\u0000\u0000\u00a3\u00a5\u0003\u0006\u0003"+
		"\u0000\u00a4\u00a3\u0001\u0000\u0000\u0000\u00a5\u00a8\u0001\u0000\u0000"+
		"\u0000\u00a6\u00a4\u0001\u0000\u0000\u0000\u00a6\u00a7\u0001\u0000\u0000"+
		"\u0000\u00a7\u00a9\u0001\u0000\u0000\u0000\u00a8\u00a6\u0001\u0000\u0000"+
		"\u0000\u00a9\u00aa\u0005\u0006\u0000\u0000\u00aa\u001b\u0001\u0000\u0000"+
		"\u0000\u00ab\u00ac\u0005\u0012\u0000\u0000\u00ac\u00ad\u0005\u0003\u0000"+
		"\u0000\u00ad\u00ae\u0003\b\u0004\u0000\u00ae\u00af\u0003\u000e\u0007\u0000"+
		"\u00af\u00b0\u0003\u0010\b\u0000\u00b0\u00b1\u0005\u0004\u0000\u0000\u00b1"+
		"\u00b2\u0005\u0005\u0000\u0000\u00b2\u00b3\u0003\u0006\u0003\u0000\u00b3"+
		"\u00b4\u0005\u0006\u0000\u0000\u00b4\u001d\u0001\u0000\u0000\u0000\u0011"+
		"!+5;ACK]kmrx~\u0082\u008c\u0099\u00a6";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}