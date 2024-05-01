grammar MachaC;
import ReservedWords;

file: start+;

start: MAIN PARENTH_A PARENTH_B OPENKEY content CLOSEKEY SEMICOLON;

content: main*;

main: declaracion
    |asignacion
    |condicionalBucle
    |impresion 
    ;

declaracion : ID (EQUALS expr)? ;

asignacion : ID EQUALS expr;

impresion: PRINT PARENTH_A expr PARENTH_B;

expr: PARENTH_A expr PARENTH_B                     #parentesis
    | expr operation=(MULTI | DIV) expr         #muldiv
    | expr operation=(SUM | MIN ) expr            #sumres
    | ID                                      #geulssi
    | INT                                      #sujja
    | STRING                                       #string
    |expr expr                                     #implicitMult
    ;

condicionalBucle: condicional condicionalElseIf* condicionalElse?;

condicional: IF PARENTH_A expr PARENTH_B OPENKEY main* CLOSEKEY; 

condicionalElseIf: ELSE condicional;

condicionalElse: ELSE OPENKEY main* CLOSEKEY; 
