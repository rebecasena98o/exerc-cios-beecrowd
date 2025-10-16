public class OEscolhido {

    int qtdAlunos;
    int matricula[];
    float notas[];
    int contador; // controla quantos alunos foram adicionados

    public OEscolhido(int qtdAlunos){
        this.qtdAlunos = qtdAlunos;
        this.contador = 0;
        notas = new float[qtdAlunos];
        matricula = new int[qtdAlunos];
    }

    public void adicionandoAluno(int registroAluno, float nota) {
        if (contador >= qtdAlunos) {
            System.out.println("A lista de alunos está cheia");
        } else {
            matricula[contador] = registroAluno;
            notas[contador] = nota;
            contador++;
        }
    }

    public float checagemNotas() {
        float maiorNota = notas[0];
        int indiceMaiorNota = 0;

        for (int i = 1; i < contador; i++) {
            if (notas[i] > maiorNota) {
                maiorNota = notas[i];
                indiceMaiorNota = i;
            }
        }

        System.out.println("A maior nota é: " + maiorNota);
        System.out.println("A matrícula do aluno com a maior nota é: " + matricula[indiceMaiorNota]);

        return maiorNota;
    }

    public static void main(String[] args) {
        // Exemplo de uso (simulando o exercício 1983)
        OEscolhido alunos = new OEscolhido(3);

        alunos.adicionandoAluno(1001, 8.5f);
        alunos.adicionandoAluno(1002, 7.2f);
        alunos.adicionandoAluno(1003, 9.7f);

        float maior = alunos.checagemNotas();

        if (maior >= 8.0f) {
            System.out.println("Aluno aprovado!");
        } else {
            System.out.println("Minimum note not reached");
        }
    }
}

