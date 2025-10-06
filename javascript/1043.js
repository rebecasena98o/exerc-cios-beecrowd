var input = require('fs').readFileSync('Data/1043.txt', 'utf8');
var lines = input.split(' ');

//Criando as variáveis
let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);

//Criando as condições
let condicao1 = A + B > C;
let condicao2 = A + C > B;
let condicao3 = B + C > A;

if( condicao1 && condicao2 && condicao3){
    //Cálculando o perimetro
    let perimetro = A + B + C;
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
    // Cálculo da área do trapézio
    let area = ((A + B) * C) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
}

