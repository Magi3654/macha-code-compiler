grammar Compilador;
import CommonRules;

file: start+;

start: CHICHAK '{' content '}';

content: main*;

main: declaracion
    | asignacion
    | impresion
    | ddaeng
    ;

declaracion: PR GEULSSI ('=' expr)? #validAssign
           | PR ID = (CHINCHA | SUJJA) ('=' expr)? #invalidAssign
           ;
           
asignacion: PR GEULSSI '=' expr;

expr: '(' expr ')'                       #parentesis
    | expr operation=(GOPSSEM | NANU) expr         #muldiv
    | expr operation=(DO | PPAEDA) expr            #sumres
    | GEULSSI                             #geulssi
    | SUJJA                               #sujja
    |expr expr                            #implicitMult
    ;


ddaeng: .+?;  

impresion: PRINT '(' expr ')';
