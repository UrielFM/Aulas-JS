"use strict"

// Requisitos da escola para aprovação.
const mediaMinima = 7;
const limiteDeFaltas = 10;

// Resultados do aluno fictício
let aluno = "Jean";
let mediaFinal = 2.5;
let faltas = 10;
let resutado;

/* Operador lógico && (AND - E) */
// if (mediaFinal >= mediaMinima && faltas <= limiteDeFaltas ){
//     resultado = "Aprovado"
// } else {
//     resultado = "Reprovado"
// }

if (mediaFinal >= mediaMinima && faltas <= limiteDeFaltas) {
    resutado = "Aprovado;"
} else if (faltas > limiteDeFaltas) {
    resutado = "Reprovado por Faltas";
} else if (mediaFinal < mediaMinima) {
    resutado = "Reprovado por nota"
} else {
    resutado = "Reprovado";
}

console.log(`Ó aluno ${aluno} está ${resutado}.`);
console.log(`Média do aluno: ${mediaFinal}.`);
console.log(`Faltas do aluno ${faltas}.`);