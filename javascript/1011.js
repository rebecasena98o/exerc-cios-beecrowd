var input = require('fs').readFileSync('Data/1011.txt', 'utf8');
var lines = input.split('\r\n');

// Definindo o raio da esfera
let raioEsfera = parseInt(lines[0]);

// Definindo o valor de PI
const PI = 3.14159;

// Calculando o volume da esfera
let volumeEsfera = (4/3) * PI * Math.pow(raioEsfera,3);

// Saída de dados ou console
console.log(`VOLUME = ${volumeEsfera.toFixed(3)}`);
