const input = require('fs').readFileSync('Data/1042_function.txt', 'utf8');
const lines = input.split('\n');


function main() {
 
    let valores = lines[0].split(' ').map(Number); // Converte para números
    let vetor = valores.slice(); // Copia valores

    // Ordena usando sort
    let ordem = vetor.slice().sort((a, b) => a - b); // Ordena em ordem crescente

    // Imprime a ordem
    ordem.forEach(num => console.log(num));
    console.log("");

    // Imprime o vetor original
    vetor.forEach(num => console.log(num));
}

main();
