var input = require('fs').readFileSync('Data/1049_function.txt', 'utf8');
var lines = input.split('\r\n');

//const vertebrados = {
  //  ave: [carnivoro , onivoro],
    // mamifero: [onivoro , herbivoro]
//}

//const invertebrados = {
  //  inseto: [hematofago, herbivoro],
    //anelideo: [hematofago, onivoro]
//}

//function verificacao1 (invertebrados){
  //  let grupoanimal = lines[0];
    //if(grupoanimal === invertebrados && grupoanimal === hematofago && grupoanimal === herbivoro){
      //  return ave
    //} else if (grupoanimal === invertebrados && grupoanimal === hematofago && onivoro){
      //  return anelideo
    //}
//}

// function verificacao2 (vertebrados){
   // let grupoAnimal2;
    // if(grupoAnimal2 === vertebrados && grupoAnimal2 === carnivoro && grupoAnimal2 === onivoro){
       // return ave
    // } else if (grupoAnimal2 === vertebrados && grupoAnimal2 === onivoro && grupoAnimal2 === herbivoro){
      //  return mamifero
    //}
//}
//tá tudo errado e é necessário corrigir



const tipo1 = lines[0]; // Primeiro tipo: vertebrado ou invertebrado
const tipo2 = lines[1]; // Segundo tipo: ave, mamífero, inseto, etc.
const tipo3 = lines[2]; // Terceiro tipo: carnivoro, herbivoro, onivoro, etc.

function identificaAnimal(tipo1, tipo2, tipo3) {
    // Mapeamento das características
    const animalMap = {
        vertebrado: {
            ave: {
                carnivoro: "aguia",
                onivoro: "pomba"
            },
            mamifero: {
                onivoro: "homem",
                herbivoro: "vaca"
            }
        },
        invertebrado: {
            inseto: {
                hematofago: "pulga",
                herbivoro: "lagarta"
            },
            anelideo: {
                hematofago: "sanguessuga",
                onivoro: "minhoca"
            }
        }
    };

    // Acessa o animal diretamente e fornece um valor padrão
    const animal = (animalMap[tipo1] && animalMap[tipo1][tipo2] && animalMap[tipo1][tipo2][tipo3]) || "Animal não identificado";

    // Formatação da saída
    console.log(animal);
}

// Chame a função passando os tipos
identificaAnimal(tipo1, tipo2, tipo3);

//código inicial corrigido 
//const vertebrados = {
//  ave: ['carnivoro', 'onivoro'],
  //mamifero: ['onivoro', 'herbivoro']
//};

//const invertebrados = {
  //inseto: ['hematofago', 'herbivoro'],
  //anelideo: ['hematofago', 'onivoro']
//};

//function verificacaoInvertebrados(grupoAnimal, dieta) {
  //if (grupoAnimal === 'invertebrados') {
    //  if (dieta === 'hematofago' && dieta === 'herbivoro') {
      //    return 'inseto';
      //} else if (dieta === 'onivoro' && dieta === 'hematofago') {
       //   return 'anelideo';
      //}
  //}
  //return 'Grupo ou dieta inválidos';
//}

//function verificacaoVertebrados(grupoAnimal, dieta) {
  //if (grupoAnimal === 'vertebrados') {
    //  if (dieta === 'carnivoro' && dieta === 'onivoro') {
      //    return 'ave';
      //} else if (dieta === 'onivoro' || dieta === 'herbivoro') {
        //  return 'mamifero';
      //}
  //}
  //return 'Grupo ou dieta inválidos';
//}

// Exemplo de uso
//const grupoAnimal1 = 'invertebrados';
//const dieta1 = 'hematofago';
//console.log(verificacaoInvertebrados(grupoAnimal1, dieta1)); // Saída: inseto

//const grupoAnimal2 = 'vertebrados';
//const dieta2 = 'carnivoro';
//console.log(verificacaoVertebrados(grupoAnimal2, dieta2)); // Saída: ave