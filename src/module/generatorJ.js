import antlr4 from 'antlr4'
// import MachaJazLexer from '../jasmin/grammar/MachaJazLexer.js';
// import MachaJazParser from '../jasmin/grammar/MachaJazParser.js';
import CompiladorLexer from '../grammar/CompiladorLexer.js';
import CompiladorParser from '../grammar/CompiladorParser.js';
import CustomVisitorJ from '../helper/CustomVisitorJ.js'

export const jasmin =(input)=> {
       
const chars = new antlr4.InputStream(input);
const lexer = new CompiladorLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new CompiladorParser(tokens);
parser.buildParseTrees = true;
const tree = parser.start();
const customVisitor = new CustomVisitorJ();

return customVisitor.visitStart(tree);
};
