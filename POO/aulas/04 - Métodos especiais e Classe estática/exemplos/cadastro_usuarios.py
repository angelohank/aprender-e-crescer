import csv

class Usuario:
    def __init__(self, nome, email, idade):
        self.nome = nome
        self.email = email
        self.idade = idade

    def __repr__(self):
        return f"Usuario(nome={self.nome}, email={self.email}, idade={self.idade})"

    @classmethod
    def from_csv(cls, caminho_arquivo):
        usuarios = []

        with open(caminho_arquivo, newline='', encoding='utf-8') as arquivo:
            leitor = csv.DictReader(arquivo)

            for linha in leitor:
                usuario = cls(
                    nome=linha["nome"],
                    email=linha["email"],
                    idade=int(linha["idade"])
                )
                usuarios.append(usuario)

        return usuarios
    

# cadastro manual
usuario1 = Usuario("Carlos", "carlos@email.com", 28)
print(usuario1)


#cadastro a partir de um arquivo CSV
usuarios = Usuario.from_csv("usuarios.csv")