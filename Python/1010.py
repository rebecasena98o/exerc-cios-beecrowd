codigo1, numero1, valor1 = input().split()
numero1 = int(numero1)  # Converte o número de peças para inteiro
valor1 = float(valor1)  # Converte o valor unitário para float

# Lê os dados da segunda peça
codigo2, numero2, valor2 = input().split()
numero2 = int(numero2)  # Converte o número de peças para inteiro
valor2 = float(valor2)  # Converte o valor unitário para float

# Calcula o valor total a ser pago
total = (numero1 * valor1) + (numero2 * valor2)

# Exibe o valor total com 2 casas decimais
print(f"VALOR A PAGAR: R$ {total:.2f}")