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
		PR=1, PARENTH_A=2, PARENTH_B=3, OPENKEY=4, CLOSEKEY=5, EQUALS=6, MULTI=7, 
		DIV=8, SUM=9, MIN=10, DOUBLE_QUOTE=11, SEMICOLON=12, IF=13, ELSE=14, WHILE=15, 
		LOGIC=16, MATH=17, PRINT=18, MAIN=19, CHAR=20, INT=21, FLOAT=22, STRING=23, 
		ID=24, INVID=25, WS=26;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PR", "PARENTH_A", "PARENTH_B", "OPENKEY", "CLOSEKEY", "EQUALS", "MULTI", 
			"DIV", "SUM", "MIN", "DOUBLE_QUOTE", "SEMICOLON", "IF", "ELSE", "WHILE", 
			"LOGIC", "MATH", "PRINT", "MAIN", "CHAR", "INT", "FLOAT", "STRING", "ID", 
			"INVID", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'('", "')'", "'{'", "'}'", "'='", "'*'", "'/'", "'+'", "'-'", 
			"'\"'", "';'", "'if'", "'else'", "'while'", null, null, "'printf'", "'void main()'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PR", "PARENTH_A", "PARENTH_B", "OPENKEY", "CLOSEKEY", "EQUALS", 
			"MULTI", "DIV", "SUM", "MIN", "DOUBLE_QUOTE", "SEMICOLON", "IF", "ELSE", 
			"WHILE", "LOGIC", "MATH", "PRINT", "MAIN", "CHAR", "INT", "FLOAT", "STRING", 
			"ID", "INVID", "WS"
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
		"\u0004\u0000\u001a\u00c3\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0003\u0000B\b\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000fw\b"+
		"\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0003"+
		"\u0010~\b\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0014\u0004\u0014\u0098\b\u0014\u000b\u0014\f\u0014\u0099"+
		"\u0001\u0015\u0004\u0015\u009d\b\u0015\u000b\u0015\f\u0015\u009e\u0001"+
		"\u0015\u0001\u0015\u0004\u0015\u00a3\b\u0015\u000b\u0015\f\u0015\u00a4"+
		"\u0001\u0016\u0001\u0016\u0005\u0016\u00a9\b\u0016\n\u0016\f\u0016\u00ac"+
		"\t\u0016\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0004\u0017\u00b2"+
		"\b\u0017\u000b\u0017\f\u0017\u00b3\u0003\u0017\u00b6\b\u0017\u0001\u0018"+
		"\u0004\u0018\u00b9\b\u0018\u000b\u0018\f\u0018\u00ba\u0001\u0019\u0004"+
		"\u0019\u00be\b\u0019\u000b\u0019\f\u0019\u00bf\u0001\u0019\u0001\u0019"+
		"\u0001\u00aa\u0000\u001a\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004"+
		"\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017"+
		"\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'"+
		"\u0014)\u0015+\u0016-\u0017/\u00181\u00193\u001a\u0001\u0000\u0007\u0002"+
		"\u0000<<>>\u0002\u0000AZaz\u0001\u000009\u0001\u0000..\u0004\u000009A"+
		"Z__az\u0005\u0000++--09AZaz\u0003\u0000\t\n\r\r  \u00d2\u0000\u0001\u0001"+
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
		"\u00001\u0001\u0000\u0000\u0000\u00003\u0001\u0000\u0000\u0000\u0001A"+
		"\u0001\u0000\u0000\u0000\u0003C\u0001\u0000\u0000\u0000\u0005E\u0001\u0000"+
		"\u0000\u0000\u0007G\u0001\u0000\u0000\u0000\tI\u0001\u0000\u0000\u0000"+
		"\u000bK\u0001\u0000\u0000\u0000\rM\u0001\u0000\u0000\u0000\u000fO\u0001"+
		"\u0000\u0000\u0000\u0011Q\u0001\u0000\u0000\u0000\u0013S\u0001\u0000\u0000"+
		"\u0000\u0015U\u0001\u0000\u0000\u0000\u0017W\u0001\u0000\u0000\u0000\u0019"+
		"Y\u0001\u0000\u0000\u0000\u001b\\\u0001\u0000\u0000\u0000\u001da\u0001"+
		"\u0000\u0000\u0000\u001fv\u0001\u0000\u0000\u0000!}\u0001\u0000\u0000"+
		"\u0000#\u007f\u0001\u0000\u0000\u0000%\u0086\u0001\u0000\u0000\u0000\'"+
		"\u0092\u0001\u0000\u0000\u0000)\u0097\u0001\u0000\u0000\u0000+\u009c\u0001"+
		"\u0000\u0000\u0000-\u00a6\u0001\u0000\u0000\u0000/\u00af\u0001\u0000\u0000"+
		"\u00001\u00b8\u0001\u0000\u0000\u00003\u00bd\u0001\u0000\u0000\u00005"+
		"6\u0005i\u0000\u000067\u0005n\u0000\u00007B\u0005t\u0000\u000089\u0005"+
		"f\u0000\u00009:\u0005l\u0000\u0000:;\u0005o\u0000\u0000;<\u0005a\u0000"+
		"\u0000<B\u0005t\u0000\u0000=>\u0005c\u0000\u0000>?\u0005h\u0000\u0000"+
		"?@\u0005a\u0000\u0000@B\u0005r\u0000\u0000A5\u0001\u0000\u0000\u0000A"+
		"8\u0001\u0000\u0000\u0000A=\u0001\u0000\u0000\u0000B\u0002\u0001\u0000"+
		"\u0000\u0000CD\u0005(\u0000\u0000D\u0004\u0001\u0000\u0000\u0000EF\u0005"+
		")\u0000\u0000F\u0006\u0001\u0000\u0000\u0000GH\u0005{\u0000\u0000H\b\u0001"+
		"\u0000\u0000\u0000IJ\u0005}\u0000\u0000J\n\u0001\u0000\u0000\u0000KL\u0005"+
		"=\u0000\u0000L\f\u0001\u0000\u0000\u0000MN\u0005*\u0000\u0000N\u000e\u0001"+
		"\u0000\u0000\u0000OP\u0005/\u0000\u0000P\u0010\u0001\u0000\u0000\u0000"+
		"QR\u0005+\u0000\u0000R\u0012\u0001\u0000\u0000\u0000ST\u0005-\u0000\u0000"+
		"T\u0014\u0001\u0000\u0000\u0000UV\u0005\"\u0000\u0000V\u0016\u0001\u0000"+
		"\u0000\u0000WX\u0005;\u0000\u0000X\u0018\u0001\u0000\u0000\u0000YZ\u0005"+
		"i\u0000\u0000Z[\u0005f\u0000\u0000[\u001a\u0001\u0000\u0000\u0000\\]\u0005"+
		"e\u0000\u0000]^\u0005l\u0000\u0000^_\u0005s\u0000\u0000_`\u0005e\u0000"+
		"\u0000`\u001c\u0001\u0000\u0000\u0000ab\u0005w\u0000\u0000bc\u0005h\u0000"+
		"\u0000cd\u0005i\u0000\u0000de\u0005l\u0000\u0000ef\u0005e\u0000\u0000"+
		"f\u001e\u0001\u0000\u0000\u0000gh\u0005|\u0000\u0000hw\u0005|\u0000\u0000"+
		"ij\u0005&\u0000\u0000jw\u0005&\u0000\u0000kl\u0005=\u0000\u0000lw\u0005"+
		"=\u0000\u0000mn\u0005t\u0000\u0000no\u0005r\u0000\u0000op\u0005u\u0000"+
		"\u0000pw\u0005e\u0000\u0000qr\u0005f\u0000\u0000rs\u0005a\u0000\u0000"+
		"st\u0005l\u0000\u0000tu\u0005s\u0000\u0000uw\u0005e\u0000\u0000vg\u0001"+
		"\u0000\u0000\u0000vi\u0001\u0000\u0000\u0000vk\u0001\u0000\u0000\u0000"+
		"vm\u0001\u0000\u0000\u0000vq\u0001\u0000\u0000\u0000w \u0001\u0000\u0000"+
		"\u0000x~\u0007\u0000\u0000\u0000yz\u0005<\u0000\u0000z~\u0005=\u0000\u0000"+
		"{|\u0005>\u0000\u0000|~\u0005=\u0000\u0000}x\u0001\u0000\u0000\u0000}"+
		"y\u0001\u0000\u0000\u0000}{\u0001\u0000\u0000\u0000~\"\u0001\u0000\u0000"+
		"\u0000\u007f\u0080\u0005p\u0000\u0000\u0080\u0081\u0005r\u0000\u0000\u0081"+
		"\u0082\u0005i\u0000\u0000\u0082\u0083\u0005n\u0000\u0000\u0083\u0084\u0005"+
		"t\u0000\u0000\u0084\u0085\u0005f\u0000\u0000\u0085$\u0001\u0000\u0000"+
		"\u0000\u0086\u0087\u0005v\u0000\u0000\u0087\u0088\u0005o\u0000\u0000\u0088"+
		"\u0089\u0005i\u0000\u0000\u0089\u008a\u0005d\u0000\u0000\u008a\u008b\u0005"+
		" \u0000\u0000\u008b\u008c\u0005m\u0000\u0000\u008c\u008d\u0005a\u0000"+
		"\u0000\u008d\u008e\u0005i\u0000\u0000\u008e\u008f\u0005n\u0000\u0000\u008f"+
		"\u0090\u0005(\u0000\u0000\u0090\u0091\u0005)\u0000\u0000\u0091&\u0001"+
		"\u0000\u0000\u0000\u0092\u0093\u0005\"\u0000\u0000\u0093\u0094\u0007\u0001"+
		"\u0000\u0000\u0094\u0095\u0005\"\u0000\u0000\u0095(\u0001\u0000\u0000"+
		"\u0000\u0096\u0098\u0007\u0002\u0000\u0000\u0097\u0096\u0001\u0000\u0000"+
		"\u0000\u0098\u0099\u0001\u0000\u0000\u0000\u0099\u0097\u0001\u0000\u0000"+
		"\u0000\u0099\u009a\u0001\u0000\u0000\u0000\u009a*\u0001\u0000\u0000\u0000"+
		"\u009b\u009d\u0007\u0002\u0000\u0000\u009c\u009b\u0001\u0000\u0000\u0000"+
		"\u009d\u009e\u0001\u0000\u0000\u0000\u009e\u009c\u0001\u0000\u0000\u0000"+
		"\u009e\u009f\u0001\u0000\u0000\u0000\u009f\u00a0\u0001\u0000\u0000\u0000"+
		"\u00a0\u00a2\u0007\u0003\u0000\u0000\u00a1\u00a3\u0007\u0002\u0000\u0000"+
		"\u00a2\u00a1\u0001\u0000\u0000\u0000\u00a3\u00a4\u0001\u0000\u0000\u0000"+
		"\u00a4\u00a2\u0001\u0000\u0000\u0000\u00a4\u00a5\u0001\u0000\u0000\u0000"+
		"\u00a5,\u0001\u0000\u0000\u0000\u00a6\u00aa\u0005\"\u0000\u0000\u00a7"+
		"\u00a9\t\u0000\u0000\u0000\u00a8\u00a7\u0001\u0000\u0000\u0000\u00a9\u00ac"+
		"\u0001\u0000\u0000\u0000\u00aa\u00ab\u0001\u0000\u0000\u0000\u00aa\u00a8"+
		"\u0001\u0000\u0000\u0000\u00ab\u00ad\u0001\u0000\u0000\u0000\u00ac\u00aa"+
		"\u0001\u0000\u0000\u0000\u00ad\u00ae\u0005\"\u0000\u0000\u00ae.\u0001"+
		"\u0000\u0000\u0000\u00af\u00b5\u0007\u0001\u0000\u0000\u00b0\u00b2\u0007"+
		"\u0004\u0000\u0000\u00b1\u00b0\u0001\u0000\u0000\u0000\u00b2\u00b3\u0001"+
		"\u0000\u0000\u0000\u00b3\u00b1\u0001\u0000\u0000\u0000\u00b3\u00b4\u0001"+
		"\u0000\u0000\u0000\u00b4\u00b6\u0001\u0000\u0000\u0000\u00b5\u00b1\u0001"+
		"\u0000\u0000\u0000\u00b5\u00b6\u0001\u0000\u0000\u0000\u00b60\u0001\u0000"+
		"\u0000\u0000\u00b7\u00b9\u0007\u0005\u0000\u0000\u00b8\u00b7\u0001\u0000"+
		"\u0000\u0000\u00b9\u00ba\u0001\u0000\u0000\u0000\u00ba\u00b8\u0001\u0000"+
		"\u0000\u0000\u00ba\u00bb\u0001\u0000\u0000\u0000\u00bb2\u0001\u0000\u0000"+
		"\u0000\u00bc\u00be\u0007\u0006\u0000\u0000\u00bd\u00bc\u0001\u0000\u0000"+
		"\u0000\u00be\u00bf\u0001\u0000\u0000\u0000\u00bf\u00bd\u0001\u0000\u0000"+
		"\u0000\u00bf\u00c0\u0001\u0000\u0000\u0000\u00c0\u00c1\u0001\u0000\u0000"+
		"\u0000\u00c1\u00c2\u0006\u0019\u0000\u0000\u00c24\u0001\u0000\u0000\u0000"+
		"\f\u0000Av}\u0099\u009e\u00a4\u00aa\u00b3\u00b5\u00ba\u00bf\u0001\u0006"+
		"\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}