var input = require('fs').readFileSync('Data/1021.txt', 'utf8'); //pega os dados do arquivo de texto
var lines = input.split('\n'); // quebra de linha (pula linha ou espaço)

//Declarando as variáveis:
// multiplicamos por 100 transformar o valor em inteiro, para
//que o valores fiquem em inteiros.

let valor = parseFloat(lines[0]) * 100;

console.log("NOTAS:");

// Declara o valor da Nota(No caso 100 x 100 = 10000)

let valorNota = 10000;

// O resto da divisao é o que não é multiplo do valorNota, logo o "valor" que não pode ser agrupado em valorNota

let resto = valor % valorNota;

// Retirando o resto do valor eu estou garantindo um valor que é divisivel por valorNota, e dividindo, quantas notas são

let valor_resultado = (valor - resto)/valorNota;

// Imprime as notas
console.log(`${valor_resultado} nota(s) de R$ ${(valorNota/100).toFixed(2)}`);

// O valor que está no resto é o que não foi "pago" pelo valorNota, sendo portanto o novo valor para o proximo caso
valor = resto;

// Exemplo: digamos que o valor é 576.73 x 100 = 57673 (Multiplicamos por 100 o valor)
// O resto da divisao de 57673 por 10000 é 7673, pois só os 50000 podem sao multiplos de 10000
// retirando o resto do valor temos: 57673 - 7673 = 50000, o que por sua vez é multiplo de 10000
// dividindo 50000/10000 temos quantas notas de "10000" (As notas são de 100 na realidade, pois tudo foi multiplicado por 100), que são 5 no caso.
// Imprimimos as notas
//  O novo valor na conta é o que não foi "pago" pelas notas de 10000, ou seja, o resto de 7673.


// Daqui para baixo é a mesma ideia
valorNota = 5000;
resto = valor % valorNota;
valor_resultado = (valor - resto)/valorNota;
console.log(`${valor_resultado} nota(s) de R$ ${(valorNota/100).toFixed(2)}`);
valor = resto;

valorNota = 2000;
resto = valor % valorNota;
valor_resultado = (valor - resto)/valorNota;
console.log(`${valor_resultado} nota(s) de R$ ${(valorNota/100).toFixed(2)}`);
valor = resto;

valorNota = 1000;
resto = valor % valorNota;
valor_resultado = (valor - resto)/valorNota;
console.log(`${valor_resultado} nota(s) de R$ ${(valorNota/100).toFixed(2)}`);
valor = resto;

valorNota = 500;
resto = valor % valorNota;
valor_resultado = (valor - resto)/valorNota;
console.log(`${valor_resultado} nota(s) de R$ ${(valorNota/100).toFixed(2)}`);
valor = resto;

valorNota = 200;
resto = valor % valorNota;
valor_resultado = (valor - resto)/valorNota;
console.log(`${valor_resultado} nota(s) de R$ ${(valorNota/100).toFixed(2)}`);
valor = resto;

console.log("MOEDAS:");

valorNota = 100;
resto = valor % valorNota;
valor_resultado = (valor - resto)/valorNota;
console.log(`${valor_resultado} moeda(s) de R$ ${(valorNota/100).toFixed(2)}`);
valor = resto;

valorNota = 50;
resto = valor % valorNota;
valor_resultado = (valor - resto)/valorNota;
console.log(`${valor_resultado} moeda(s) de R$ ${(valorNota/100).toFixed(2)}`);
valor = resto;

valorNota = 25;
resto = valor % valorNota;
valor_resultado = (valor - resto)/valorNota;
console.log(`${valor_resultado} moeda(s) de R$ ${(valorNota/100).toFixed(2)}`);
valor = resto;

valorNota = 10;
resto = valor % valorNota;
valor_resultado = (valor - resto)/valorNota;
console.log(`${valor_resultado} moeda(s) de R$ ${(valorNota/100).toFixed(2)}`);
valor = resto;

valorNota = 5;
resto = valor % valorNota;
valor_resultado = (valor - resto)/valorNota;
console.log(`${valor_resultado} moeda(s) de R$ ${(valorNota/100).toFixed(2)}`);
valor = resto;

valorNota = 1;
resto = valor % valorNota;
valor_resultado = (valor - resto)/valorNota;
console.log(`${valor_resultado} moeda(s) de R$ ${(valorNota/100).toFixed(2)}`);

