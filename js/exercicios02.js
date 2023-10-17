"use strict"

let alunos = [ 
    {
        nome: "Joãozinho",
        id: 1,
        escola: "Gabriel",
        ano: "2016",
    },
    {
        nome: "Mariazinha",
        id: 2,
        escola: "Almirante",
        ano: "2018",
    },
    {
        nome: "Giuseppezinho",
        id: 3,
        escola: "Senne",
        ano: "2022",
    }
];

let quantidade = alunos.length;

for(let i = 0; i < quantidade; i++){
    console.log(`Aluno: ${alunos[i].nome}`);
}