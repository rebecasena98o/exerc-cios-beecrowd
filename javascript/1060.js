var input = require('fs').readFileSync('Data/1060.txt', 'utf8');
var lines = input.split('\r\n');

// Inicializando o contador de números positivos
let contadorPositivos = 0;

// Lendo os 6 números
for (let i = 0; i < lines.length; i++) {
    let numero = parseInt(lines[i]); // Lê e converte para número

    // Verificando se o número é positivo
    if (numero > 0) {
        contadorPositivos++;
    }
}

// Imprimindo o resultado
console.log(`${contadorPositivos} valores positivos`);
