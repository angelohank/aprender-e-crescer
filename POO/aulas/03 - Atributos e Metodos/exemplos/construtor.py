class Pessoa:
    def __init__(self, nome, idade=0):
        self.nome = nome
        self.idade = idade

p1 = Pessoa("João", 30)
p2 = Pessoa("Maria")  # idade padrão 0