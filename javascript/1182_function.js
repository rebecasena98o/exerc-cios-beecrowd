function Load_Data(){ //criada para não consumir tanto espaço
    var input = require('fs').readFileSync('Data/1182_function.txt', 'utf8');
    var lines = input.split('\r\n');
    return lines; //retorna os dados da função
}

function ConverteVetorEmMatrizQuadrada(vetor=[]){ 
                                        //^
                                        //| para os métodos de vetor aparecerem mais facilmente
    let tamanho = vetor.length; // pega o total de elementos do vetor
    let largura = Math.sqrt(tamanho); // faz a raiz quadrada do tamanho --> olhar exemplo linha 45
    let matriz = []; // preenche as matrizes quadradas
    for(let y = 0; y < largura; y++){ //linha a linha --> a condição do y é que ele seja menor que a largura
    //para que ele faça o loop sempre e não "alcance" a largura
    //ele sempre comecará do 0 (zero)
    //ele soma para ir em linha em linha
        let temp = [];
        for(let x = 0; x < largura; x++){
            temp.push(vetor[y*largura + x]); //joga todos os elementos de uma linha no vetor temporário
        }
        matriz.push(temp);
    }
    return matriz;
}




/** vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9]  matriz =  conjunto de vetores = linhas = y
 *  Posicoes 0  1  2  3  4  5  6  7  8  = colunas = y
 * tamanho = 9 = numero de elementos dentro do vetor / tamanho do vetor = vetor.length
 * largura = 3 = raiz desse numero de elementos // altura --> matriz quadrada
 * 
 *         [0  ,  1  ,  2],
 *         [3  ,  4  ,  5],
 *         [6  ,  7  ,  8]
 * 
 *   y = 0  y*largura + x   y*largura + x   y*largura + x
 *   y = 1  y*largura + x   y*largura + x   y*largura + x
 *   y = 2  y*largura + x   y*largura + x   y*largura + x
 *              x=0             x=1              x=2         
 * 
 * vetor = [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
 * tamanho = 16
 * largura = 4 --> para não ter que fazer os x^n
 * forma mais fácil e útil
 * 
 * 
 *    y = 0   4*0 + 0   4*0 + 1   4*0 + 2   4*0 + 3
 *    y = 1   4*1 + 0   4*1 + 1   4*1 + 2   4*1 + 3
 *    y = 2   4*2 + 0   4*2 + 1   4*2 + 2   4*2 + 3
 *    y = 3   4*3 + 0   4*3 + 1   4*3 + 2   4*3 + 3
 *              x=0        x=1     x=2        x=3
 * 
 *  y < largura
 */

/**
 *   0 1 2 3 4 5 6 7 8 9 10 11   linha 0
 *   0 1 2 3 4 5 6 7 8 9 10 11   linha 1
 *   0 1 2 3 4 5 6 7 8 9 10 11   linha 2
 *   0 1 2 3 4 5 6 7 8 9 10 11 
 *   0 1 2 3 4 5 6 7 8 9 10 11 
 *   0 1 2 3 4 5 6 7 8 9 10 11 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


function SomaAreaSuperior12x12(matriz){
    let soma = 0;
    for(let y = 0; y <= 4; y++){
        for(let x = 1 + y; x <= 10 - y; x++){
            soma += matriz[y][x];
            /* 
     - matriz é uma matriz 2D (ou seja, um array de arrays) que contém valores numéricos.
     - y representa o índice da linha atual que está sendo percorrida.
     - x representa o índice da coluna específica que estamos interessados em somar.
     - Portanto, matriz[y][x] acessa o elemento localizado na linha y e na coluna x da matriz.
      --> exemplo: y[0] - primeira linha / x [1] - segunda coluna (ou na forma computacional: 1)
     - O operador += acumula o valor do elemento acessado (matriz[y][x]) à variável soma.
     - Isso significa que o valor atual de soma é incrementado pelo valor de matriz[y][x].
     - Números: Realiza a adição.
     - Strings: Realiza a concatenação.
           */
        }
    }
    return soma;
}




function main(){
    let lines = Load_Data();
    let comando = lines.shift();
    // Transforma os elementos em numeros
    for(let x = 0; x<lines.length; x++){
        lines[x] = parseFloat(lines[x]);
    }
    let matriz = ConverteVetorEmMatrizQuadrada(lines);
    let soma = SomaAreaSuperior12x12(matriz);
    if(comando == "S"){
        console.log(soma.toFixed(1));
    }
    else{
        let media = soma/30;
        console.log(media.toFixed(1));
    }
}

main();




/* 
var input = require('fs').readFileSync('Data/1182_function.txt', 'utf8');
var lines = input.split('\r\n');

*/