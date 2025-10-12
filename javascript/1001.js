var input = require('fs').readFileSync('Data/1001.txt', 'utf8'); //aqui ele acha os dados para o código
var lines = input.split('\n'); //quebra de linha e espaço

let A = parseInt(lines[0]); //precisa do lines.shift pois o Js entende tudo como uma 'string', então pegamos essa 'string' e
let B = parseInt(lines[1]); //transformamos para uma variável inteira
// dentro do parseInt, ele está pegando a variável que criamos ali na linha 1

let X = (A + B); //soma das variáveis

console.log(`X = ${X}`) //mostrar o resultado 
//console.log(' X = ' + X);
