// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,14,85,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,59,8,6,1,7,1,
7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,4,11,70,8,11,11,11,12,11,71,1,12,4,12,75,
8,12,11,12,12,12,76,1,13,4,13,80,8,13,11,13,12,13,81,1,13,1,13,0,0,14,1,
1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,1,0,
3,1,0,48,57,6,0,42,43,45,45,47,57,65,90,95,95,97,122,3,0,9,10,13,13,32,32,
89,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,
0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,1,29,1,0,0,0,3,31,1,0,0,0,5,33,1,0,0,0,
7,35,1,0,0,0,9,37,1,0,0,0,11,39,1,0,0,0,13,58,1,0,0,0,15,60,1,0,0,0,17,62,
1,0,0,0,19,64,1,0,0,0,21,66,1,0,0,0,23,69,1,0,0,0,25,74,1,0,0,0,27,79,1,
0,0,0,29,30,5,123,0,0,30,2,1,0,0,0,31,32,5,125,0,0,32,4,1,0,0,0,33,34,5,
61,0,0,34,6,1,0,0,0,35,36,5,40,0,0,36,8,1,0,0,0,37,38,5,41,0,0,38,10,1,0,
0,0,39,40,5,99,0,0,40,41,5,104,0,0,41,42,5,105,0,0,42,43,5,99,0,0,43,44,
5,104,0,0,44,45,5,97,0,0,45,46,5,107,0,0,46,12,1,0,0,0,47,48,5,103,0,0,48,
49,5,101,0,0,49,50,5,117,0,0,50,59,5,109,0,0,51,52,5,104,0,0,52,53,5,97,
0,0,53,54,5,110,0,0,54,59,5,97,0,0,55,56,5,115,0,0,56,57,5,97,0,0,57,59,
5,109,0,0,58,47,1,0,0,0,58,51,1,0,0,0,58,55,1,0,0,0,59,14,1,0,0,0,60,61,
5,42,0,0,61,16,1,0,0,0,62,63,5,47,0,0,63,18,1,0,0,0,64,65,5,43,0,0,65,20,
1,0,0,0,66,67,5,45,0,0,67,22,1,0,0,0,68,70,7,0,0,0,69,68,1,0,0,0,70,71,1,
0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,24,1,0,0,0,73,75,7,1,0,0,74,73,1,0,
0,0,75,76,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,26,1,0,0,0,78,80,7,2,0,
0,79,78,1,0,0,0,80,81,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,83,1,0,0,0,
83,84,6,13,0,0,84,28,1,0,0,0,5,0,58,71,76,81,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CompiladorLexer extends antlr4.Lexer {

    static grammarFileName = "Compilador.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'{'", "'}'", "'='", "'('", "')'", "'chichak'", 
                         null, "'*'", "'/'", "'+'", "'-'" ];
	static symbolicNames = [ null, null, null, null, null, null, "CHICHAK", 
                          "PR", "GOPSSEM", "NANU", "DO", "PPAEDA", "SUJJA", 
                          "GEULSSI", "GONG" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "CHICHAK", 
                      "PR", "GOPSSEM", "NANU", "DO", "PPAEDA", "SUJJA", 
                      "GEULSSI", "GONG" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CompiladorLexer.EOF = antlr4.Token.EOF;
CompiladorLexer.T__0 = 1;
CompiladorLexer.T__1 = 2;
CompiladorLexer.T__2 = 3;
CompiladorLexer.T__3 = 4;
CompiladorLexer.T__4 = 5;
CompiladorLexer.CHICHAK = 6;
CompiladorLexer.PR = 7;
CompiladorLexer.GOPSSEM = 8;
CompiladorLexer.NANU = 9;
CompiladorLexer.DO = 10;
CompiladorLexer.PPAEDA = 11;
CompiladorLexer.SUJJA = 12;
CompiladorLexer.GEULSSI = 13;
CompiladorLexer.GONG = 14;



