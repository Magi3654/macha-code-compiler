// Generated from /home/mrsmin/Escritorio/automatas/automatas 2/macha-code-compiler/grammar/translate/MachaC.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class MachaCLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PARENTH_A=1, PARENTH_B=2, OPENKEY=3, CLOSEKEY=4, EQUALS=5, MULTI=6, DIV=7, 
		SUM=8, MIN=9, DOUBLE_QUOTE=10, SEMICOLON=11, IF=12, ELSE=13, LOGIC=14, 
		MATH=15, PRINT=16, MAIN=17, CHAR=18, INT=19, FLOAT=20, STRING=21, ID=22, 
		INVID=23, WS=24;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PARENTH_A", "PARENTH_B", "OPENKEY", "CLOSEKEY", "EQUALS", "MULTI", "DIV", 
			"SUM", "MIN", "DOUBLE_QUOTE", "SEMICOLON", "IF", "ELSE", "LOGIC", "MATH", 
			"PRINT", "MAIN", "CHAR", "INT", "FLOAT", "STRING", "ID", "INVID", "WS"
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


	public MachaCLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MachaC.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0018\u00ab\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0003\r_\b\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0003\u000ef\b\u000e\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0012\u0004\u0012\u0080\b\u0012\u000b\u0012"+
		"\f\u0012\u0081\u0001\u0013\u0004\u0013\u0085\b\u0013\u000b\u0013\f\u0013"+
		"\u0086\u0001\u0013\u0001\u0013\u0004\u0013\u008b\b\u0013\u000b\u0013\f"+
		"\u0013\u008c\u0001\u0014\u0001\u0014\u0005\u0014\u0091\b\u0014\n\u0014"+
		"\f\u0014\u0094\t\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015"+
		"\u0004\u0015\u009a\b\u0015\u000b\u0015\f\u0015\u009b\u0003\u0015\u009e"+
		"\b\u0015\u0001\u0016\u0004\u0016\u00a1\b\u0016\u000b\u0016\f\u0016\u00a2"+
		"\u0001\u0017\u0004\u0017\u00a6\b\u0017\u000b\u0017\f\u0017\u00a7\u0001"+
		"\u0017\u0001\u0017\u0001\u0092\u0000\u0018\u0001\u0001\u0003\u0002\u0005"+
		"\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n"+
		"\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011"+
		"#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017/\u0018\u0001\u0000\u0007\u0002"+
		"\u0000<<>>\u0002\u0000AZaz\u0001\u000009\u0001\u0000..\u0004\u000009A"+
		"Z__az\u0005\u0000++--09AZaz\u0003\u0000\t\n\r\r  \u00b8\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000"+
		"\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'"+
		"\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000"+
		"\u0000\u0000\u0000-\u0001\u0000\u0000\u0000\u0000/\u0001\u0000\u0000\u0000"+
		"\u00011\u0001\u0000\u0000\u0000\u00033\u0001\u0000\u0000\u0000\u00055"+
		"\u0001\u0000\u0000\u0000\u00077\u0001\u0000\u0000\u0000\t9\u0001\u0000"+
		"\u0000\u0000\u000b;\u0001\u0000\u0000\u0000\r=\u0001\u0000\u0000\u0000"+
		"\u000f?\u0001\u0000\u0000\u0000\u0011A\u0001\u0000\u0000\u0000\u0013C"+
		"\u0001\u0000\u0000\u0000\u0015E\u0001\u0000\u0000\u0000\u0017G\u0001\u0000"+
		"\u0000\u0000\u0019J\u0001\u0000\u0000\u0000\u001b^\u0001\u0000\u0000\u0000"+
		"\u001de\u0001\u0000\u0000\u0000\u001fg\u0001\u0000\u0000\u0000!n\u0001"+
		"\u0000\u0000\u0000#z\u0001\u0000\u0000\u0000%\u007f\u0001\u0000\u0000"+
		"\u0000\'\u0084\u0001\u0000\u0000\u0000)\u008e\u0001\u0000\u0000\u0000"+
		"+\u0097\u0001\u0000\u0000\u0000-\u00a0\u0001\u0000\u0000\u0000/\u00a5"+
		"\u0001\u0000\u0000\u000012\u0005(\u0000\u00002\u0002\u0001\u0000\u0000"+
		"\u000034\u0005)\u0000\u00004\u0004\u0001\u0000\u0000\u000056\u0005{\u0000"+
		"\u00006\u0006\u0001\u0000\u0000\u000078\u0005}\u0000\u00008\b\u0001\u0000"+
		"\u0000\u00009:\u0005=\u0000\u0000:\n\u0001\u0000\u0000\u0000;<\u0005*"+
		"\u0000\u0000<\f\u0001\u0000\u0000\u0000=>\u0005/\u0000\u0000>\u000e\u0001"+
		"\u0000\u0000\u0000?@\u0005+\u0000\u0000@\u0010\u0001\u0000\u0000\u0000"+
		"AB\u0005-\u0000\u0000B\u0012\u0001\u0000\u0000\u0000CD\u0005\"\u0000\u0000"+
		"D\u0014\u0001\u0000\u0000\u0000EF\u0005;\u0000\u0000F\u0016\u0001\u0000"+
		"\u0000\u0000GH\u0005i\u0000\u0000HI\u0005f\u0000\u0000I\u0018\u0001\u0000"+
		"\u0000\u0000JK\u0005e\u0000\u0000KL\u0005l\u0000\u0000LM\u0005s\u0000"+
		"\u0000MN\u0005e\u0000\u0000N\u001a\u0001\u0000\u0000\u0000OP\u0005|\u0000"+
		"\u0000P_\u0005|\u0000\u0000QR\u0005&\u0000\u0000R_\u0005&\u0000\u0000"+
		"ST\u0005=\u0000\u0000T_\u0005=\u0000\u0000UV\u0005t\u0000\u0000VW\u0005"+
		"r\u0000\u0000WX\u0005u\u0000\u0000X_\u0005e\u0000\u0000YZ\u0005f\u0000"+
		"\u0000Z[\u0005a\u0000\u0000[\\\u0005l\u0000\u0000\\]\u0005s\u0000\u0000"+
		"]_\u0005e\u0000\u0000^O\u0001\u0000\u0000\u0000^Q\u0001\u0000\u0000\u0000"+
		"^S\u0001\u0000\u0000\u0000^U\u0001\u0000\u0000\u0000^Y\u0001\u0000\u0000"+
		"\u0000_\u001c\u0001\u0000\u0000\u0000`f\u0007\u0000\u0000\u0000ab\u0005"+
		"<\u0000\u0000bf\u0005=\u0000\u0000cd\u0005>\u0000\u0000df\u0005=\u0000"+
		"\u0000e`\u0001\u0000\u0000\u0000ea\u0001\u0000\u0000\u0000ec\u0001\u0000"+
		"\u0000\u0000f\u001e\u0001\u0000\u0000\u0000gh\u0005p\u0000\u0000hi\u0005"+
		"r\u0000\u0000ij\u0005i\u0000\u0000jk\u0005n\u0000\u0000kl\u0005t\u0000"+
		"\u0000lm\u0005f\u0000\u0000m \u0001\u0000\u0000\u0000no\u0005v\u0000\u0000"+
		"op\u0005o\u0000\u0000pq\u0005i\u0000\u0000qr\u0005d\u0000\u0000rs\u0005"+
		" \u0000\u0000st\u0005m\u0000\u0000tu\u0005a\u0000\u0000uv\u0005i\u0000"+
		"\u0000vw\u0005n\u0000\u0000wx\u0005(\u0000\u0000xy\u0005)\u0000\u0000"+
		"y\"\u0001\u0000\u0000\u0000z{\u0005\"\u0000\u0000{|\u0007\u0001\u0000"+
		"\u0000|}\u0005\"\u0000\u0000}$\u0001\u0000\u0000\u0000~\u0080\u0007\u0002"+
		"\u0000\u0000\u007f~\u0001\u0000\u0000\u0000\u0080\u0081\u0001\u0000\u0000"+
		"\u0000\u0081\u007f\u0001\u0000\u0000\u0000\u0081\u0082\u0001\u0000\u0000"+
		"\u0000\u0082&\u0001\u0000\u0000\u0000\u0083\u0085\u0007\u0002\u0000\u0000"+
		"\u0084\u0083\u0001\u0000\u0000\u0000\u0085\u0086\u0001\u0000\u0000\u0000"+
		"\u0086\u0084\u0001\u0000\u0000\u0000\u0086\u0087\u0001\u0000\u0000\u0000"+
		"\u0087\u0088\u0001\u0000\u0000\u0000\u0088\u008a\u0007\u0003\u0000\u0000"+
		"\u0089\u008b\u0007\u0002\u0000\u0000\u008a\u0089\u0001\u0000\u0000\u0000"+
		"\u008b\u008c\u0001\u0000\u0000\u0000\u008c\u008a\u0001\u0000\u0000\u0000"+
		"\u008c\u008d\u0001\u0000\u0000\u0000\u008d(\u0001\u0000\u0000\u0000\u008e"+
		"\u0092\u0005\"\u0000\u0000\u008f\u0091\t\u0000\u0000\u0000\u0090\u008f"+
		"\u0001\u0000\u0000\u0000\u0091\u0094\u0001\u0000\u0000\u0000\u0092\u0093"+
		"\u0001\u0000\u0000\u0000\u0092\u0090\u0001\u0000\u0000\u0000\u0093\u0095"+
		"\u0001\u0000\u0000\u0000\u0094\u0092\u0001\u0000\u0000\u0000\u0095\u0096"+
		"\u0005\"\u0000\u0000\u0096*\u0001\u0000\u0000\u0000\u0097\u009d\u0007"+
		"\u0001\u0000\u0000\u0098\u009a\u0007\u0004\u0000\u0000\u0099\u0098\u0001"+
		"\u0000\u0000\u0000\u009a\u009b\u0001\u0000\u0000\u0000\u009b\u0099\u0001"+
		"\u0000\u0000\u0000\u009b\u009c\u0001\u0000\u0000\u0000\u009c\u009e\u0001"+
		"\u0000\u0000\u0000\u009d\u0099\u0001\u0000\u0000\u0000\u009d\u009e\u0001"+
		"\u0000\u0000\u0000\u009e,\u0001\u0000\u0000\u0000\u009f\u00a1\u0007\u0005"+
		"\u0000\u0000\u00a0\u009f\u0001\u0000\u0000\u0000\u00a1\u00a2\u0001\u0000"+
		"\u0000\u0000\u00a2\u00a0\u0001\u0000\u0000\u0000\u00a2\u00a3\u0001\u0000"+
		"\u0000\u0000\u00a3.\u0001\u0000\u0000\u0000\u00a4\u00a6\u0007\u0006\u0000"+
		"\u0000\u00a5\u00a4\u0001\u0000\u0000\u0000\u00a6\u00a7\u0001\u0000\u0000"+
		"\u0000\u00a7\u00a5\u0001\u0000\u0000\u0000\u00a7\u00a8\u0001\u0000\u0000"+
		"\u0000\u00a8\u00a9\u0001\u0000\u0000\u0000\u00a9\u00aa\u0006\u0017\u0000"+
		"\u0000\u00aa0\u0001\u0000\u0000\u0000\u000b\u0000^e\u0081\u0086\u008c"+
		"\u0092\u009b\u009d\u00a2\u00a7\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}