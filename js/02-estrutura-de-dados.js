/* Estrutura de Dados

Arrays (Vetores/Matrizes):
Lista de dados indexados, sequenciais e acessiíveis por um índice numérico.


Objetos
Lista de dados não indexado e formados por propriedads e valores.
*/

// Arrays (os indices sempre começam no zero)

let cursos = ["Node.js", "React", "SQL", "UX/UI Design"];

console.log(cursos[2]); //SQL
console.log(cursos); // saída direta/estrutura (APENAS NO CONSOLE)


const dados = ['Uriel', 'Mishima', 46, "99999-9999", "São Paulo"]
console.log(`${dados[0]} tem ${dados [2]} anos.`)

// Objeto

let carro = {
    marca: "Fiat",
    modelo: "Uno com escada",
    portas: 2,
    cor: "branco",
    opcionais: ["Ar-Condionado", "Vidros Eletricos", "Alarmes"]
};
console.log(carro);
console.log(carro.modelo);

console.log(
    `Carros da ${carro.modelo} tem a cor ${carro.cor} e opcionais ${carro.opcionais[2]}.`);