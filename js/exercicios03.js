function converterMoeda(valor, taxaDeCambio) {
    return valor * taxaDeCambio;
}

function formatarValor(valor, locale, currency) {
    return valor.toLocaleString(locale, { style: 'currency', currency: currency });
}

let valorEmDolar = 1000;
let taxaDeCambioParaReal = 5.03;

let valorEmReal = converterMoeda(valorEmDolar, taxaDeCambioParaReal);

console.log(`Valor em Dólar:`, formatarValor(valorEmDolar, 'en-US', 'USD'));
console.log(`Valor em Real:`, formatarValor(valorEmReal, 'pt-BR', 'BRL'));
console.log(`Taxa de Câmbio:`, formatarValor(taxaDeCambioParaReal, 'pt-BR', 'BRL'));


