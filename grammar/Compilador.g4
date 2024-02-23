grammar Compilador;
import CommonRules;

file: start+;

start: CHICHAK '{' content '}';

content: expr 
        |
        declaracion*
        ; 

declaracion: PR GEULSSI 
           | PR GEULSSI '=' expr
           ;        
        
expr: '(' expr ')'                       #parentesis
    |
    expr expr                           #impmulti
    |
    expr operation=(GOPSSEM|NANU) expr  #muldiv
    |
    expr operation=(DO|PPAEDA) expr   #sumres
    |
    GEULSSI                           #geulssi
    |
    SUJJA                             #sujja
    ;

