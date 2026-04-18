class Produto:
    def __init__(self, nome, preco, estoque):
        self.nome    = nome
        self.preco   = preco
        self.estoque = estoque

    # chamado por print(produto) e str(produto)
    def __str__(self):
        return f"{self.nome} — R$ {self.preco:.2f}"

    # chamado no console interativo e por repr(produto)
    def __repr__(self):
        return f"Produto(nome='{self.nome}', preco={self.preco}, estoque={self.estoque})"

    # chamado por len(produto)
    def __len__(self):
        return self.estoque

    # chamado por produto_a == produto_b
    def __eq__(self, outro):
        return self.nome == outro.nome and self.preco == outro.preco

    # chamado por produto_a < produto_b
    def __lt__(self, outro):
        return self.preco < outro.preco


p1 = Produto("Teclado", 349.90, 15)
p2 = Produto("Mouse",   189.00, 30)
p3 = Produto("Teclado", 349.90, 5)   # mesmo nome e preço que p1

print(p1)           # Teclado — R$ 349.90        ← usa __str__
print(repr(p1))     # Produto(nome='Teclado', ...) ← usa __repr__
print(len(p1))      # 15                         ← usa __len__
print(p1 == p3)     # True  (mesmo nome e preço)  ← usa __eq__
print(p1 == p2)     # False                       ← usa __eq__
print(p2 < p1)      # True  (189 < 349)           ← usa __lt__

# ordenar uma lista de produtos usa __lt__ automaticamente
produtos = [p1, p2, Produto("Monitor", 1200.00, 8)]
print(sorted(produtos))  # ordena do mais barato ao mais caro