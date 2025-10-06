var input = require('fs').readFileSync('Data/1007.txt', 'utf8'); //aqui ele acha os dados para o código
var lines = input.split('\n'); //quebra de linha e espaçoData\1002.txt

//Declarando as variáveis 

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let C = parseInt(lines[2]);
let D = parseInt(lines[3]);

//Declarando a variável de cálculo: diferença

let DIFERENCA = (A * B) - (C * D);

//Saída de dados ou console

console.log(`DIFERENCA = ${DIFERENCA}`);