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
		NANU=8, DO=9, PPAEDA=10, EQUALS=11, PRINT=12, IF=13, LOGIC=14, MATH=15, 
		SUJJA=16, GEULSSI=17, CHINCHA=18, GONG=19;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"CHICHAK", "PR", "PARENTH_A", "PARENTH_B", "OPENKEY", "CLOSEKEY", "GOPSSEM", 
			"NANU", "DO", "PPAEDA", "EQUALS", "PRINT", "IF", "LOGIC", "MATH", "SUJJA", 
			"GEULSSI", "CHINCHA", "GONG"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'chichak'", null, "'('", "')'", "'{'", "'}'", "'*'", "'/'", "'+'", 
			"'-'", "'='", "'inswae'", "'myeon'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "CHICHAK", "PR", "PARENTH_A", "PARENTH_B", "OPENKEY", "CLOSEKEY", 
			"GOPSSEM", "NANU", "DO", "PPAEDA", "EQUALS", "PRINT", "IF", "LOGIC", 
			"MATH", "SUJJA", "GEULSSI", "CHINCHA", "GONG"
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
		"\u0004\u0000\u0013\u0080\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001;\b\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0003\rb\b\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0003\u000ei\b\u000e\u0001\u000f\u0004\u000fl\b\u000f\u000b\u000f"+
		"\f\u000fm\u0001\u0010\u0004\u0010q\b\u0010\u000b\u0010\f\u0010r\u0001"+
		"\u0011\u0004\u0011v\b\u0011\u000b\u0011\f\u0011w\u0001\u0012\u0004\u0012"+
		"{\b\u0012\u000b\u0012\f\u0012|\u0001\u0012\u0001\u0012\u0000\u0000\u0013"+
		"\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r"+
		"\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e"+
		"\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\u0001\u0000\u0005\u0002"+
		"\u0000<<>>\u0001\u000009\u0002\u0000AZaz\u0006\u0000*+--/9AZ__az\u0003"+
		"\u0000\t\n\r\r  \u0089\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003"+
		"\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007"+
		"\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001"+
		"\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000"+
		"\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000"+
		"\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000"+
		"\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000"+
		"\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000"+
		"\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000"+
		"\u0000%\u0001\u0000\u0000\u0000\u0001\'\u0001\u0000\u0000\u0000\u0003"+
		":\u0001\u0000\u0000\u0000\u0005<\u0001\u0000\u0000\u0000\u0007>\u0001"+
		"\u0000\u0000\u0000\t@\u0001\u0000\u0000\u0000\u000bB\u0001\u0000\u0000"+
		"\u0000\rD\u0001\u0000\u0000\u0000\u000fF\u0001\u0000\u0000\u0000\u0011"+
		"H\u0001\u0000\u0000\u0000\u0013J\u0001\u0000\u0000\u0000\u0015L\u0001"+
		"\u0000\u0000\u0000\u0017N\u0001\u0000\u0000\u0000\u0019U\u0001\u0000\u0000"+
		"\u0000\u001ba\u0001\u0000\u0000\u0000\u001dh\u0001\u0000\u0000\u0000\u001f"+
		"k\u0001\u0000\u0000\u0000!p\u0001\u0000\u0000\u0000#u\u0001\u0000\u0000"+
		"\u0000%z\u0001\u0000\u0000\u0000\'(\u0005c\u0000\u0000()\u0005h\u0000"+
		"\u0000)*\u0005i\u0000\u0000*+\u0005c\u0000\u0000+,\u0005h\u0000\u0000"+
		",-\u0005a\u0000\u0000-.\u0005k\u0000\u0000.\u0002\u0001\u0000\u0000\u0000"+
		"/0\u0005g\u0000\u000001\u0005e\u0000\u000012\u0005u\u0000\u00002;\u0005"+
		"m\u0000\u000034\u0005h\u0000\u000045\u0005a\u0000\u000056\u0005n\u0000"+
		"\u00006;\u0005a\u0000\u000078\u0005s\u0000\u000089\u0005a\u0000\u0000"+
		"9;\u0005m\u0000\u0000:/\u0001\u0000\u0000\u0000:3\u0001\u0000\u0000\u0000"+
		":7\u0001\u0000\u0000\u0000;\u0004\u0001\u0000\u0000\u0000<=\u0005(\u0000"+
		"\u0000=\u0006\u0001\u0000\u0000\u0000>?\u0005)\u0000\u0000?\b\u0001\u0000"+
		"\u0000\u0000@A\u0005{\u0000\u0000A\n\u0001\u0000\u0000\u0000BC\u0005}"+
		"\u0000\u0000C\f\u0001\u0000\u0000\u0000DE\u0005*\u0000\u0000E\u000e\u0001"+
		"\u0000\u0000\u0000FG\u0005/\u0000\u0000G\u0010\u0001\u0000\u0000\u0000"+
		"HI\u0005+\u0000\u0000I\u0012\u0001\u0000\u0000\u0000JK\u0005-\u0000\u0000"+
		"K\u0014\u0001\u0000\u0000\u0000LM\u0005=\u0000\u0000M\u0016\u0001\u0000"+
		"\u0000\u0000NO\u0005i\u0000\u0000OP\u0005n\u0000\u0000PQ\u0005s\u0000"+
		"\u0000QR\u0005w\u0000\u0000RS\u0005a\u0000\u0000ST\u0005e\u0000\u0000"+
		"T\u0018\u0001\u0000\u0000\u0000UV\u0005m\u0000\u0000VW\u0005y\u0000\u0000"+
		"WX\u0005e\u0000\u0000XY\u0005o\u0000\u0000YZ\u0005n\u0000\u0000Z\u001a"+
		"\u0001\u0000\u0000\u0000[\\\u0005|\u0000\u0000\\b\u0005|\u0000\u0000]"+
		"^\u0005&\u0000\u0000^b\u0005&\u0000\u0000_`\u0005=\u0000\u0000`b\u0005"+
		"=\u0000\u0000a[\u0001\u0000\u0000\u0000a]\u0001\u0000\u0000\u0000a_\u0001"+
		"\u0000\u0000\u0000b\u001c\u0001\u0000\u0000\u0000ci\u0007\u0000\u0000"+
		"\u0000de\u0005<\u0000\u0000ei\u0005=\u0000\u0000fg\u0005>\u0000\u0000"+
		"gi\u0005=\u0000\u0000hc\u0001\u0000\u0000\u0000hd\u0001\u0000\u0000\u0000"+
		"hf\u0001\u0000\u0000\u0000i\u001e\u0001\u0000\u0000\u0000jl\u0007\u0001"+
		"\u0000\u0000kj\u0001\u0000\u0000\u0000lm\u0001\u0000\u0000\u0000mk\u0001"+
		"\u0000\u0000\u0000mn\u0001\u0000\u0000\u0000n \u0001\u0000\u0000\u0000"+
		"oq\u0007\u0002\u0000\u0000po\u0001\u0000\u0000\u0000qr\u0001\u0000\u0000"+
		"\u0000rp\u0001\u0000\u0000\u0000rs\u0001\u0000\u0000\u0000s\"\u0001\u0000"+
		"\u0000\u0000tv\u0007\u0003\u0000\u0000ut\u0001\u0000\u0000\u0000vw\u0001"+
		"\u0000\u0000\u0000wu\u0001\u0000\u0000\u0000wx\u0001\u0000\u0000\u0000"+
		"x$\u0001\u0000\u0000\u0000y{\u0007\u0004\u0000\u0000zy\u0001\u0000\u0000"+
		"\u0000{|\u0001\u0000\u0000\u0000|z\u0001\u0000\u0000\u0000|}\u0001\u0000"+
		"\u0000\u0000}~\u0001\u0000\u0000\u0000~\u007f\u0006\u0012\u0000\u0000"+
		"\u007f&\u0001\u0000\u0000\u0000\b\u0000:ahmrw|\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}