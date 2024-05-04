grammar MachaC;
import ReservedWords;

file: start+;

start: MAIN PARENTH_A PARENTH_B OPENKEY content CLOSEKEY ;

content: main*;

main: declaracion SEMICOLON
    |asignacion SEMICOLON
    |condicionalBucle 
    |while
    |impresion SEMICOLON
    |incremento
    ;

declaracion : PR ID (EQUALS expr)? ;

asignacion : ID EQUALS expr;

impresion: PRINT PARENTH_A expr PARENTH_B;

expr: PARENTH_A expr PARENTH_B                    
    | expr operation=(MULTI | DIV | PORCENT) expr        
    | expr operation=(SUM | MIN ) expr 
    |BOOLEAN                
    |expr simbolo=(LOGIC|MATH) expr                 
    | ID                                   
    | INT                                 
    | STRING                                     
    ;

incremento: ID WS? (SUM SUM | MIN MIN)
            ;

condicionalBucle: condicional condicionalElseIf* condicionalElse?;

condicional: IF PARENTH_A expr PARENTH_B OPENKEY main* CLOSEKEY; 

condicionalElseIf: ELSE condicional;

condicionalElse: ELSE OPENKEY main* CLOSEKEY; 

while: WHILE PARENTH_A expr PARENTH_B OPENKEY main* CLOSEKEY;

