grammar Compilador;
import CommonRules;

file: start+;

start: CHICHAK OPENKEY content CLOSEKEY;

content: main*;

main: declaracion
    | asignacion
    | condicionalBucle
    | impresion

    ;

declaracion: PR GEULSSI (EQUALS expr)?                #validAssign
           | PR ID = (CHINCHA | SUJJA) (EQUALS expr)? #invalidAssign
           ;
           
asignacion: PR GEULSSI EQUALS expr;

impresion: PRINT PARENTH_A expr PARENTH_B;

expr: PARENTH_A expr PARENTH_B                      #parentesis
    | expr operation=(GOPSSEM | NANU) expr          #muldiv
    | expr operation=(DO | PPAEDA) expr             #sumres
    |simbolo=(LOGIC|MATH|BOOLEAN)                   #condicion
    |expr simbolo=(LOGIC|MATH|BOOLEAN) expr         #condicion
    | GEULSSI                                       #geulssi
    | SUJJA                                         #sujja
    | STRING                                        #string
    |expr expr                                      #implicitMult
    ;



condicionalBucle: condicional condicionalElseIf* condicionalElse?;

condicional: IF PARENTH_A expr PARENTH_B OPENKEY main* CLOSEKEY; 

condicionalElseIf: ELSE condicional;

condicionalElse: ELSE OPENKEY main* CLOSEKEY; 



//ddaeng: .+?; 
