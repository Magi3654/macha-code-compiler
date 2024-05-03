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
		RULE_asignacion = 5, RULE_impresion = 6, RULE_expr = 7, RULE_condicionalBucle = 8, 
		RULE_condicional = 9, RULE_condicionalElseIf = 10, RULE_condicionalElse = 11, 
		RULE_while = 12;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "start", "content", "main", "declaracion", "asignacion", "impresion", 
			"expr", "condicionalBucle", "condicional", "condicionalElseIf", "condicionalElse", 
			"while"
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
			setState(27); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(26);
				start();
				}
				}
				setState(29); 
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
			setState(31);
			match(MAIN);
			setState(32);
			match(PARENTH_A);
			setState(33);
			match(PARENTH_B);
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
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68239362L) != 0)) {
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
		public TerminalNode SEMICOLON() { return getToken(MachaCParser.SEMICOLON, 0); }
		public AsignacionContext asignacion() {
			return getRuleContext(AsignacionContext.class,0);
		}
		public CondicionalBucleContext condicionalBucle() {
			return getRuleContext(CondicionalBucleContext.class,0);
		}
		public ImpresionContext impresion() {
			return getRuleContext(ImpresionContext.class,0);
		}
		public WhileContext while_() {
			return getRuleContext(WhileContext.class,0);
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
			setState(55);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PR:
				enterOuterAlt(_localctx, 1);
				{
				setState(44);
				declaracion();
				setState(45);
				match(SEMICOLON);
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(47);
				asignacion();
				setState(48);
				match(SEMICOLON);
				}
				break;
			case IF:
				enterOuterAlt(_localctx, 3);
				{
				setState(50);
				condicionalBucle();
				}
				break;
			case PRINT:
				enterOuterAlt(_localctx, 4);
				{
				setState(51);
				impresion();
				setState(52);
				match(SEMICOLON);
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 5);
				{
				setState(54);
				while_();
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
			setState(57);
			match(PR);
			setState(58);
			match(ID);
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
			setState(63);
			match(ID);
			setState(64);
			match(EQUALS);
			setState(65);
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
			setState(67);
			match(PRINT);
			setState(68);
			match(PARENTH_A);
			setState(69);
			expr(0);
			setState(70);
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
			setState(81);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PARENTH_A:
				{
				setState(73);
				match(PARENTH_A);
				setState(74);
				expr(0);
				setState(75);
				match(PARENTH_B);
				}
				break;
			case BOOLEAN:
				{
				setState(77);
				match(BOOLEAN);
				}
				break;
			case ID:
				{
				setState(78);
				match(ID);
				}
				break;
			case INT:
				{
				setState(79);
				match(INT);
				}
				break;
			case STRING:
				{
				setState(80);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(94);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(92);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(83);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(84);
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
						setState(85);
						expr(8);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(86);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(87);
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
						setState(88);
						expr(7);
						}
						break;
					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(89);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(90);
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
						setState(91);
						expr(5);
						}
						break;
					}
					} 
				}
				setState(96);
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
			setState(97);
			condicional();
			setState(101);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
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
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
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
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 68239362L) != 0)) {
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
			setState(123);
			match(ELSE);
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
		enterRule(_localctx, 24, RULE_while);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			match(WHILE);
			setState(134);
			match(PARENTH_A);
			setState(135);
			expr(0);
			setState(136);
			match(PARENTH_B);
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
		"\u0004\u0001\u001c\u0093\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0001\u0000\u0004\u0000\u001c\b\u0000\u000b\u0000\f\u0000"+
		"\u001d\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0005\u0002(\b\u0002\n\u0002\f\u0002+\t"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003"+
		"\u00038\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003"+
		"\u0004>\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0003\u0007R\b\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0005\u0007]\b\u0007\n\u0007\f\u0007`\t\u0007\u0001\b\u0001\b\u0005"+
		"\bd\b\b\n\b\f\bg\t\b\u0001\b\u0003\bj\b\b\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0005\tr\b\t\n\t\f\tu\t\t\u0001\t\u0001\t\u0001\n\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u007f\b\u000b"+
		"\n\u000b\f\u000b\u0082\t\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0005\f\u008c\b\f\n\f\f\f\u008f\t\f\u0001"+
		"\f\u0001\f\u0001\f\u0000\u0001\u000e\r\u0000\u0002\u0004\u0006\b\n\f\u000e"+
		"\u0010\u0012\u0014\u0016\u0018\u0000\u0003\u0002\u0000\u0007\b\r\r\u0001"+
		"\u0000\t\n\u0002\u0000\u0011\u0011\u0013\u0013\u0098\u0000\u001b\u0001"+
		"\u0000\u0000\u0000\u0002\u001f\u0001\u0000\u0000\u0000\u0004)\u0001\u0000"+
		"\u0000\u0000\u00067\u0001\u0000\u0000\u0000\b9\u0001\u0000\u0000\u0000"+
		"\n?\u0001\u0000\u0000\u0000\fC\u0001\u0000\u0000\u0000\u000eQ\u0001\u0000"+
		"\u0000\u0000\u0010a\u0001\u0000\u0000\u0000\u0012k\u0001\u0000\u0000\u0000"+
		"\u0014x\u0001\u0000\u0000\u0000\u0016{\u0001\u0000\u0000\u0000\u0018\u0085"+
		"\u0001\u0000\u0000\u0000\u001a\u001c\u0003\u0002\u0001\u0000\u001b\u001a"+
		"\u0001\u0000\u0000\u0000\u001c\u001d\u0001\u0000\u0000\u0000\u001d\u001b"+
		"\u0001\u0000\u0000\u0000\u001d\u001e\u0001\u0000\u0000\u0000\u001e\u0001"+
		"\u0001\u0000\u0000\u0000\u001f \u0005\u0015\u0000\u0000 !\u0005\u0002"+
		"\u0000\u0000!\"\u0005\u0003\u0000\u0000\"#\u0005\u0004\u0000\u0000#$\u0003"+
		"\u0004\u0002\u0000$%\u0005\u0005\u0000\u0000%\u0003\u0001\u0000\u0000"+
		"\u0000&(\u0003\u0006\u0003\u0000\'&\u0001\u0000\u0000\u0000(+\u0001\u0000"+
		"\u0000\u0000)\'\u0001\u0000\u0000\u0000)*\u0001\u0000\u0000\u0000*\u0005"+
		"\u0001\u0000\u0000\u0000+)\u0001\u0000\u0000\u0000,-\u0003\b\u0004\u0000"+
		"-.\u0005\f\u0000\u0000.8\u0001\u0000\u0000\u0000/0\u0003\n\u0005\u0000"+
		"01\u0005\f\u0000\u000018\u0001\u0000\u0000\u000028\u0003\u0010\b\u0000"+
		"34\u0003\f\u0006\u000045\u0005\f\u0000\u000058\u0001\u0000\u0000\u0000"+
		"68\u0003\u0018\f\u00007,\u0001\u0000\u0000\u00007/\u0001\u0000\u0000\u0000"+
		"72\u0001\u0000\u0000\u000073\u0001\u0000\u0000\u000076\u0001\u0000\u0000"+
		"\u00008\u0007\u0001\u0000\u0000\u00009:\u0005\u0001\u0000\u0000:=\u0005"+
		"\u001a\u0000\u0000;<\u0005\u0006\u0000\u0000<>\u0003\u000e\u0007\u0000"+
		"=;\u0001\u0000\u0000\u0000=>\u0001\u0000\u0000\u0000>\t\u0001\u0000\u0000"+
		"\u0000?@\u0005\u001a\u0000\u0000@A\u0005\u0006\u0000\u0000AB\u0003\u000e"+
		"\u0007\u0000B\u000b\u0001\u0000\u0000\u0000CD\u0005\u0014\u0000\u0000"+
		"DE\u0005\u0002\u0000\u0000EF\u0003\u000e\u0007\u0000FG\u0005\u0003\u0000"+
		"\u0000G\r\u0001\u0000\u0000\u0000HI\u0006\u0007\uffff\uffff\u0000IJ\u0005"+
		"\u0002\u0000\u0000JK\u0003\u000e\u0007\u0000KL\u0005\u0003\u0000\u0000"+
		"LR\u0001\u0000\u0000\u0000MR\u0005\u0012\u0000\u0000NR\u0005\u001a\u0000"+
		"\u0000OR\u0005\u0017\u0000\u0000PR\u0005\u0019\u0000\u0000QH\u0001\u0000"+
		"\u0000\u0000QM\u0001\u0000\u0000\u0000QN\u0001\u0000\u0000\u0000QO\u0001"+
		"\u0000\u0000\u0000QP\u0001\u0000\u0000\u0000R^\u0001\u0000\u0000\u0000"+
		"ST\n\u0007\u0000\u0000TU\u0007\u0000\u0000\u0000U]\u0003\u000e\u0007\b"+
		"VW\n\u0006\u0000\u0000WX\u0007\u0001\u0000\u0000X]\u0003\u000e\u0007\u0007"+
		"YZ\n\u0004\u0000\u0000Z[\u0007\u0002\u0000\u0000[]\u0003\u000e\u0007\u0005"+
		"\\S\u0001\u0000\u0000\u0000\\V\u0001\u0000\u0000\u0000\\Y\u0001\u0000"+
		"\u0000\u0000]`\u0001\u0000\u0000\u0000^\\\u0001\u0000\u0000\u0000^_\u0001"+
		"\u0000\u0000\u0000_\u000f\u0001\u0000\u0000\u0000`^\u0001\u0000\u0000"+
		"\u0000ae\u0003\u0012\t\u0000bd\u0003\u0014\n\u0000cb\u0001\u0000\u0000"+
		"\u0000dg\u0001\u0000\u0000\u0000ec\u0001\u0000\u0000\u0000ef\u0001\u0000"+
		"\u0000\u0000fi\u0001\u0000\u0000\u0000ge\u0001\u0000\u0000\u0000hj\u0003"+
		"\u0016\u000b\u0000ih\u0001\u0000\u0000\u0000ij\u0001\u0000\u0000\u0000"+
		"j\u0011\u0001\u0000\u0000\u0000kl\u0005\u000e\u0000\u0000lm\u0005\u0002"+
		"\u0000\u0000mn\u0003\u000e\u0007\u0000no\u0005\u0003\u0000\u0000os\u0005"+
		"\u0004\u0000\u0000pr\u0003\u0006\u0003\u0000qp\u0001\u0000\u0000\u0000"+
		"ru\u0001\u0000\u0000\u0000sq\u0001\u0000\u0000\u0000st\u0001\u0000\u0000"+
		"\u0000tv\u0001\u0000\u0000\u0000us\u0001\u0000\u0000\u0000vw\u0005\u0005"+
		"\u0000\u0000w\u0013\u0001\u0000\u0000\u0000xy\u0005\u000f\u0000\u0000"+
		"yz\u0003\u0012\t\u0000z\u0015\u0001\u0000\u0000\u0000{|\u0005\u000f\u0000"+
		"\u0000|\u0080\u0005\u0004\u0000\u0000}\u007f\u0003\u0006\u0003\u0000~"+
		"}\u0001\u0000\u0000\u0000\u007f\u0082\u0001\u0000\u0000\u0000\u0080~\u0001"+
		"\u0000\u0000\u0000\u0080\u0081\u0001\u0000\u0000\u0000\u0081\u0083\u0001"+
		"\u0000\u0000\u0000\u0082\u0080\u0001\u0000\u0000\u0000\u0083\u0084\u0005"+
		"\u0005\u0000\u0000\u0084\u0017\u0001\u0000\u0000\u0000\u0085\u0086\u0005"+
		"\u0010\u0000\u0000\u0086\u0087\u0005\u0002\u0000\u0000\u0087\u0088\u0003"+
		"\u000e\u0007\u0000\u0088\u0089\u0005\u0003\u0000\u0000\u0089\u008d\u0005"+
		"\u0004\u0000\u0000\u008a\u008c\u0003\u0006\u0003\u0000\u008b\u008a\u0001"+
		"\u0000\u0000\u0000\u008c\u008f\u0001\u0000\u0000\u0000\u008d\u008b\u0001"+
		"\u0000\u0000\u0000\u008d\u008e\u0001\u0000\u0000\u0000\u008e\u0090\u0001"+
		"\u0000\u0000\u0000\u008f\u008d\u0001\u0000\u0000\u0000\u0090\u0091\u0005"+
		"\u0005\u0000\u0000\u0091\u0019\u0001\u0000\u0000\u0000\f\u001d)7=Q\\^"+
		"eis\u0080\u008d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}