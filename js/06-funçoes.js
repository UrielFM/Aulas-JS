"use strict"

console.log("Funções!");

/* Sobre Funções

Funções são blocos de codigos que podem ser executados e reaproveitados em praticamente qualquer lugar de uma aplicação/site.

Usar funções também é benéfico do ponto de vista de organização de códigos.

O JS ja possui centenas de funções prontas.

Exemplos:
prompt()
log()
alert()
toFixed()
etc

Como escrever funções no JS?
*/

// Forma 1: função anônima
const exemplo1 = function name(params) {

    console.log("Função anônima");
    
}

// Forma 2: função nomeada/declarada
function exemplo2(params) {
    console.log("Função nomeada/declarada");
    
}

// Forma 3: arrow fuction
const exemplo3 = () => {
    console.log("Arrow Function");
};

// Chmada de função:

exemplo1();
exemplo2();
exemplo3();

/* Exemplos diversos */


/* Função com paramentros e retorno de dados/rsultados */
function somar(valor1, valor2) {
    return valor1 + valor2;
}

/* Chamamos a função diversas vezes e passando valores diferentes como parametros. */
console.log(somar(10,20));
console.log(somar(15,50));
console.log(somar(30,47.8));

/* Formatação de valores em Reias */

let preco = 1000;
let desconto = preco * 0.10; //10%
let precoFinal = preco - desconto;

console.log(`Preço: ${preco.toLocaleString()}`);
console.log(`Desconto: ${desconto.toLocaleString()}`);
console.log(`Preço final: ${precoFinal.toLocaleString()}`);
