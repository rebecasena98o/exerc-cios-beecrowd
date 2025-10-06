var input = require('fs').readFileSync('Data/3051.txt', 'utf8');
var lines = input.split('\n');

let [N, K] = lines[0].trim().split(" ").map(Number);

//trim() remove espaços ou quebras extras nas pontas.
//split(" ") separa os valores por espaço.
//map(Number) converte cada valor da string para número.

let vetor = lines[1].trim().split(" ").map(Number);

//console.log("N:", N);
//console.log("K:", K);
//console.log("Vetor:", vetor);

// Mapa para armazenar prefix sums e quantas vezes cada um apareceu
const prefixSumCount = new Map();
prefixSumCount.set(0, 1); // Soma zero apareceu uma vez (caso base)

let count = 0; //número de subarrays encontrados
let prefixSum = 0; //soma parcial acumulada até o índice atua (soma acumulada/prefixada)

for (let i = 0; i < N; i++) { //percorre todos os elementos do array[N]
    prefixSum += vetor[i];

    // Se já vimos prefixSum - K, então existe um subarray com soma K
    if (prefixSumCount.has(prefixSum - K)) {
        count += prefixSumCount.get(prefixSum - K);
    }

    // Atualiza o número de vezes que essa soma apareceu
    prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1);
}

console.log(count);