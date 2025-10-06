var input = require('fs').readFileSync('Data/1012.txt', 'utf8');
var lines = input.split(' ');

//Declarando as variáveis
let A = parseFloat (lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);
const PI = 3.14159;

//Declarando o cálculo da área do triângulo retangulo
let areaTriangulo = (A * C)/2;

//Declarando a area do circulo
let circulo = PI * (Math.pow(C,2));

//Declarando a area do Trapezio
let trapezio = ((A + B) * C)/2


//Declarando a area do quadrado
let quadrado = Math.pow(B,2);

//Declarando a area do retangulo
let retangulo = (A * B);

//organização dos resultados
areaTriangulo = areaTriangulo.toFixed(3);
circulo = circulo.toFixed(3);
trapezio = trapezio.toFixed(3);
quadrado = quadrado.toFixed(3);
retangulo = retangulo.toFixed(3);

//saída de dados
console.log(`TRIANGULO: ${areaTriangulo}`);
console.log(`CIRCULO: ${circulo}`);
console.log(`TRAPEZIO: ${trapezio}`);
console.log(`QUADRADO: ${quadrado}`);
console.log(`RETANGULO ${retangulo}`);