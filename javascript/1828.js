var input = require('fs').readFileSync('Data/1828.txt', 'utf8');
var lines = input.split('\n');

let casosTeste = parseInt(lines[0]);
const regras = { //dicionário que guarda as regras do jogo
  "tesoura": ["papel", "lagarto"], //cada [] tem como valor um array com os oponentes que ela vence.
  "papel": ["pedra", "Spock"],
  "pedra": ["lagarto", "tesoura"],
  "lagarto": ["Spock", "papel"],
  "Spock": ["tesoura", "pedra"]
};

for (let i = 1; i <= casosTeste; i++) {
    const [sheldon, raj] = lines[i].trim().split(" "); //.trim() para remover espaços em branco 
    // (incluindo quebras de linha \n, tabulações \t, etc.) do começo e do fim de uma string.
    let resultado;

    if(sheldon === raj) {
        resultado = "De novo!";
    }else if(regras[sheldon].includes(raj)) { //acessa o array de vitórias da escolha de Sheldon.
    resultado = "Bazinga!";
    } else {
    resultado = "Raj trapaceou!";
    }

    console.log(`Caso #${i}: ${resultado}`);
}