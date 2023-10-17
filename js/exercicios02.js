let alunos = [ 
    {
        nome: "Joãozinho",
        Id: "1",
        Escola: "Gabriel",
<<<<<<< HEAD
        ano: "2016",
=======
        Ano: "2016",
>>>>>>> 21519c7bd0667cd5bf75b67012d48438592c68d3
    },
    {
        nome: "Mariazinha",
        Id: "2",
        Escola: "Almirante",
        Ano: "2018",
    },
    {
        nome: "Giuseppezinho",
        Id: "3",
        Escola: "Senne",
        Ano: "2022",
    },
];

let quantidade = alunos.length;

for(let i = 0; i < quantidade; i++)
    console.log(`Aluno: ${alunos[i].nome}`);

