var input = require('fs').readFileSync('Data/1064.txt', 'utf8');
var lines = input.split('\r\n');

//Criando as variáveis 
let contadorPositivos = 0;
let somaPositivos = 0;

//Lendo os dados do arquivo de texto
for(let i = 0; i < lines.length; i++){
    let numero = parseFloat(lines[i]);

    //verificando se o numero é positivo
    if(numero > 0){
        contadorPositivos++;
        somaPositivos += numero; //acumula a soma dos positivos
    }
}

//Criando a variável média 
let media;

if(contadorPositivos > 0){
    media = somaPositivos / contadorPositivos;
} else {
    media = 0;
}

console.log(`${contadorPositivos} valores positivos`);
console.log(`Média: ${media.toFixed(1)}`);