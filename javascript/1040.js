//var input = require('fs').readFileSync('Data/1040.txt', 'utf8'); //acesso dos dados
//var lines = input.split('\r\n'); // quebra de linha
const input = require('fs').readFileSync('Data/1040.txt', 'utf8').split('\r\n');

//let line1 = lines[0].split(" ")
//for (let i = 0; i < line1.length; i++){
//  console.log(line1[i])
//}

//let N1 = parseFloat(lines[0]);
//let N2 = parseFloat(lines[1]);
//let N3 = parseFloat(lines[2]);
//let N4 = parseFloat(lines[3]);

//let media = (N1*2 + N2*3 + N3*4 + N4*1) / 10;
//console.log("Media: " + media.toFixed(1));

//if (media >= 7.0) {
    //console.log("Aluno aprovado.");
//} else if (media < 5.0) {
    //console.log("Aluno reprovado.");
//} else {
    //console.log("Aluno em exame.");
    //let exame = parseFloat(input[4]);
    //console.log("Nota do exame: " + exame.toFixed(1));
    //let mediaFinal = (media + exame) / 2;
    //if (mediaFinal >= 5.0) {
        //console.log("Aluno aprovado.");
    //} else {
       // console.log("Aluno reprovado.");
    //}
    //console.log("Media final: " + mediaFinal.toFixed(1));
//}


//if(media >= 7.0){
  //console.log("Aluno aprovado");
//} else if (media < 5.0) {
  //console.log("Aluno reprovado.");
//} else {
  //console.log("Aluno em exame.");
//}

//var notaExame = parseFloat(lines[1]);

// primeira linha com as quatro notas
let [N1, N2, N3, N4] = input[0].split(" ").map(Number);

let media = (N1*2 + N2*3 + N3*4 + N4*1) / 10;
console.log("Media: " + media.toFixed(1));

if (media >= 7.0) {
    console.log("Aluno aprovado.");
} else if (media < 5.0) {
    console.log("Aluno reprovado.");
} else {
    console.log("Aluno em exame.");
    let exame = parseFloat(input[1]); // segunda linha do arquivo
    console.log("Nota do exame: " + exame.toFixed(1));
    let mediaFinal = (media + exame) / 2;
    if (mediaFinal >= 5.0) {
        console.log("Aluno aprovado.");
    } else {
        console.log("Aluno reprovado.");
    }
    console.log("Media final: " + mediaFinal.toFixed(1));
}