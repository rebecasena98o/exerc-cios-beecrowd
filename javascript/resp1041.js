var input = require('fs').readFileSync('Data/1041.txt', 'utf8');
var lines = input.split(' ');

// Lendo as coordenadas
const x = parseFloat(lines[0]);
const y = parseFloat(lines[1]);

// Determinando a localização do ponto
if (x === 0 && y === 0) {
    console.log("Origem");
} else if (x === 0) {
    console.log("Eixo Y");
} else if (y === 0) {
    console.log("Eixo X");
} else if (x > 0 && y > 0) {
    console.log("Q1");
} else if (x < 0 && y > 0) {
    console.log("Q2");
} else if (x < 0 && y < 0) {
    console.log("Q3");
} else if (x > 0 && y < 0) {
    console.log("Q4");
}