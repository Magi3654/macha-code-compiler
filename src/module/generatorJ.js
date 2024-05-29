import antlr4 from 'antlr4'
import MachaJazLexer from '../jasmin/grammar/MachaJazLexer.js';
import MachaJazParser from '../jasmin/grammar/MachaJazParser.js';
import CustomVisitorJ from '../helper/CustomVisitorJ.js'

export const jasmin =(input)=> {
       
const chars = new antlr4.InputStream(input);
const lexer = new MachaJazLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MachaJazParser(tokens);
parser.buildParseTrees = true;
const tree = parser.start();
const customVisitor = new CustomVisitorJ();

return customVisitor.visitStart(tree);
};
