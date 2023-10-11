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


// EXEMPLO DO/WHILE (FAÇA/ENQUANTO)

let i = 1;
do {
    console.log(`i vale: ${i}`);
    i++;
} while (i <= 3);