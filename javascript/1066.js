var input = require('fs').readFileSync('Data/1066.txt', 'utf8');
var lines = input.split('\r\n');

// Declarando as variáveis 
let contadorPositivos = 0;
let contadorNegativos = 0;
let nPar = 0;
let nImpar = 0;

//lendo os dados do arquivo de texto e criando as condições
for( let i = 0; i < lines.length; i++){
    let numero1 = parseInt(lines[i]);

    //verificando se o numero é positivo
    if(numero1 > 0){
        contadorPositivos++
    } else if (numero1 < 0){
        contadorNegativos++
    } if (numero1 % 2 == 0){
        nPar++
    } else {
        nImpar++
    }
}

console.log(`${nPar} valor(es) par(es)`);
console.log(`${nImpar} valor(es) impar(es)`);
console.log(`${contadorPositivos} valor(es) positivos(s)`);
console.log(`${contadorNegativos} valor(es) negativo(s)`);