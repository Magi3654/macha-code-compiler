grammar Compilador;
import CommonRules;

file: start+;

start: CHICHAK OPENKEY content CLOSEKEY;

content: main*;

main: declaracion
    | asignacion
    | impresion
    | condicional
    | ddaeng

    ;

declaracion: PR GEULSSI (EQUALS expr)?                #validAssign
           | PR ID = (CHINCHA | SUJJA) (EQUALS expr)? #invalidAssign
           ;
           
asignacion: PR GEULSSI EQUALS expr;

expr: PARENTH_A expr PARENTH_B                     #parentesis
    | expr operation=(GOPSSEM | NANU) expr         #muldiv
    | expr operation=(DO | PPAEDA) expr            #sumres
    | GEULSSI                                      #geulssi
    | SUJJA                                        #sujja
    |expr expr                                     #implicitMult
    ;


 
impresion: PRINT PARENTH_A expr PARENTH_B;

condicional: IF PARENTH_A condicion PARENTH_B OPENKEY main* CLOSEKEY;

condicion: expr simbolo=(LOGIC|MATH) expr;
ddaeng: .+?; 
