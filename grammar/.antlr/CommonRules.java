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
		CHICHAK=1, PR=2, STRING=3, PARENTH_A=4, PARENTH_B=5, OPENKEY=6, CLOSEKEY=7, 
		GOPSSEM=8, NANU=9, DO=10, PPAEDA=11, EQUALS=12, PRINT=13, IF=14, ELSE=15, 
		LOGIC=16, MATH=17, BOOLEAN=18, SUJJA=19, GEULSSI=20, CHINCHA=21, GONG=22;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"CHICHAK", "PR", "STRING", "PARENTH_A", "PARENTH_B", "OPENKEY", "CLOSEKEY", 
			"GOPSSEM", "NANU", "DO", "PPAEDA", "EQUALS", "PRINT", "IF", "ELSE", "LOGIC", 
			"MATH", "BOOLEAN", "SUJJA", "GEULSSI", "CHINCHA", "GONG"
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
		"\u0004\u0000\u0016\u00a2\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001A\b\u0001\u0001\u0002"+
		"\u0001\u0002\u0005\u0002E\b\u0002\n\u0002\f\u0002H\t\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000fy\b\u000f\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0003\u0010\u0080"+
		"\b\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0003\u0011\u008b\b\u0011\u0001"+
		"\u0012\u0004\u0012\u008e\b\u0012\u000b\u0012\f\u0012\u008f\u0001\u0013"+
		"\u0004\u0013\u0093\b\u0013\u000b\u0013\f\u0013\u0094\u0001\u0014\u0004"+
		"\u0014\u0098\b\u0014\u000b\u0014\f\u0014\u0099\u0001\u0015\u0004\u0015"+
		"\u009d\b\u0015\u000b\u0015\f\u0015\u009e\u0001\u0015\u0001\u0015\u0001"+
		"F\u0000\u0016\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005"+
		"\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019"+
		"\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015"+
		"+\u0016\u0001\u0000\u0005\u0002\u0000<<>>\u0001\u000009\u0002\u0000AZ"+
		"az\u0006\u0000*+--/9AZ__az\u0003\u0000\t\n\r\r  \u00ad\u0000\u0001\u0001"+
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
		"\u0000\u0000\u0001-\u0001\u0000\u0000\u0000\u0003@\u0001\u0000\u0000\u0000"+
		"\u0005B\u0001\u0000\u0000\u0000\u0007K\u0001\u0000\u0000\u0000\tM\u0001"+
		"\u0000\u0000\u0000\u000bO\u0001\u0000\u0000\u0000\rQ\u0001\u0000\u0000"+
		"\u0000\u000fS\u0001\u0000\u0000\u0000\u0011U\u0001\u0000\u0000\u0000\u0013"+
		"W\u0001\u0000\u0000\u0000\u0015Y\u0001\u0000\u0000\u0000\u0017[\u0001"+
		"\u0000\u0000\u0000\u0019]\u0001\u0000\u0000\u0000\u001bd\u0001\u0000\u0000"+
		"\u0000\u001dj\u0001\u0000\u0000\u0000\u001fx\u0001\u0000\u0000\u0000!"+
		"\u007f\u0001\u0000\u0000\u0000#\u008a\u0001\u0000\u0000\u0000%\u008d\u0001"+
		"\u0000\u0000\u0000\'\u0092\u0001\u0000\u0000\u0000)\u0097\u0001\u0000"+
		"\u0000\u0000+\u009c\u0001\u0000\u0000\u0000-.\u0005c\u0000\u0000./\u0005"+
		"h\u0000\u0000/0\u0005i\u0000\u000001\u0005c\u0000\u000012\u0005h\u0000"+
		"\u000023\u0005a\u0000\u000034\u0005k\u0000\u00004\u0002\u0001\u0000\u0000"+
		"\u000056\u0005g\u0000\u000067\u0005e\u0000\u000078\u0005u\u0000\u0000"+
		"8A\u0005m\u0000\u00009:\u0005h\u0000\u0000:;\u0005a\u0000\u0000;<\u0005"+
		"n\u0000\u0000<A\u0005a\u0000\u0000=>\u0005s\u0000\u0000>?\u0005a\u0000"+
		"\u0000?A\u0005m\u0000\u0000@5\u0001\u0000\u0000\u0000@9\u0001\u0000\u0000"+
		"\u0000@=\u0001\u0000\u0000\u0000A\u0004\u0001\u0000\u0000\u0000BF\u0005"+
		"\"\u0000\u0000CE\t\u0000\u0000\u0000DC\u0001\u0000\u0000\u0000EH\u0001"+
		"\u0000\u0000\u0000FG\u0001\u0000\u0000\u0000FD\u0001\u0000\u0000\u0000"+
		"GI\u0001\u0000\u0000\u0000HF\u0001\u0000\u0000\u0000IJ\u0005\"\u0000\u0000"+
		"J\u0006\u0001\u0000\u0000\u0000KL\u0005(\u0000\u0000L\b\u0001\u0000\u0000"+
		"\u0000MN\u0005)\u0000\u0000N\n\u0001\u0000\u0000\u0000OP\u0005{\u0000"+
		"\u0000P\f\u0001\u0000\u0000\u0000QR\u0005}\u0000\u0000R\u000e\u0001\u0000"+
		"\u0000\u0000ST\u0005*\u0000\u0000T\u0010\u0001\u0000\u0000\u0000UV\u0005"+
		"/\u0000\u0000V\u0012\u0001\u0000\u0000\u0000WX\u0005+\u0000\u0000X\u0014"+
		"\u0001\u0000\u0000\u0000YZ\u0005-\u0000\u0000Z\u0016\u0001\u0000\u0000"+
		"\u0000[\\\u0005=\u0000\u0000\\\u0018\u0001\u0000\u0000\u0000]^\u0005i"+
		"\u0000\u0000^_\u0005n\u0000\u0000_`\u0005s\u0000\u0000`a\u0005w\u0000"+
		"\u0000ab\u0005a\u0000\u0000bc\u0005e\u0000\u0000c\u001a\u0001\u0000\u0000"+
		"\u0000de\u0005m\u0000\u0000ef\u0005y\u0000\u0000fg\u0005e\u0000\u0000"+
		"gh\u0005o\u0000\u0000hi\u0005n\u0000\u0000i\u001c\u0001\u0000\u0000\u0000"+
		"jk\u0005n\u0000\u0000kl\u0005a\u0000\u0000lm\u0005m\u0000\u0000mn\u0005"+
		"o\u0000\u0000no\u0005c\u0000\u0000op\u0005h\u0000\u0000pq\u0005i\u0000"+
		"\u0000q\u001e\u0001\u0000\u0000\u0000rs\u0005|\u0000\u0000sy\u0005|\u0000"+
		"\u0000tu\u0005&\u0000\u0000uy\u0005&\u0000\u0000vw\u0005=\u0000\u0000"+
		"wy\u0005=\u0000\u0000xr\u0001\u0000\u0000\u0000xt\u0001\u0000\u0000\u0000"+
		"xv\u0001\u0000\u0000\u0000y \u0001\u0000\u0000\u0000z\u0080\u0007\u0000"+
		"\u0000\u0000{|\u0005<\u0000\u0000|\u0080\u0005=\u0000\u0000}~\u0005>\u0000"+
		"\u0000~\u0080\u0005=\u0000\u0000\u007fz\u0001\u0000\u0000\u0000\u007f"+
		"{\u0001\u0000\u0000\u0000\u007f}\u0001\u0000\u0000\u0000\u0080\"\u0001"+
		"\u0000\u0000\u0000\u0081\u0082\u0005t\u0000\u0000\u0082\u0083\u0005r\u0000"+
		"\u0000\u0083\u0084\u0005u\u0000\u0000\u0084\u008b\u0005e\u0000\u0000\u0085"+
		"\u0086\u0005f\u0000\u0000\u0086\u0087\u0005a\u0000\u0000\u0087\u0088\u0005"+
		"l\u0000\u0000\u0088\u0089\u0005s\u0000\u0000\u0089\u008b\u0005e\u0000"+
		"\u0000\u008a\u0081\u0001\u0000\u0000\u0000\u008a\u0085\u0001\u0000\u0000"+
		"\u0000\u008b$\u0001\u0000\u0000\u0000\u008c\u008e\u0007\u0001\u0000\u0000"+
		"\u008d\u008c\u0001\u0000\u0000\u0000\u008e\u008f\u0001\u0000\u0000\u0000"+
		"\u008f\u008d\u0001\u0000\u0000\u0000\u008f\u0090\u0001\u0000\u0000\u0000"+
		"\u0090&\u0001\u0000\u0000\u0000\u0091\u0093\u0007\u0002\u0000\u0000\u0092"+
		"\u0091\u0001\u0000\u0000\u0000\u0093\u0094\u0001\u0000\u0000\u0000\u0094"+
		"\u0092\u0001\u0000\u0000\u0000\u0094\u0095\u0001\u0000\u0000\u0000\u0095"+
		"(\u0001\u0000\u0000\u0000\u0096\u0098\u0007\u0003\u0000\u0000\u0097\u0096"+
		"\u0001\u0000\u0000\u0000\u0098\u0099\u0001\u0000\u0000\u0000\u0099\u0097"+
		"\u0001\u0000\u0000\u0000\u0099\u009a\u0001\u0000\u0000\u0000\u009a*\u0001"+
		"\u0000\u0000\u0000\u009b\u009d\u0007\u0004\u0000\u0000\u009c\u009b\u0001"+
		"\u0000\u0000\u0000\u009d\u009e\u0001\u0000\u0000\u0000\u009e\u009c\u0001"+
		"\u0000\u0000\u0000\u009e\u009f\u0001\u0000\u0000\u0000\u009f\u00a0\u0001"+
		"\u0000\u0000\u0000\u00a0\u00a1\u0006\u0015\u0000\u0000\u00a1,\u0001\u0000"+
		"\u0000\u0000\n\u0000@Fx\u007f\u008a\u008f\u0094\u0099\u009e\u0001\u0006"+
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