/* Habilitando o modo estrito do JS */

"use strict";

var nota1 = 3;
var nota2 = 9;
var mediaNotas = ( nota1 + nota2)/2;
var mensagem;


if( mediaNotas >= 7){
    mensagem = "Aprovado";
} else if (mediaNotas >= 5){
    mensagem = "Recuperação";
} else {
    mensagem = "Reprovado";
}

console.log(`Sua media foi ${mediaNotas} por isso você está ${mensagem}`);
// alert(`Sua media foi ${mediaNotas} por isso você está ${mensagem}`);

