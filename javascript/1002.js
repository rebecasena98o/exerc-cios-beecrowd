var input = require('fs').readFileSync('Data/1002.txt', 'utf8'); //aqui ele acha os dados para o código
var lines = input.split('\n'); //quebra de linha e espaçoData\1002.txt

//Declarando as variáveis
const PI = 3.14159;
let raio = parseFloat(lines[0]);

//Declarando a variável de cálculo

let area = PI * Math.pow(raio,2);

//saída de dados ou resposta da operação

console.log(`A= ${area.toFixed(4)} `);