const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let diaInicio = parseInt(input[0].split(' ')[1]);
let [h1, m1, s1] = input[1].replace(/\s/g, '').split(':').map(Number);
let diaFim = parseInt(input[2].split(' ')[1]);
let [h2, m2, s2] = input[3].replace(/\s/g, '').split(':').map(Number);

let inicio = diaInicio * 86400 + h1 * 3600 + m1 * 60 + s1;
let fim = diaFim * 86400 + h2 * 3600 + m2 * 60 + s2;

let duracao = fim - inicio;

let dias = Math.floor(duracao / 86400);
duracao %= 86400;
let horas = Math.floor(duracao / 3600);
duracao %= 3600;
let minutos = Math.floor(duracao / 60);
let segundos = duracao % 60;

console.log(`${dias} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);
