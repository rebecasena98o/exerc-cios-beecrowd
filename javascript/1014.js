const fs = require('fs');

// Leitura da entrada padrão
const input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

// Conversão dos dados de entrada
const distancia = parseInt(input[0]);
const combustivel = parseFloat(input[1]);

// Cálculo do consumo médio
const consumoMedio = distancia / combustivel;

// Impressão do resultado com 3 casas decimais
console.log(`${consumoMedio.toFixed(3)} km/l`);
