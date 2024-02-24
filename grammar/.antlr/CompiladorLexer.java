// Generated from /home/mrsmin/Escritorio/automatas/automatas 2/lecture02/grammar/Compilador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CompiladorLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, CHICHAK=6, PR=7, GOPSSEM=8, NANU=9, 
		DO=10, PPAEDA=11, SUJJA=12, GEULSSI=13, CHINCHA=14, GONG=15;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "CHICHAK", "PR", "GOPSSEM", "NANU", 
			"DO", "PPAEDA", "SUJJA", "GEULSSI", "CHINCHA", "GONG"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'{'", "'}'", "'='", "'('", "')'", "'chichak'", null, "'*'", "'/'", 
			"'+'", "'-'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, "CHICHAK", "PR", "GOPSSEM", "NANU", 
			"DO", "PPAEDA", "SUJJA", "GEULSSI", "CHINCHA", "GONG"
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


	public CompiladorLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Compilador.g4"; }

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
		"\u0004\u0000\u000f\\\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006=\b"+
		"\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n"+
		"\u0001\n\u0001\u000b\u0004\u000bH\b\u000b\u000b\u000b\f\u000bI\u0001\f"+
		"\u0004\fM\b\f\u000b\f\f\fN\u0001\r\u0004\rR\b\r\u000b\r\f\rS\u0001\u000e"+
		"\u0004\u000eW\b\u000e\u000b\u000e\f\u000eX\u0001\u000e\u0001\u000e\u0000"+
		"\u0000\u000f\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b"+
		"\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b"+
		"\u000e\u001d\u000f\u0001\u0000\u0004\u0001\u000009\u0002\u0000AZaz\u0006"+
		"\u0000*+--/9AZ__az\u0003\u0000\t\n\r\r  a\u0000\u0001\u0001\u0000\u0000"+
		"\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000"+
		"\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000"+
		"\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000"+
		"\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000"+
		"\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000"+
		"\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000"+
		"\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0001"+
		"\u001f\u0001\u0000\u0000\u0000\u0003!\u0001\u0000\u0000\u0000\u0005#\u0001"+
		"\u0000\u0000\u0000\u0007%\u0001\u0000\u0000\u0000\t\'\u0001\u0000\u0000"+
		"\u0000\u000b)\u0001\u0000\u0000\u0000\r<\u0001\u0000\u0000\u0000\u000f"+
		">\u0001\u0000\u0000\u0000\u0011@\u0001\u0000\u0000\u0000\u0013B\u0001"+
		"\u0000\u0000\u0000\u0015D\u0001\u0000\u0000\u0000\u0017G\u0001\u0000\u0000"+
		"\u0000\u0019L\u0001\u0000\u0000\u0000\u001bQ\u0001\u0000\u0000\u0000\u001d"+
		"V\u0001\u0000\u0000\u0000\u001f \u0005{\u0000\u0000 \u0002\u0001\u0000"+
		"\u0000\u0000!\"\u0005}\u0000\u0000\"\u0004\u0001\u0000\u0000\u0000#$\u0005"+
		"=\u0000\u0000$\u0006\u0001\u0000\u0000\u0000%&\u0005(\u0000\u0000&\b\u0001"+
		"\u0000\u0000\u0000\'(\u0005)\u0000\u0000(\n\u0001\u0000\u0000\u0000)*"+
		"\u0005c\u0000\u0000*+\u0005h\u0000\u0000+,\u0005i\u0000\u0000,-\u0005"+
		"c\u0000\u0000-.\u0005h\u0000\u0000./\u0005a\u0000\u0000/0\u0005k\u0000"+
		"\u00000\f\u0001\u0000\u0000\u000012\u0005g\u0000\u000023\u0005e\u0000"+
		"\u000034\u0005u\u0000\u00004=\u0005m\u0000\u000056\u0005h\u0000\u0000"+
		"67\u0005a\u0000\u000078\u0005n\u0000\u00008=\u0005a\u0000\u00009:\u0005"+
		"s\u0000\u0000:;\u0005a\u0000\u0000;=\u0005m\u0000\u0000<1\u0001\u0000"+
		"\u0000\u0000<5\u0001\u0000\u0000\u0000<9\u0001\u0000\u0000\u0000=\u000e"+
		"\u0001\u0000\u0000\u0000>?\u0005*\u0000\u0000?\u0010\u0001\u0000\u0000"+
		"\u0000@A\u0005/\u0000\u0000A\u0012\u0001\u0000\u0000\u0000BC\u0005+\u0000"+
		"\u0000C\u0014\u0001\u0000\u0000\u0000DE\u0005-\u0000\u0000E\u0016\u0001"+
		"\u0000\u0000\u0000FH\u0007\u0000\u0000\u0000GF\u0001\u0000\u0000\u0000"+
		"HI\u0001\u0000\u0000\u0000IG\u0001\u0000\u0000\u0000IJ\u0001\u0000\u0000"+
		"\u0000J\u0018\u0001\u0000\u0000\u0000KM\u0007\u0001\u0000\u0000LK\u0001"+
		"\u0000\u0000\u0000MN\u0001\u0000\u0000\u0000NL\u0001\u0000\u0000\u0000"+
		"NO\u0001\u0000\u0000\u0000O\u001a\u0001\u0000\u0000\u0000PR\u0007\u0002"+
		"\u0000\u0000QP\u0001\u0000\u0000\u0000RS\u0001\u0000\u0000\u0000SQ\u0001"+
		"\u0000\u0000\u0000ST\u0001\u0000\u0000\u0000T\u001c\u0001\u0000\u0000"+
		"\u0000UW\u0007\u0003\u0000\u0000VU\u0001\u0000\u0000\u0000WX\u0001\u0000"+
		"\u0000\u0000XV\u0001\u0000\u0000\u0000XY\u0001\u0000\u0000\u0000YZ\u0001"+
		"\u0000\u0000\u0000Z[\u0006\u000e\u0000\u0000[\u001e\u0001\u0000\u0000"+
		"\u0000\u0006\u0000<INSX\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}