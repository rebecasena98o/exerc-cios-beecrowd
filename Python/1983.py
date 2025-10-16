qtdAlunos = int(input())

maiorNota = 0.0
matriculaMaior = 0

for _ in range(qtdAlunos):
    matricula, nota = input().split()
    matricula = int(matricula)
    nota = float(nota)

    if nota > maiorNota:
        maiorNota = nota
        matriculaMaior = matricula

    if maiorNota >= 8.0:
        print(matriculaMaior)
    else:
        print("Minimum note not reached")        