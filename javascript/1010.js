var input = require('fs').readFileSync('Data/1010.txt', 'utf8'); //pega os dados do arquivo de texto
var lines = input.split('\r\n'); // quebra de linha (pula linha)

// Definindo as variáveis da peça 1
let dadosPeca1 = lines[0].split(' '); // quebra de linha (espaço) e definição dos dados da peça 1
let qtdePeca1 = parseInt(dadosPeca1[1]); // pega os dados da peça 1 (quantidade de peça) e transforma em um nº inteiro
let valorPeca1 = parseFloat(dadosPeca1[2]); // pega os dados da peca 1 (valor da peça 1) e transforma em um nº com vírgula

//Definindo as variáveis da peça 2
let dadosPeca2 = lines[1].split(' '); //quebra de linha (espaço) e definição dos dados da peça 2
let qtdePeca2 = parseInt(dadosPeca2[1]); // pega os dados da peça 2 (quantidade de peça) e transforma em um nº inteiro
let valorPeca2 = parseFloat(dadosPeca2[2]); // pega os dados da peca 2 (valor da peça 2) e transforma em um nº com vírgula

// Defininido a variável de cálculo 
let valorPagar = (qtdePeca1 * valorPeca1) + (qtdePeca2 * valorPeca2);

//Mostrando a mensagem no console do navegador
console.log(`VALOR A PAGAR: R$ ${valorPagar.toFixed(2)}`);