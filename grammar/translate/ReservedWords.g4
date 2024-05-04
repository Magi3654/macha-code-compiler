lexer grammar ReservedWords;

PR             :'int'
               |'float'
               |'char'
               ;

PARENTH_A      :        '(';
PARENTH_B      :        ')';
OPENKEY        :        '{';
CLOSEKEY       :        '}';
EQUALS         :       '=' ;
MULTI          :       '*' ;
DIV            :       '/' ;
SUM            :       '+' ;
MIN            :       '-' ;
DOUBLE_QUOTE   :       '"' ;
SEMICOLON      :        ';';
PORCENT        :        '%';
IF             :       'if';
ELSE           :     'else'; 
WHILE          :    'while';
LOGIC          :    ('||'|'&&'|'=='|'%');
BOOLEAN        :    ('true'|'false');
MATH           :    ('<'|'>'|'<='|'>='|'!=');
PRINT          :   'printf';
MAIN           :    'void main';
CHAR           :    '"'[a-zA-Z]'"';
INT            :    [0-9]+;
FLOAT          : [0-9]+[.][0-9]+;
STRING         :  '"' .*? '"' ;
ID             : [a-zA-Z]([a-zA-Z0-9_]+)?;
INVID          : [A-Za-z0-9]+;
WS             : [ \t\r\n]+ -> skip;
