var input = require('fs').readFileSync('Data/1005.txt', 'utf8'); //aqui ele acha os dados para o código
var lines = input.split('\n'); //quebra de linha e espaçoData\1002.txt

//Declarando as váriáveis

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);

const pesoA = 3.5;
const pesoB = 7.5;

//Declarando a variável de cálculo: média ponderada

let MEDIA = ( A * pesoA + B * pesoB) / (pesoA + pesoB);

//Declarando a saída de dados ou do console

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);