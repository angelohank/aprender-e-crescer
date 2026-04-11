class Cachorro:
    def __init__(self, nome, raca, idade):
        self.nome  = nome
        self.raca  = raca
        self.idade = idade

    # Método: comportamento do cachorro
    def latir(self):
        print(f"{self.nome} diz: Au au!")

    def apresentar(self):
        print(f"Olá! Sou {self.nome}, um {self.raca} de {self.idade} anos.")

    def fazer_aniversario(self):
        self.idade += 1   # modifica o próprio atributo!
        print(f"{self.nome} fez aniversário! Agora tem {self.idade} anos.")

# Usando os métodos
rex = Cachorro("Rex", "Labrador", 3)
rex.latir()             # Rex diz: Au au!
rex.apresentar()        # Olá! Sou Rex, um Labrador de 3 anos.
rex.fazer_aniversario() # Rex fez aniversário! Agora tem 4 anos.