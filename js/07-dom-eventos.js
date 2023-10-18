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


// querySetectorAll()
const variosElementos = document.querySelectorAll("h3, a");

console.log(variosElementos);
console.log(variosElementos[1]);


// Modificando o DOM

const titulo = document.querySelector("h1");
titulo.textContent = "Olá JavaScript!";
titulo.style.textAlign = "center"; //CSS inline via JS
titulo.classList.add("destaque"); //Classe CSS via JS

/* Selecionando os links contidos na lista */
const linksReferencia = document.querySelectorAll("ul li a");

let quantidadeDeLinks = linksReferencia.length

for (let i = 0; i < quantidadeDeLinks; i++) {
     linksReferencia[i].setAttribute("target","_blank")
}
console.log(linksReferencia);