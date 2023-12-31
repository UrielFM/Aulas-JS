"use strict"

// Requisitos da escola para aprovação.
const mediaMinima = 7;
const limiteDeFaltas = 10;

// Resultados do aluno fictício
let aluno = "Jean";
let mediaFinal = 7.5;
let faltas = 15;
let resutado;

/* Operador lógico && (AND - E) */
// if (mediaFinal >= mediaMinima && faltas <= limiteDeFaltas ){
//     resultado = "Aprovado"
// } else {
//     resultado = "Reprovado"
// }

// if (mediaFinal >= mediaMinima && faltas <= limiteDeFaltas) {
//     resutado = "Aprovado;"
// } else if (faltas > limiteDeFaltas) {
//     resutado = "Reprovado por Faltas";
// } else if (mediaFinal < mediaMinima) {
//     resutado = "Reprovado por nota"
// } else {
//     resutado = "Reprovado";
// }


if (faltas > limiteDeFaltas) {
    resutado = "Reprovado por faltas";
} else if (mediaFinal >= mediaMinima){
    resutado = "Aprovado";
} else {
    resutado = "Reprovado";
}


console.log(`Ó aluno ${aluno} está ${resutado}.`);
console.log(`Média do aluno: ${mediaFinal}.`);
console.log(`Faltas do aluno ${faltas}.`);

console.log("-----------------------------------------------------");

/* Operador lógico || (OR - OU) */

let diaDaSemana = "sábado";

if(diaDaSemana == "sábado" || diaDaSemana == "domingo") {
    console.log( "Final de semana");
} else {
    console.log("Dia da semana");
}

console.log("-----------------------------------------------------");

/* Operador lógico ! (NOT - NÃO/NEGAÇÃO) */

let blackFriday = true;

if ( !blackFriday) {
   console.log("Preços normais...");
} else {
    console.log("Preços com descontos...");
}

