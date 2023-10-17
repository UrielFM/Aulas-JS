function converterMoeda(valor, taxaDeCambio) {
    return valor * taxaDeCambio;
}

let valorEmDolar = 1000;
let taxaDeCambioParaReal = 5.03;

let valorEmReal = converterMoeda(valorEmDolar, taxaDeCambioParaReal);

console.log(`Valor em Dólar:`, valorEmDolar.toLocaleString
    ('en-US', { style: 'currency', currency: 'USD' }));
console.log(`Valor em Real:`, valorEmReal.toLocaleString
    ('pt-BR', { style: 'currency', currency: 'BRL' }));
console.log(`Taxa de Câmbio:`, taxaDeCambioParaReal.toLocaleString
    ('pt-BR', { style: 'currency', currency: 'BRL' }));


