class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade


p1 = Pessoa("João", 30)

print(p1.nome)  # Output: João
print(p1.idade)  # Output: 30