lexer grammar CommonRules;

CHICHAK: 'chichak'; // MAIN O INICIO
// Ignorar espacios en blanco
PR             :'geum'
               |'hana'
               |'sam'
               ;
                //geum - entero, hana - float, sam - char
GOPSSEM        :       '*' ;
NANU           :       '/' ;
DO             :       '+' ;
PPAEDA         :       '-' ;

SUJJA: [0-9]+; //NUMEROS 

GEULSSI: [a-zA-Z0-9_+\-*/]+; //ID O LETRAS

GONG:[ \t\r\n]+ -> skip; 