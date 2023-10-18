"use strict"

/* Funções de seleção no DOM

-getElementById()
Seleciona UM elemento atraves de um ID.

-querySelector()
Seleciona UM elemento atravès de um seletor.

-querySetectorAll()
Seleciona VÁRIOS elemento atravès de um/vários seletor(es).
*/

/* Exemplos */

// getElementById()
const subtitulo = document.getElementById("subtitulo-dom");
console.log(subtitulo);


// querySelector()
const desenho = document.querySelector("figure");
const descricao =  document.querySelector("#descricao-dom");

console.log(desenho);
console.log(descricao);


// 