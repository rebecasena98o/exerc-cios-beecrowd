const fs = require('fs');

// Leitura da entrada padrão
const input = fs.readFileSync('/dev/stdin', 'utf8');

// Converte a entrada para número
const Z = parseInt(input);

// Calcula o tempo em minutos
const tempo = Z * 2;

// Exibe o resultado
console.log(`${tempo} minutos`);
