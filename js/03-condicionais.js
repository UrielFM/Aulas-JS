/* Estruturas de Controle Condicional
Comandos que permitem analizar uma ou mias condições.
E a partir do resultado desta análise (verdadeiro ou falso),
o programa pode executar ações diferentes. 

Comandos mais comuns: if(se), else(senão), else if (senão se)
*/

let usuario = prompt("Qual é seu nome?");
let idade = prompt("Quantos anos vocè tem?");
let mensagem; // indefinida/underfined

// Verificar a idade e determinar se é menos ou maior de idade

if( idade >= 18 ) {
    mensagem = "maior";
} else {
    mensagem = "menor";
}

// Apresentando os resultados APÓS a condicional
console.log( `${usuario} é ${mensagem} de idade!`);