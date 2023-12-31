"use strict"

/* 
Comandos de Repetição
Instruções para realizar ações por uma quantidade específica de vezes.

Comandos Tradicionais
- while     -> ENQUANTO
- do/while  -> FAÇA/ENQUANTO
- for       -> PARA
Obs.: Normalamente o loop é controlado através de uma variável contadora.
*/

// let contador = 1;
// while (contador <=5) {
//     console.log(`Valor de contador: ${contador}`);
//     contador++; // ++ incremento
// }

/* Obs.: normalmente variáveis de controle
de repetição são chamadas de i, j ou k. */


// EXEMPLO DO/WHILE (FAÇA/ENQUANTO)

// let i = 1;
// do {
//     console.log(`i vale: ${i}`);
//     i++;
// } while (i <= 3);

// EXEMPLO FOR (PARA)
// for(let i = 1; i <=10; i++){
//     console.log(`i vale ${i}`);
// }

/* Lopp com array */

let clientes = [
                "Ozzy", 
                "Dio", 
                "Gillan", 
                "Martin", 
                "Hughes",
                "Fulano",
                "Beltrano",
];

// Cache/"Memória" da quantidade do elementos do array
let quantidade = clientes.length;

for(let i = 0; i < quantidade; i++)
    console.log(`Clientes: ${clientes[i]}`);


console.log("-----------");


// for/of = > para arrays

let bandas = ["Slayer", "Dream Theater", "Nightwish"]

for(let banda of bandas) {
    console.log(banda);
}

// for/in - > Objetos

let livro = {
    titulo: "HTML5",
    autor: "Maujor",
    site: "http://maujor.com",
    ano: 2016,
    editora: "Novatec",
    edicao: 3
}
console.log("-----------------");

// para DADOS dentro/em LIVRO. 
for(let dados  in livro){
// Acessar Apenas a propriedade
    // console.log(dados);

    // Acessar VALOR de cada propriedade
    // console.log(livro[dados]);

    console.log(`${dados} -> ${livro[dados]}`);
}