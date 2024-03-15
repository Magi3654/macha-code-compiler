lexer grammar CommonRules;

CHICHAK: 'chichak'; // MAIN O INICIO
// Ignorar espacios en blanco
PR             :'geum'
               |'hana'
               |'sam'
               ;
                //geum - entero, hana - float, sam - char

PARENTH_A: '(';
PARENTH_B: ')';
OPENKEY: '{';
CLOSEKEY:'}';
GOPSSEM        :       '*' ;
NANU           :       '/' ;
DO             :       '+' ;
PPAEDA         :       '-' ;
EQUALS         :       '=' ;
PRINT          :   'inswae';
IF             :    'myeon'; 
LOGIC          :    ('||'|'&&'|'==');
MATH           :    ('<'|'>'|'<='|'>=');
SUJJA: [0-9]+; //NUMEROS 
GEULSSI: [a-zA-Z]+; //ID O LETRAS
CHINCHA :[a-zA-Z0-9_+\-*/]+;
GONG:[ \t\r\n]+ -> skip; 