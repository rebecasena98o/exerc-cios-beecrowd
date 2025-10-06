var input = require('fs').readFileSync('Data/1047.txt', 'utf8'); //pega os dados do arquivo de texto
var lines = input.split(' '); // quebra de linha (pula linha ou espaço)

let horaInicial = parseInt(lines[0]);
let minutoInicial = parseInt(lines[1]);
let horaFinal = parseInt(lines[2]);
let minutoFinal = parseInt(lines[3]);

let inicioEmMinutos = horaInicial * 60 + minutoInicial;
let fimEmMinutos = horaFinal * 60 + minutoFinal;

let duracaoMinutos;

if (fimEmMinutos > inicioEmMinutos) {
    duracaoMinutos = fimEmMinutos - inicioEmMinutos;
} else {
    duracaoMinutos = (24 * 60 - inicioEmMinutos) + fimEmMinutos;
}

let duracaoHoras = Math.floor(duracaoMinutos / 60);
let minutos = duracaoMinutos % 60;

console.log(`O JOGO DUROU ${duracaoHoras} HORA(S) E ${minutos} MINUTO(S)`);