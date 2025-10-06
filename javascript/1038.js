var input = require('fs').readFileSync('Data/1038.txt', 'utf8');
var lines = input.split(' ');

//Definindo as variáveis 
const codigoDoCliente = parseInt(lines[0]);
const quantidade = parseInt(lines[1]);

//Definindo os lanches
let cachorroQuente = 4.00;
let xSalada = 4.50;
let xBacon = 5.00;
let torradaSimples = 2.00;
let reFrigerante = 1.50;


if(codigoDoCliente == 1){
   let preco1 = quantidade * cachorroQuente
    console.log(`Total: R$ ${preco1.toFixed(2)}`)

} else if(codigoDoCliente == 2){
   let preco2 = quantidade * xSalada
 console.log(`Total: R$ ${preco2.toFixed(2)}`)

} else if(codigoDoCliente == 3){
    let preco3 = quantidade * xBacon
  console.log(`Total: R$ ${preco3.toFixed(2)}`)

} else if(codigoDoCliente == 4){
    let preco4 = quantidade * torradaSimples
  console.log(`Total: R$ ${preco4.toFixed(2)}`) 

}else if(codigoDoCliente == 5){
    let preco5 = quantidade * reFrigerante
console.log(`Total: R$ ${preco5.toFixed(2)}`)
}