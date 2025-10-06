// QuestÃ£o Severino
function Load_Data(){
    const input = require('fs').readFileSync("data/data.txt", "utf-8");
    let lines = input.split("\r\n");
    return lines;
}

function BubbleSort(array_desordena){
    let trocou = true;
    //For para os turnos
    for(let i = 0; i < array_desordena.length - 1; i++){
        trocou = false;
        // For para cada troca em um turno
        for(let x = 0; x < array_desordena.length - 1 -i; x++){
            if(array_desordena[x] > array_desordena[x + 1]){
                // Troca os valores
                let temp = array_desordena[x];
                array_desordena[x] = array_desordena[x + 1];
                array_desordena[x + 1] = temp;
                trocou = true;
            }
        }
        if(trocou == false){
            break;
        }
    }
    return array_desordena;
}

function Imprime(valor){
    let texto = "";
    if(valor < 10){
        texto += "000" + valor;
    }
    else if(valor < 100){
        texto += "00" + valor;
    }
    else if(valor < 1000){
        texto += "0" + valor;
    }
    else{
        texto = `${valor}`;
    }
    console.log(texto);
}



function main(){
    let lines = Load_Data();
    while(true){
        let qnt = lines.shift();
        if(qnt == undefined){
            break;
        }
        qnt = parseInt(qnt);
        let desordenado = [];
        for(let x = 0; x < qnt; x++){
            desordenado.push(parseInt(lines.shift()));
        }
        let ordenado = BubbleSort(desordenado);
        for(let i = 0; i < qnt; i++){
            Imprime(ordenado.shift());
        }
    }
}

main();