const fs = require("fs");
const linhas = fs.readFileSync(0,"utf8").trim().split("\n");

for(let line of linhas){
    let [D,N] = line.trim().split(" ");
    if(D === "0" && N === "0") break;

    let resultado = N.split("").filter(c => c !== D).join("");
    resultado = resultado.replace(/^0+/, ""); // remove zeros à esquerda
    console.log(resultado === "" ? "0" : resultado);
}
