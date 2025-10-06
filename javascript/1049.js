var input = require('fs').readFileSync('Data/1049.txt', 'utf8');
var lines = input.split('\r\n');

//Declarando e atribuindo as variáveis
let grupoAnimal = lines[0];
let classeAnimal = lines[1];
let alimentacao = lines[2];

//Criando as condições
if (grupoAnimal === "vertebrado" && classeAnimal === "ave" && alimentacao === "onivoro"){
    console.log(`pomba`)
} else if (grupoAnimal === "vertebrado" && classeAnimal === "ave" && alimentacao === "carnivoro"){
    console.log(`aguia`);
} else if (grupoAnimal === "vertebrado" && classeAnimal === "mamifero" && alimentacao === "onivoro"){
    console.log(`homem`);  
} else if (grupoAnimal === "vertebrado" && classeAnimal === "mamifero" && alimentacao === "herbivoro"){
    console.log(`vaca`); 
} else if (grupoAnimal === "invertebrado" && classeAnimal === "inseto" && alimentacao === "hematofago"){
    console.log(`pulga`); 
} else if (grupoAnimal === "invertebrado" && classeAnimal === "inseto" && alimentacao === "herbivoro"){
    console.log(`lagarta`); 
} else if (grupoAnimal === "invertebrado" && classeAnimal === "anelideo" && alimentacao === "hematofago"){
    console.log(`sanguessuga`); 
} else if (grupoAnimal === "invertebrado" && classeAnimal === "anelideo" && alimentacao === "onivoro"){
    console.log(`minhoca`); 
} else {
    console.log(`Digite novamente`);
}