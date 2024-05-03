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
		LOGIC=16, BOOLEAN=17, MATH=18, PRINT=19, MAIN=20, CHAR=21, INT=22, FLOAT=23, 
		STRING=24, ID=25, INVID=26, WS=27;
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
			"LOGIC", "BOOLEAN", "MATH", "PRINT", "MAIN", "CHAR", "INT", "FLOAT", 
			"STRING", "ID", "INVID", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'('", "')'", "'{'", "'}'", "'='", "'*'", "'/'", "'+'", "'-'", 
			"'\"'", "';'", "'if'", "'else'", "'while'", null, null, null, "'printf'", 
			"'void main'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PR", "PARENTH_A", "PARENTH_B", "OPENKEY", "CLOSEKEY", "EQUALS", 
			"MULTI", "DIV", "SUM", "MIN", "DOUBLE_QUOTE", "SEMICOLON", "IF", "ELSE", 
			"WHILE", "LOGIC", "BOOLEAN", "MATH", "PRINT", "MAIN", "CHAR", "INT", 
			"FLOAT", "STRING", "ID", "INVID", "WS"
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
		"\u0004\u0000\u001b\u00c5\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0003\u0000D\b\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001"+
		"\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000fp\b\u000f\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0003\u0010{\b\u0010\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0003\u0011\u0082\b\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0004\u0015\u009a\b\u0015\u000b"+
		"\u0015\f\u0015\u009b\u0001\u0016\u0004\u0016\u009f\b\u0016\u000b\u0016"+
		"\f\u0016\u00a0\u0001\u0016\u0001\u0016\u0004\u0016\u00a5\b\u0016\u000b"+
		"\u0016\f\u0016\u00a6\u0001\u0017\u0001\u0017\u0005\u0017\u00ab\b\u0017"+
		"\n\u0017\f\u0017\u00ae\t\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0001"+
		"\u0018\u0004\u0018\u00b4\b\u0018\u000b\u0018\f\u0018\u00b5\u0003\u0018"+
		"\u00b8\b\u0018\u0001\u0019\u0004\u0019\u00bb\b\u0019\u000b\u0019\f\u0019"+
		"\u00bc\u0001\u001a\u0004\u001a\u00c0\b\u001a\u000b\u001a\f\u001a\u00c1"+
		"\u0001\u001a\u0001\u001a\u0001\u00ac\u0000\u001b\u0001\u0001\u0003\u0002"+
		"\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013"+
		"\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011"+
		"#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017/\u00181\u00193\u001a5\u001b"+
		"\u0001\u0000\u0007\u0002\u0000<<>>\u0002\u0000AZaz\u0001\u000009\u0001"+
		"\u0000..\u0004\u000009AZ__az\u0005\u0000++--09AZaz\u0003\u0000\t\n\r\r"+
		"  \u00d3\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000"+
		"\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000"+
		"\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000"+
		"\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000"+
		"\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000"+
		"\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000"+
		"\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000"+
		"\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000"+
		"!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001"+
		"\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001\u0000"+
		"\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001\u0000\u0000\u0000"+
		"\u0000/\u0001\u0000\u0000\u0000\u00001\u0001\u0000\u0000\u0000\u00003"+
		"\u0001\u0000\u0000\u0000\u00005\u0001\u0000\u0000\u0000\u0001C\u0001\u0000"+
		"\u0000\u0000\u0003E\u0001\u0000\u0000\u0000\u0005G\u0001\u0000\u0000\u0000"+
		"\u0007I\u0001\u0000\u0000\u0000\tK\u0001\u0000\u0000\u0000\u000bM\u0001"+
		"\u0000\u0000\u0000\rO\u0001\u0000\u0000\u0000\u000fQ\u0001\u0000\u0000"+
		"\u0000\u0011S\u0001\u0000\u0000\u0000\u0013U\u0001\u0000\u0000\u0000\u0015"+
		"W\u0001\u0000\u0000\u0000\u0017Y\u0001\u0000\u0000\u0000\u0019[\u0001"+
		"\u0000\u0000\u0000\u001b^\u0001\u0000\u0000\u0000\u001dc\u0001\u0000\u0000"+
		"\u0000\u001fo\u0001\u0000\u0000\u0000!z\u0001\u0000\u0000\u0000#\u0081"+
		"\u0001\u0000\u0000\u0000%\u0083\u0001\u0000\u0000\u0000\'\u008a\u0001"+
		"\u0000\u0000\u0000)\u0094\u0001\u0000\u0000\u0000+\u0099\u0001\u0000\u0000"+
		"\u0000-\u009e\u0001\u0000\u0000\u0000/\u00a8\u0001\u0000\u0000\u00001"+
		"\u00b1\u0001\u0000\u0000\u00003\u00ba\u0001\u0000\u0000\u00005\u00bf\u0001"+
		"\u0000\u0000\u000078\u0005i\u0000\u000089\u0005n\u0000\u00009D\u0005t"+
		"\u0000\u0000:;\u0005f\u0000\u0000;<\u0005l\u0000\u0000<=\u0005o\u0000"+
		"\u0000=>\u0005a\u0000\u0000>D\u0005t\u0000\u0000?@\u0005c\u0000\u0000"+
		"@A\u0005h\u0000\u0000AB\u0005a\u0000\u0000BD\u0005r\u0000\u0000C7\u0001"+
		"\u0000\u0000\u0000C:\u0001\u0000\u0000\u0000C?\u0001\u0000\u0000\u0000"+
		"D\u0002\u0001\u0000\u0000\u0000EF\u0005(\u0000\u0000F\u0004\u0001\u0000"+
		"\u0000\u0000GH\u0005)\u0000\u0000H\u0006\u0001\u0000\u0000\u0000IJ\u0005"+
		"{\u0000\u0000J\b\u0001\u0000\u0000\u0000KL\u0005}\u0000\u0000L\n\u0001"+
		"\u0000\u0000\u0000MN\u0005=\u0000\u0000N\f\u0001\u0000\u0000\u0000OP\u0005"+
		"*\u0000\u0000P\u000e\u0001\u0000\u0000\u0000QR\u0005/\u0000\u0000R\u0010"+
		"\u0001\u0000\u0000\u0000ST\u0005+\u0000\u0000T\u0012\u0001\u0000\u0000"+
		"\u0000UV\u0005-\u0000\u0000V\u0014\u0001\u0000\u0000\u0000WX\u0005\"\u0000"+
		"\u0000X\u0016\u0001\u0000\u0000\u0000YZ\u0005;\u0000\u0000Z\u0018\u0001"+
		"\u0000\u0000\u0000[\\\u0005i\u0000\u0000\\]\u0005f\u0000\u0000]\u001a"+
		"\u0001\u0000\u0000\u0000^_\u0005e\u0000\u0000_`\u0005l\u0000\u0000`a\u0005"+
		"s\u0000\u0000ab\u0005e\u0000\u0000b\u001c\u0001\u0000\u0000\u0000cd\u0005"+
		"w\u0000\u0000de\u0005h\u0000\u0000ef\u0005i\u0000\u0000fg\u0005l\u0000"+
		"\u0000gh\u0005e\u0000\u0000h\u001e\u0001\u0000\u0000\u0000ij\u0005|\u0000"+
		"\u0000jp\u0005|\u0000\u0000kl\u0005&\u0000\u0000lp\u0005&\u0000\u0000"+
		"mn\u0005=\u0000\u0000np\u0005=\u0000\u0000oi\u0001\u0000\u0000\u0000o"+
		"k\u0001\u0000\u0000\u0000om\u0001\u0000\u0000\u0000p \u0001\u0000\u0000"+
		"\u0000qr\u0005t\u0000\u0000rs\u0005r\u0000\u0000st\u0005u\u0000\u0000"+
		"t{\u0005e\u0000\u0000uv\u0005f\u0000\u0000vw\u0005a\u0000\u0000wx\u0005"+
		"l\u0000\u0000xy\u0005s\u0000\u0000y{\u0005e\u0000\u0000zq\u0001\u0000"+
		"\u0000\u0000zu\u0001\u0000\u0000\u0000{\"\u0001\u0000\u0000\u0000|\u0082"+
		"\u0007\u0000\u0000\u0000}~\u0005<\u0000\u0000~\u0082\u0005=\u0000\u0000"+
		"\u007f\u0080\u0005>\u0000\u0000\u0080\u0082\u0005=\u0000\u0000\u0081|"+
		"\u0001\u0000\u0000\u0000\u0081}\u0001\u0000\u0000\u0000\u0081\u007f\u0001"+
		"\u0000\u0000\u0000\u0082$\u0001\u0000\u0000\u0000\u0083\u0084\u0005p\u0000"+
		"\u0000\u0084\u0085\u0005r\u0000\u0000\u0085\u0086\u0005i\u0000\u0000\u0086"+
		"\u0087\u0005n\u0000\u0000\u0087\u0088\u0005t\u0000\u0000\u0088\u0089\u0005"+
		"f\u0000\u0000\u0089&\u0001\u0000\u0000\u0000\u008a\u008b\u0005v\u0000"+
		"\u0000\u008b\u008c\u0005o\u0000\u0000\u008c\u008d\u0005i\u0000\u0000\u008d"+
		"\u008e\u0005d\u0000\u0000\u008e\u008f\u0005 \u0000\u0000\u008f\u0090\u0005"+
		"m\u0000\u0000\u0090\u0091\u0005a\u0000\u0000\u0091\u0092\u0005i\u0000"+
		"\u0000\u0092\u0093\u0005n\u0000\u0000\u0093(\u0001\u0000\u0000\u0000\u0094"+
		"\u0095\u0005\"\u0000\u0000\u0095\u0096\u0007\u0001\u0000\u0000\u0096\u0097"+
		"\u0005\"\u0000\u0000\u0097*\u0001\u0000\u0000\u0000\u0098\u009a\u0007"+
		"\u0002\u0000\u0000\u0099\u0098\u0001\u0000\u0000\u0000\u009a\u009b\u0001"+
		"\u0000\u0000\u0000\u009b\u0099\u0001\u0000\u0000\u0000\u009b\u009c\u0001"+
		"\u0000\u0000\u0000\u009c,\u0001\u0000\u0000\u0000\u009d\u009f\u0007\u0002"+
		"\u0000\u0000\u009e\u009d\u0001\u0000\u0000\u0000\u009f\u00a0\u0001\u0000"+
		"\u0000\u0000\u00a0\u009e\u0001\u0000\u0000\u0000\u00a0\u00a1\u0001\u0000"+
		"\u0000\u0000\u00a1\u00a2\u0001\u0000\u0000\u0000\u00a2\u00a4\u0007\u0003"+
		"\u0000\u0000\u00a3\u00a5\u0007\u0002\u0000\u0000\u00a4\u00a3\u0001\u0000"+
		"\u0000\u0000\u00a5\u00a6\u0001\u0000\u0000\u0000\u00a6\u00a4\u0001\u0000"+
		"\u0000\u0000\u00a6\u00a7\u0001\u0000\u0000\u0000\u00a7.\u0001\u0000\u0000"+
		"\u0000\u00a8\u00ac\u0005\"\u0000\u0000\u00a9\u00ab\t\u0000\u0000\u0000"+
		"\u00aa\u00a9\u0001\u0000\u0000\u0000\u00ab\u00ae\u0001\u0000\u0000\u0000"+
		"\u00ac\u00ad\u0001\u0000\u0000\u0000\u00ac\u00aa\u0001\u0000\u0000\u0000"+
		"\u00ad\u00af\u0001\u0000\u0000\u0000\u00ae\u00ac\u0001\u0000\u0000\u0000"+
		"\u00af\u00b0\u0005\"\u0000\u0000\u00b00\u0001\u0000\u0000\u0000\u00b1"+
		"\u00b7\u0007\u0001\u0000\u0000\u00b2\u00b4\u0007\u0004\u0000\u0000\u00b3"+
		"\u00b2\u0001\u0000\u0000\u0000\u00b4\u00b5\u0001\u0000\u0000\u0000\u00b5"+
		"\u00b3\u0001\u0000\u0000\u0000\u00b5\u00b6\u0001\u0000\u0000\u0000\u00b6"+
		"\u00b8\u0001\u0000\u0000\u0000\u00b7\u00b3\u0001\u0000\u0000\u0000\u00b7"+
		"\u00b8\u0001\u0000\u0000\u0000\u00b82\u0001\u0000\u0000\u0000\u00b9\u00bb"+
		"\u0007\u0005\u0000\u0000\u00ba\u00b9\u0001\u0000\u0000\u0000\u00bb\u00bc"+
		"\u0001\u0000\u0000\u0000\u00bc\u00ba\u0001\u0000\u0000\u0000\u00bc\u00bd"+
		"\u0001\u0000\u0000\u0000\u00bd4\u0001\u0000\u0000\u0000\u00be\u00c0\u0007"+
		"\u0006\u0000\u0000\u00bf\u00be\u0001\u0000\u0000\u0000\u00c0\u00c1\u0001"+
		"\u0000\u0000\u0000\u00c1\u00bf\u0001\u0000\u0000\u0000\u00c1\u00c2\u0001"+
		"\u0000\u0000\u0000\u00c2\u00c3\u0001\u0000\u0000\u0000\u00c3\u00c4\u0006"+
		"\u001a\u0000\u0000\u00c46\u0001\u0000\u0000\u0000\r\u0000Coz\u0081\u009b"+
		"\u00a0\u00a6\u00ac\u00b5\u00b7\u00bc\u00c1\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}