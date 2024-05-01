import antlr4 from 'antlr4'
import MachaCLexer from '../translate/grammar/translate/MachaCLexer.js';
import MachaCParser from '../translate/grammar/translate/MachaCParser.js';
import CustomVisitorT from '../helper/CustomVisitorT.js'

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

        if (msg.includes("no viable alternative at input")) {
            const typeWrong = offendingSymbol.text;
            errorTextarea.value += `Incorrect data type "${typeWrong}" on line ${line}\n`;
            // Hacer que el textarea se desplace automáticamente al final para ver los mensajes más recientes
            errorTextarea.scrollTop = errorTextarea.scrollHeight;
        } else {
            const errorMessage = `Syntax error on line ${line}: ${msg}\n`;
            errorTextarea.value += errorMessage;
            // Agrega la clase para que el texto aparezca en rojo
            errorTextarea.classList.add('text-red-500');
        }
        
        // Limpiar el contenido del textarea después de un tiempo determinado (por ejemplo, 5 segundos)
        setTimeout(() => {
            errorTextarea.value = '';
            // Remueve la clase después de limpiar el textarea
            errorTextarea.classList.remove('text-red-500');
        }, 5000); // 5000 milisegundos = 5 segundos
    }
}

export const translate =(input)=> {
       
const chars = new antlr4.InputStream(input);
const lexer = new MachaCLexer(chars);
lexer.removeErrorListeners();
lexer.addErrorListener(new CustomErrorListener());
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MachaCParser(tokens);
parser.buildParseTrees = true;
const tree = parser.start();
const customVisitor = new CustomVisitorT();

return customVisitor.visitStart(tree);
};
