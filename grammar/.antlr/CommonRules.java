// Generated from /home/mrsmin/Escritorio/automatas/automatas 2/macha-code-compiler/grammar/CommonRules.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CommonRules extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CHICHAK=1, PR=2, PARENTH_A=3, PARENTH_B=4, OPENKEY=5, CLOSEKEY=6, GOPSSEM=7, 
		NANU=8, DO=9, PPAEDA=10, EQUALS=11, PORCENT=12, PRINT=13, IF=14, ELSE=15, 
		WHILE=16, LOGIC=17, MATH=18, BOOLEAN=19, STRING=20, CHAR=21, SUJJA=22, 
		GEULSSI=23, CHINCHA=24, GONG=25;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"CHICHAK", "PR", "PARENTH_A", "PARENTH_B", "OPENKEY", "CLOSEKEY", "GOPSSEM", 
			"NANU", "DO", "PPAEDA", "EQUALS", "PORCENT", "PRINT", "IF", "ELSE", "WHILE", 
			"LOGIC", "MATH", "BOOLEAN", "STRING", "CHAR", "SUJJA", "GEULSSI", "CHINCHA", 
			"GONG"
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


	public CommonRules(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "CommonRules.g4"; }

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
		"\u0004\u0000\u0019\u00bb\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001G\b\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0003\u0010\u0081\b\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0003\u0011\u008a\b\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u0095\b\u0012\u0001\u0013\u0001"+
		"\u0013\u0005\u0013\u0099\b\u0013\n\u0013\f\u0013\u009c\t\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0014\u0001\u0014\u0003\u0014\u00a2\b\u0014\u0001\u0014"+
		"\u0001\u0014\u0001\u0015\u0004\u0015\u00a7\b\u0015\u000b\u0015\f\u0015"+
		"\u00a8\u0001\u0016\u0004\u0016\u00ac\b\u0016\u000b\u0016\f\u0016\u00ad"+
		"\u0001\u0017\u0004\u0017\u00b1\b\u0017\u000b\u0017\f\u0017\u00b2\u0001"+
		"\u0018\u0004\u0018\u00b6\b\u0018\u000b\u0018\f\u0018\u00b7\u0001\u0018"+
		"\u0001\u0018\u0001\u009a\u0000\u0019\u0001\u0001\u0003\u0002\u0005\u0003"+
		"\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015"+
		"\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012"+
		"%\u0013\'\u0014)\u0015+\u0016-\u0017/\u00181\u0019\u0001\u0000\u0006\u0002"+
		"\u0000<<>>\u0003\u0000  AZaz\u0003\u0000-.09^^\u0002\u0000AZaz\u0005\u0000"+
		"**/9AZ__az\u0003\u0000\t\n\r\r  \u00c9\u0000\u0001\u0001\u0000\u0000\u0000"+
		"\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000"+
		"\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000"+
		"\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f"+
		"\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013"+
		"\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017"+
		"\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b"+
		"\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f"+
		"\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000"+
		"\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000"+
		"\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000"+
		"-\u0001\u0000\u0000\u0000\u0000/\u0001\u0000\u0000\u0000\u00001\u0001"+
		"\u0000\u0000\u0000\u00013\u0001\u0000\u0000\u0000\u0003F\u0001\u0000\u0000"+
		"\u0000\u0005H\u0001\u0000\u0000\u0000\u0007J\u0001\u0000\u0000\u0000\t"+
		"L\u0001\u0000\u0000\u0000\u000bN\u0001\u0000\u0000\u0000\rP\u0001\u0000"+
		"\u0000\u0000\u000fR\u0001\u0000\u0000\u0000\u0011T\u0001\u0000\u0000\u0000"+
		"\u0013V\u0001\u0000\u0000\u0000\u0015X\u0001\u0000\u0000\u0000\u0017Z"+
		"\u0001\u0000\u0000\u0000\u0019\\\u0001\u0000\u0000\u0000\u001bc\u0001"+
		"\u0000\u0000\u0000\u001di\u0001\u0000\u0000\u0000\u001fq\u0001\u0000\u0000"+
		"\u0000!\u0080\u0001\u0000\u0000\u0000#\u0089\u0001\u0000\u0000\u0000%"+
		"\u0094\u0001\u0000\u0000\u0000\'\u0096\u0001\u0000\u0000\u0000)\u009f"+
		"\u0001\u0000\u0000\u0000+\u00a6\u0001\u0000\u0000\u0000-\u00ab\u0001\u0000"+
		"\u0000\u0000/\u00b0\u0001\u0000\u0000\u00001\u00b5\u0001\u0000\u0000\u0000"+
		"34\u0005c\u0000\u000045\u0005h\u0000\u000056\u0005i\u0000\u000067\u0005"+
		"c\u0000\u000078\u0005h\u0000\u000089\u0005a\u0000\u00009:\u0005k\u0000"+
		"\u0000:\u0002\u0001\u0000\u0000\u0000;<\u0005g\u0000\u0000<=\u0005e\u0000"+
		"\u0000=>\u0005u\u0000\u0000>G\u0005m\u0000\u0000?@\u0005h\u0000\u0000"+
		"@A\u0005a\u0000\u0000AB\u0005n\u0000\u0000BG\u0005a\u0000\u0000CD\u0005"+
		"s\u0000\u0000DE\u0005a\u0000\u0000EG\u0005m\u0000\u0000F;\u0001\u0000"+
		"\u0000\u0000F?\u0001\u0000\u0000\u0000FC\u0001\u0000\u0000\u0000G\u0004"+
		"\u0001\u0000\u0000\u0000HI\u0005(\u0000\u0000I\u0006\u0001\u0000\u0000"+
		"\u0000JK\u0005)\u0000\u0000K\b\u0001\u0000\u0000\u0000LM\u0005{\u0000"+
		"\u0000M\n\u0001\u0000\u0000\u0000NO\u0005}\u0000\u0000O\f\u0001\u0000"+
		"\u0000\u0000PQ\u0005*\u0000\u0000Q\u000e\u0001\u0000\u0000\u0000RS\u0005"+
		"/\u0000\u0000S\u0010\u0001\u0000\u0000\u0000TU\u0005+\u0000\u0000U\u0012"+
		"\u0001\u0000\u0000\u0000VW\u0005-\u0000\u0000W\u0014\u0001\u0000\u0000"+
		"\u0000XY\u0005=\u0000\u0000Y\u0016\u0001\u0000\u0000\u0000Z[\u0005%\u0000"+
		"\u0000[\u0018\u0001\u0000\u0000\u0000\\]\u0005i\u0000\u0000]^\u0005n\u0000"+
		"\u0000^_\u0005s\u0000\u0000_`\u0005w\u0000\u0000`a\u0005a\u0000\u0000"+
		"ab\u0005e\u0000\u0000b\u001a\u0001\u0000\u0000\u0000cd\u0005m\u0000\u0000"+
		"de\u0005y\u0000\u0000ef\u0005e\u0000\u0000fg\u0005o\u0000\u0000gh\u0005"+
		"n\u0000\u0000h\u001c\u0001\u0000\u0000\u0000ij\u0005n\u0000\u0000jk\u0005"+
		"a\u0000\u0000kl\u0005m\u0000\u0000lm\u0005o\u0000\u0000mn\u0005c\u0000"+
		"\u0000no\u0005h\u0000\u0000op\u0005i\u0000\u0000p\u001e\u0001\u0000\u0000"+
		"\u0000qr\u0005g\u0000\u0000rs\u0005e\u0000\u0000st\u0005u\u0000\u0000"+
		"tu\u0005t\u0000\u0000uv\u0005t\u0000\u0000vw\u0005a\u0000\u0000wx\u0005"+
		"e\u0000\u0000x \u0001\u0000\u0000\u0000yz\u0005|\u0000\u0000z\u0081\u0005"+
		"|\u0000\u0000{|\u0005&\u0000\u0000|\u0081\u0005&\u0000\u0000}~\u0005="+
		"\u0000\u0000~\u0081\u0005=\u0000\u0000\u007f\u0081\u0005%\u0000\u0000"+
		"\u0080y\u0001\u0000\u0000\u0000\u0080{\u0001\u0000\u0000\u0000\u0080}"+
		"\u0001\u0000\u0000\u0000\u0080\u007f\u0001\u0000\u0000\u0000\u0081\"\u0001"+
		"\u0000\u0000\u0000\u0082\u008a\u0007\u0000\u0000\u0000\u0083\u0084\u0005"+
		"<\u0000\u0000\u0084\u008a\u0005=\u0000\u0000\u0085\u0086\u0005>\u0000"+
		"\u0000\u0086\u008a\u0005=\u0000\u0000\u0087\u0088\u0005!\u0000\u0000\u0088"+
		"\u008a\u0005=\u0000\u0000\u0089\u0082\u0001\u0000\u0000\u0000\u0089\u0083"+
		"\u0001\u0000\u0000\u0000\u0089\u0085\u0001\u0000\u0000\u0000\u0089\u0087"+
		"\u0001\u0000\u0000\u0000\u008a$\u0001\u0000\u0000\u0000\u008b\u008c\u0005"+
		"t\u0000\u0000\u008c\u008d\u0005r\u0000\u0000\u008d\u008e\u0005u\u0000"+
		"\u0000\u008e\u0095\u0005e\u0000\u0000\u008f\u0090\u0005f\u0000\u0000\u0090"+
		"\u0091\u0005a\u0000\u0000\u0091\u0092\u0005l\u0000\u0000\u0092\u0093\u0005"+
		"s\u0000\u0000\u0093\u0095\u0005e\u0000\u0000\u0094\u008b\u0001\u0000\u0000"+
		"\u0000\u0094\u008f\u0001\u0000\u0000\u0000\u0095&\u0001\u0000\u0000\u0000"+
		"\u0096\u009a\u0005\"\u0000\u0000\u0097\u0099\t\u0000\u0000\u0000\u0098"+
		"\u0097\u0001\u0000\u0000\u0000\u0099\u009c\u0001\u0000\u0000\u0000\u009a"+
		"\u009b\u0001\u0000\u0000\u0000\u009a\u0098\u0001\u0000\u0000\u0000\u009b"+
		"\u009d\u0001\u0000\u0000\u0000\u009c\u009a\u0001\u0000\u0000\u0000\u009d"+
		"\u009e\u0005\"\u0000\u0000\u009e(\u0001\u0000\u0000\u0000\u009f\u00a1"+
		"\u0005\"\u0000\u0000\u00a0\u00a2\u0007\u0001\u0000\u0000\u00a1\u00a0\u0001"+
		"\u0000\u0000\u0000\u00a1\u00a2\u0001\u0000\u0000\u0000\u00a2\u00a3\u0001"+
		"\u0000\u0000\u0000\u00a3\u00a4\u0005\"\u0000\u0000\u00a4*\u0001\u0000"+
		"\u0000\u0000\u00a5\u00a7\u0007\u0002\u0000\u0000\u00a6\u00a5\u0001\u0000"+
		"\u0000\u0000\u00a7\u00a8\u0001\u0000\u0000\u0000\u00a8\u00a6\u0001\u0000"+
		"\u0000\u0000\u00a8\u00a9\u0001\u0000\u0000\u0000\u00a9,\u0001\u0000\u0000"+
		"\u0000\u00aa\u00ac\u0007\u0003\u0000\u0000\u00ab\u00aa\u0001\u0000\u0000"+
		"\u0000\u00ac\u00ad\u0001\u0000\u0000\u0000\u00ad\u00ab\u0001\u0000\u0000"+
		"\u0000\u00ad\u00ae\u0001\u0000\u0000\u0000\u00ae.\u0001\u0000\u0000\u0000"+
		"\u00af\u00b1\u0007\u0004\u0000\u0000\u00b0\u00af\u0001\u0000\u0000\u0000"+
		"\u00b1\u00b2\u0001\u0000\u0000\u0000\u00b2\u00b0\u0001\u0000\u0000\u0000"+
		"\u00b2\u00b3\u0001\u0000\u0000\u0000\u00b30\u0001\u0000\u0000\u0000\u00b4"+
		"\u00b6\u0007\u0005\u0000\u0000\u00b5\u00b4\u0001\u0000\u0000\u0000\u00b6"+
		"\u00b7\u0001\u0000\u0000\u0000\u00b7\u00b5\u0001\u0000\u0000\u0000\u00b7"+
		"\u00b8\u0001\u0000\u0000\u0000\u00b8\u00b9\u0001\u0000\u0000\u0000\u00b9"+
		"\u00ba\u0006\u0018\u0000\u0000\u00ba2\u0001\u0000\u0000\u0000\u000b\u0000"+
		"F\u0080\u0089\u0094\u009a\u00a1\u00a8\u00ad\u00b2\u00b7\u0001\u0006\u0000"+
		"\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}