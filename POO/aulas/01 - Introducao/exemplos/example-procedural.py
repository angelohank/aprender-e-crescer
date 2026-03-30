# "Banco de dados" simples
contas = {}

# Função para criar conta
def criar_conta(numero, titular, saldo_inicial=0):
    if numero in contas:
        print("Conta já existe.")
        return
    
    contas[numero] = {
        "titular": titular,
        "saldo": saldo_inicial
    }
    print(f"Conta {numero} criada para {titular} com saldo inicial de R${saldo_inicial}.")


# Função para depositar
def depositar(numero, valor):
    if numero not in contas:
        print("Conta não encontrada.")
        return
    
    contas[numero]["saldo"] += valor
    print(f"Depósito de R${valor} realizado. Novo saldo: R${contas[numero]['saldo']}")


# Função para sacar
def sacar(numero, valor):
    if numero not in contas:
        print("Conta não encontrada.")
        return
    
    if contas[numero]["saldo"] < valor:
        print("Saldo insuficiente.")
        return
    
    contas[numero]["saldo"] -= valor
    print(f"Saque de R${valor} realizado. Novo saldo: R${contas[numero]['saldo']}")


# Função para consultar saldo
def consultar_saldo(numero):
    if numero not in contas:
        print("Conta não encontrada.")
        return
    
    saldo = contas[numero]["saldo"]
    print(f"Saldo da conta {numero}: R${saldo}")


# Função para transferir
def transferir(origem, destino, valor):
    if origem not in contas or destino not in contas:
        print("Conta de origem ou destino não encontrada.")
        return
    
    if contas[origem]["saldo"] < valor:
        print("Saldo insuficiente para transferência.")
        return
    
    contas[origem]["saldo"] -= valor
    contas[destino]["saldo"] += valor
    
    print(f"Transferência de R${valor} realizada de {origem} para {destino}.")


# =========================
# Execução do programa
# =========================


#chamando função por função
criar_conta(1, "João", 1000)
criar_conta(2, "Maria", 500)

depositar(1, 200)
sacar(2, 100)

consultar_saldo(1)
consultar_saldo(2)

transferir(1, 2, 300)

consultar_saldo(1)
consultar_saldo(2)