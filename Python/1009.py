nome = input()
salarioFixo = float(input())
totalVendas = float(input())

PORCENTAGEM = 0.15

TOTALVENDAS = salarioFixo + (totalVendas * PORCENTAGEM)

print(f"TOTAL = R$ {TOTALVENDAS:.2f}")