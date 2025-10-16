#include <iostream>
using namespace std;

int main() {
    int n; 
    cin >> n;  // quantidade de alunos

    int matricula, matricula_maior = 0;
    float nota, maior_nota = 0.0;

    for (int i = 0; i < n; i++) {
        cin >> matricula >> nota;

        if (nota > maior_nota) {
            maior_nota = nota;
            matricula_maior = matricula;
        }
    }

    if (maior_nota >= 8.0)
        cout << matricula_maior << endl;
    else
        cout << "Minimum note not reached" << endl;

    return 0;
}
