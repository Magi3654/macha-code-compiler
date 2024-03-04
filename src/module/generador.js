import antlr4 from 'antlr4'
import CompiladorLexer from '../grammar/CompiladorLexer.js';
import CompiladorParser from '../grammar/CompiladorParser.js';
import CustomVisitor from '../helper/CustomVisitor.js'

class CustomErrorListener extends antlr4.error.ErrorListener {
    // Funcion para reconocer errores
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        /*
            # recognizer        : Objeto de reconocimiento que se está analizando en el momento
            # offendingSymbol   : El token que causó el error de sintaxis.
            # line              : Número de línea donde surgió el error.
            # column            : Columna donde ocurrió el error.
            # msg               : Mensaje de error que describe la naturaleza del problema.
            # e                 : La excepción asociada al error, si está disponible.
        */
        
        const errorTextarea = document.getElementById('consola');
		//const contenedorError = document.getElementById('contenedorError');

        if(msg.includes("no viable alternative at input")){
            const typeWrong = offendingSymbol.text;
            errorTextarea.innerHTML += `Incorrect data type "${typeWrong}" on line ${line} <br>`;
		    //contenedorError.classList.remove('hidden');
        }
        else{
            errorTextarea.innerHTML += `Syntax error on line ${line}: ${msg} <br>`;
            //contenedorError.classList.remove('hidden');
            console.log(`Syntax error on line ${line}: ${msg}`);
            
            // Error que detiene el proceso
            // throw new Error(`Syntax error on line ${line}: ${msg}`);
        }
    }
}

export const analizar =(input)=> {
       
const chars = new antlr4.InputStream(input);
const lexer = new CompiladorLexer(chars);
lexer.removeErrorListeners();
lexer.addErrorListener(new CustomErrorListener());
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new CompiladorParser(tokens);
parser.removeErrorListeners();
parser.addErrorListener(new CustomErrorListener());
parser.buildParseTrees = true;
const tree = parser.start();
const customVisitor = new CustomVisitor();

return customVisitor.visitStart(tree);
};

