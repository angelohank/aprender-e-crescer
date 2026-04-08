class Pessoa:
    pass

p1 = Pessoa()
p2 = Pessoa()

print(type(p1)) #imprime o tipo
print(id(p1)) #imprime o endereço de memória do objeto
print(p1 is p2) #verifica se p1 é o mesmo objeto que p2, ou seja, se eles têm a mesma identidade
print(isinstance(p1, Pessoa)) #verifica se p1 é uma instância da classe Pessoa