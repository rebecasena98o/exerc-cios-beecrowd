const fs = require('fs');

// Lê a entrada padrão
const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

// Separa os pontos
const [x1, y1] = input[0].trim().split(' ').map(Number);
const [x2, y2] = input[1].trim().split(' ').map(Number);

// Calcula a distância euclidiana
const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// Imprime com 4 casas decimais
console.log(distancia.toFixed(4));
