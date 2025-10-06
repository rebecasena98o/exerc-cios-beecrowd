var input = require('fs').readFileSync('Data/1018.txt', 'utf8'); //pega os dados do arquivo de texto
var lines = input.split('\n'); // quebra de linha (pula linha ou espaço)

//Declarando as variáveis 

let valor = parseInt(lines[0]);
console.log(valor) //saída do valor de entrada

const cedula1 = 100;
const cedula2 = 50;
const cedula3 = 20;
const cedula4 = 10;
const cedula5 = 5;
const cedula6 = 2;
const moeda1 = 1;

//cédulas de 100 e divisão necessária

let notas = parseInt(valor / cedula1);
valor = valor % 100

//cédulas de 50 e divisão necessária 
let notas1 = parseInt(valor / 50);
valor = valor % 50

//cédulas de 20 e divisão necessária 
let notas2 = parseInt(valor / 20);
valor = valor % 20

//cédulas de 10 e divisão necessária 
let notas3 = parseInt(valor / 10);
valor = valor % 10

//cédulas de 5 e divisão necessária 
let notas4 = parseInt(valor / 5);
valor = valor % 5

//cédulas de 2 e divisão necessária 
let notas5 = parseInt(valor / 2);
valor = valor % 2

//moeda de 1 real e divisão necessária 
let notas6 = parseInt(valor / 1);
valor = valor % 1

//saída de dados 
console.log(`${notas} nota(s) de R$ 100,00`);
console.log(`${notas1} nota(s) de R$ 50,00`);
console.log(`${notas2} nota(s) de R$ 20,00`);
console.log(`${notas3} nota(s) de R$ 10,00`);
console.log(`${notas4} nota(s) de R$ 5,00`);
console.log(`${notas5} nota(s) de R$ 2,00`);
console.log(`${notas6} nota(s) de R$ 1,00`);