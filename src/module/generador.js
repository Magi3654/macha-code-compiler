import antlr4 from 'antlr4'
import CompiladorLexer from '../grammar/CompiladorLexer.js';
import CompiladorParser from '../grammar/CompiladorParser.js';
import CustomVisitor from '../helper/CustomVisitor.js'

export const analizar =(input)=> {
       
const chars = new antlr4.InputStream(input);
const lexer = new CompiladorLexer(chars)
const tokens = new antlr4.CommonTokenStream(lexer)
const parser = new CompiladorParser(tokens)
parser.buildParseTrees = true;
const tree = parser.start();
const customVisitor = new CustomVisitor();

return customVisitor.visitStart(tree);
};

