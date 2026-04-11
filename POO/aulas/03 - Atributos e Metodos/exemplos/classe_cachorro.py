class Cachorro:
    def __init__(self, nome, raca, idade):
        # Cada linha abaixo cria um atributo no objeto
        self.nome  = nome   # recebe o valor passado na criação
        self.raca  = raca
        self.idade = idade

# Criando objetos e passando os valores dos atributos
rex  = Cachorro("Rex",  "Labrador", 3)
luna = Cachorro("Luna", "Poodle",   5)

# Acessando atributos com ponto
print(rex.nome)    # Rex
print(luna.idade)   # 5

# Atributos são independentes por objeto
rex.idade = 4       # só rex ficou mais velho
print(luna.idade)   # ainda 5