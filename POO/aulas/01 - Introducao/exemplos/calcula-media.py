def calcular_media(notas):
    return sum(notas) / len(notas)


def verificar_aprovacao(media):
    if media >= 7:
        return "Aprovado"
    else:
        return "Reprovado"


def executar():
    print("=== Cálculo de Média ===")
    
    notas = []
    
    for i in range(3):
        nota = float(input(f"Digite a nota {i+1}: "))
        notas.append(nota)
    
    media = calcular_media(notas)
    status = verificar_aprovacao(media)
    
    print(f"\nMédia: {media:.2f}")
    print(f"Situação: {status}")


executar()