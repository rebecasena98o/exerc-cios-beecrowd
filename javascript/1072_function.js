var input = require('fs').readFileSync('Data/1072_function.txt', 'utf8');
var lines = input.split('\r\n');

const quantidadeN = parseInt(lines[0]);

function checagem (quantidadeN){
    let dentrointervalo = 0;
    let foraIntervalo = 0;

    for (let i = 1; i <= quantidadeN; i++){
        if (lines[i] >= 10 && lines[i] <= 20){
        dentrointervalo++;
        } else {
        foraIntervalo++;
        }
    }
    let respostas = []
    respostas.push(dentrointervalo)
    respostas.push(foraIntervalo)
    return respostas
     
}

let dentrointervalo = checagem(quantidadeN)[0];
let foraIntervalointervalo = checagem(quantidadeN)[1];

console.log(`${dentrointervalo} in`);
console.log(`${foraIntervalointervalo} out`);


//codigo no modo bruto
//let dentrointervalo = 0;
//let foraIntervalo = 0;

//for (let i = 1; i <= quantidadeN; i++){
  //  if (lines[i] >= 10 && lines[i] <= 20){
    //    dentrointervalo++;
    //} else {
      //  foraIntervalo++;
    //}
//}

//console.log(`${dentrointervalo} in`);
//console.log(`${foraIntervalo} out`);

