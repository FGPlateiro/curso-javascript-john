/**
 * Conversão de Notas: Transforme suas notas em símbolos legais! 
 * Crie um programa que atribua letras (como A, B, C) para as notas que você obteve em um teste.
 */

const nota = 3;

if (nota < 0){
    console.log (" nota invalido");
} 
 if (nota <= 3){
    console.log ("Sua nota é C");
}
 if (nota > 3 && nota <= 7){
    console.log ("sua nota é B");
}
 if (nota > 7 ){
    console.log (" sua nota é A")
}