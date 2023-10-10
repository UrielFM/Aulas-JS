/* Estruturas de Controle Condicional
Comandos que permitem analizar uma ou mias condições.
E a partir do resultado desta análise (verdadeiro ou falso),
o programa pode executar ações diferentes. 

Comandos mais comuns: if(se), else(senão), else if (senão se)
*/

let usuario = "Juean";
let idade = 20;

// Verificar a idade e determinar se é menos ou maior de idade

if( idade >= 18 ) {
    console.log(`${usuario} é maior de idade!`);
}
else {
    console.log( `${usuario} não é maior de idade`);
}