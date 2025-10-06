var input = require('fs').readFileSync('Data/1004.txt', 'utf8'); //aqui ele acha os dados para o código
var lines = input.split('\n'); //quebra de linha e espaçoData\1002.txt

//Declarando as variáveis 

let C = parseInt(lines[0]);
let D = parseInt(lines[1]);

//Declarando a variável de cálculo

let PROD = (C * D);

//Saída de dado ou mensagem do console

console.log(`PROD = ${PROD}`);