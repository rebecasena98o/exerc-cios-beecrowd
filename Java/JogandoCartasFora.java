import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class JogandoCartasFora {

    int capacidade;
    int fim, inicio, totalCartas;
    int vetor[];

    public JogandoCartasFora(int capacidade) {
        this.capacidade = capacidade;
        vetor = new int[capacidade];
        inicio = 0;
        fim = 0;
        totalCartas = 0;
    }

    public void inserindoCartas(int carta){
        if(totalCartas == capacidade){
            System.out.println("a fila de cartas está cheia");
        } else {
            vetor[fim] = carta;
            fim = (fim + 1) % capacidade;
            totalCartas++;

        }
       
    }

    public int removerCarta() {
    if (totalCartas == 0) {
        System.out.println("Fila de cartas vazia");
        return -1;
    } else {
        int carta = vetor[inicio];
        inicio = (inicio + 1) % capacidade;
        totalCartas--;
        System.out.println("Carta removida: " + carta);
        return carta;
        }
    }

    public void movendoBase(){
        int carta = removerCarta();
        if(carta != -1){
            inserindoCartas(carta);
        }
    }

    public boolean temMaisDeUmaCarta() {
        return totalCartas > 1;
    }

    public int cartaRestante() {
        if (totalCartas == 0) return -1;
        return vetor[inicio];
    }

    public static void main(String[] args) {
        Scanner seila = new Scanner(System.in);

    int n;
    while (seila.hasNextInt() && (n = seila.nextInt()) != 0) {
            JogandoCartasFora fila = new JogandoCartasFora(n);
            for (int i = 1; i <= n; i++) fila.inserindoCartas(i);

            List<Integer> descartadas = new ArrayList<>();

            while (fila.temMaisDeUmaCarta()) {
                descartadas.add(fila.removerCarta());
                fila.movendoBase();
            }

            System.out.print("Discarded cards:");
            for (int i = 0; i < descartadas.size(); i++) {
                if (i == 0) System.out.print(" ");
                System.out.print(descartadas.get(i));
                if (i < descartadas.size() - 1) System.out.print(", ");
            }
            System.out.println();
            System.out.println("Remaining card: " + fila.cartaRestante());
    }
    seila.close();
    }

}



