var input = require('fs').readFileSync('Data/1008.txt', 'utf8'); //aqui ele acha os dados para o código
var lines = input.split('\n'); //quebra de linha e espaçoData\1002.txt

//Declarando as variáveis

let NumeroFuncionario = parseInt(lines[0]);
let HorasTrabalhadas = parseInt(lines[1]);
let ValorHoraTrabalhada = parseFloat(lines[2]);

//Declarando a váriavel de cálculo: salário

let SALARIO = (ValorHoraTrabalhada * HorasTrabalhadas);

//Declarando a saída de dados ou do console

console.log(`NUMBER = ${NumeroFuncionario}`);
console.log(`SALARY = U$ ${SALARIO.toFixed(2)}`);