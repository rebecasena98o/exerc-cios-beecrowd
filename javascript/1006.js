var input = require('fs').readFileSync('Data/1006.txt', 'utf8'); //aqui ele acha os dados para o código
var lines = input.split('\n'); //quebra de linha e espaçoData\1002.txt

//Declarando as váriaveis notas de alunos

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);

const pesoA = 2;
const pesoB = 3;
const pesoC = 5;

//Declarando a váriavel de cálculo: média ponderada

let MEDIA = (A * pesoA + B * pesoB + C * pesoC) / (pesoA + pesoB + pesoC);

//Declarando a saída de dados ou do console

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);
