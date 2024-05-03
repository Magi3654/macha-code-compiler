import antlr4 from 'antlr4'
import MachaCLexer from '../translate/grammar/translate/MachaCLexer.js';
import MachaCParser from '../translate/grammar/translate/MachaCParser.js';
import CustomVisitorT from '../helper/CustomVisitorT.js'

export const translate =(input)=> {
       
const chars = new antlr4.InputStream(input);
const lexer = new MachaCLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MachaCParser(tokens);
parser.buildParseTrees = true;
const tree = parser.start();
const customVisitor = new CustomVisitorT();

return customVisitor.visitStart(tree);
};
