while True:
    linha = input().strip()
    if linha == "0 0":
        break
    D, N = linha.split()
    resultado = N.replace(D, "")
    print(int(resultado) if resultado else 0)
