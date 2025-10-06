var input = require('fs').readFileSync('Data/1037.txt', 'utf8');
var lines = input.split('\r\n');
for(let x = 0; x < lines.length; x++){
let valor = parseFloat(lines[x]);
const num1 = 0;
const num2 = 25;
const num3 = 50; 
const num4 = 75;
const num5 = 100;

if( valor >= num1 && valor <= num2){
    console.log(`Intervalo [${num1},${num2}]`);
}else if(valor > num2 && valor <= num3){
    console.log(`Intervalo (${num2},${num3}]`)
}else if(valor > num3 && valor <= num4){
    console.log(`Intervalo (${num3},${num4}]`)
}else if(valor > num4 && valor <= num5){
    console.log(`Intervalo (${num4},${num5}]`)
}else{
    console.log(`Fora de intervalo`)
}
}