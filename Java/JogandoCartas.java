public class JogandoCartas {


    int capacidade;
    int vetor[];
    int fim, inicio, totalCartas;


    public JogandoCartas(int capacidade){
        this.capacidade = capacidade;
        vetor = new int[capacidade];
        inicio = 0;
        fim = 0;
        totalCartas = 0;
    }

    public void InserindoCartas(int carta){
        if(totalCartas == capacidade){
            System.out.println("A fila de cartas está cheia");
        } else {
            vetor[fim] = carta;
            fim = (fim + 1) % capacidade;
            totalCartas++;
            System.out.println("Carta inserida:" + carta);
        }
        }

    public int removerCarta(){
        if(totalCartas == 0){
            System.out.println("A fila de cartas está vazia");
            return -1;
        } else {
            int carta = vetor[inicio];
            inicio = (inicio + 1) % capacidade;
            totalCartas--;
            System.out.println("A carta removida foi: " + carta);
            return carta;
        }
        }

    public void movendoBase(){
        int carta = removerCarta();
        if(carta != -1){
            InserindoCartas(carta);
        }
    }    

    public boolean temMaisDeUmaCarta(){
        return totalCartas > 1;
    }

    public int cartaRestante(){
        if(totalCartas == 0){
            return -1;
        } else {
            return vetor[inicio];
        }
        }

        

    }

        
    
