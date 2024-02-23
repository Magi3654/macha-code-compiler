grammar Compilador;
import CommonRules;

file: start+;

start: CHICHAK '{' content '}';

content: expr 
        |
        declaracion*
        ; 

declaracion: PR GEULSSI | PR GEULSSI '=' expr;        
        
expr: '(' expr ')' 
    |
    expr expr
    |
    expr operation=(GOPSSEM|NANU) expr
    |
    expr operation=(DO|PPAEDA) expr
    |
    GEULSSI
    ;

