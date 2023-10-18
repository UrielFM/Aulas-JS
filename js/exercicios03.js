"use strict"

// Função que realiza a conversão matématica ao receber PARÂMENTROS.
function converterMoeda(valor, taxaDeCambio) {
    return valor * taxaDeCambio;
}

function formatarValor(valor, locale, currency) {
    return valor.toLocaleString(locale, { style: 'currency', currency: currency });
}

// Dados de entrada(exemplos de valores).
let valorEmDolar = 2500;
let taxaDeCambioParaReal = 5.03;

/* Variável que receberá o rsultado processado pela função DEPOIS que a função terminar sua execução. */
let valorEmReal = converterMoeda(valorEmDolar, taxaDeCambioParaReal);


// Saidas após o processamento.
console.log(`Valor em Dólar:`, formatarValor(valorEmDolar, 'en-US', 'USD'));
console.log(`Valor em Real:`, formatarValor(valorEmReal, 'pt-BR', 'BRL'));
console.log(`Taxa de Câmbio:`, formatarValor(taxaDeCambioParaReal, 'pt-BR', 'BRL'));


