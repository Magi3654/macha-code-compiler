grammar Compilador;
import CommonRules;

file: start+;

start: CHICHAK OPENKEY content CLOSEKEY;

content: main*;

main: declaracion
    | asignacion
    | condicionalBucle
    | while
    | for
    | impresion
    | incremento
    ;

declaracion: PR GEULSSI (EQUALS expr)?                #validAssign
           | PR ID = (CHINCHA | SUJJA) (EQUALS expr)? #invalidAssign
           ;
           
asignacion: GEULSSI EQUALS expr                       #simpleAssign
            | GEULSSI SUMARIZER expr                  #sumarizerAssign
            ;

impresion: PRINT PARENTH_A expr PARENTH_B;

expr: PARENTH_A expr PARENTH_B                      #parentesis
    | expr operation=(GOPSSEM|NANU|PORCENT) expr    #muldiv
    | expr operation=(DO | PPAEDA) expr             #sumres
    |operation=(DO | PPAEDA) expr                   #snumber
    |simbolo=(LOGIC|MATH|BOOLEAN)                   #condicion
    |expr simbolo=(LOGIC|MATH|BOOLEAN) expr         #condicion
    | expr simbolo=(AND|OR) expr                    #compando
    | GEULSSI                                       #geulssi
    | SUJJA                                         #sujja
    | STRING                                        #string
    ;

incremento: GEULSSI GONG? (DO DO |PPAEDA PPAEDA);


condicionalBucle: condicional condicionalElseIf* condicionalElse?;

condicional: IF PARENTH_A expr PARENTH_B OPENKEY main* CLOSEKEY; 

condicionalElseIf: ELSE condicional;

condicionalElse: ELSE OPENKEY main* CLOSEKEY; 

while: WHILE PARENTH_A expr PARENTH_B OPENKEY main* CLOSEKEY;

for: FOR PARENTH_A declaracion  expr incremento PARENTH_B OPENKEY main CLOSEKEY;




