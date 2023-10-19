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
console.log(linksReferencia);

// let quantidadeDeLinks = linksReferencia.length

/* for (let i = 0; i < quantidadeDeLinks; i++) {
     linksReferencia[i].setAttribute("target","_blank")
} */

for(let link of linksReferencia){
    link.setAttribute("target", "_blank")
}

/* Manipulando Eventos */

const pagina = document.querySelector("body");
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");

// Ouvinte de evento
exemplo01.addEventListener("click", function(){
    pagina.style.fontFamily = "Verdana";
    mensagem.textContent = "Fonte Alterada!";
    mensagem.style.backgroundColor = "yellow";
});

/* var audio = new Audio('audio.mp3');
audio.addEventListener('canplaythrough', function() {
  audio.play();
});

const music = new Audio('adf.wav');
music.play();
music.loop =true;
music.playbackRate = 2;
music.pause();qqazszdgfbgtyj; */


// var meuAudio = document.getElementById("meuAudio");
// meuAudio.play();
// meuAudio.pause();
