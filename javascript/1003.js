var input = require('fs').readFileSync('Data/1003.txt', 'utf8'); //aqui ele acha os dados para o código
var lines = input.split('\n'); //quebra de linha e espaçoData\1002.txt

// Declarando as variáveis

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);

// Declarando a variável soma

let soma = (A + B);

// Saída de dado ou mensagem do console

console.log(`SOMA = ${soma}`);
