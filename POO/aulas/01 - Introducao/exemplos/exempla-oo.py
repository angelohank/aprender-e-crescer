class Conta:
    def __init__(self, numero, titular, saldo_inicial=0):
        self.numero = numero
        self.titular = titular
        self.saldo = saldo_inicial

    def depositar(self, valor):
        self.saldo += valor
        print(f"Depósito de R${valor} realizado. Novo saldo: R${self.saldo}")

    def sacar(self, valor):
        if self.saldo < valor:
            print("Saldo insuficiente.")
            return
        
        self.saldo -= valor
        print(f"Saque de R${valor} realizado. Novo saldo: R${self.saldo}")

    def consultar_saldo(self):
        print(f"Saldo da conta {self.numero}: R${self.saldo}")


class Banco:
    def __init__(self):
        self.contas = {}

    def criar_conta(self, numero, titular, saldo_inicial=0):
        if numero in self.contas:
            print("Conta já existe.")
            return
        
        conta = Conta(numero, titular, saldo_inicial)
        self.contas[numero] = conta
        print(f"Conta {numero} criada para {titular} com saldo inicial de R${saldo_inicial}.")

    def depositar(self, numero, valor):
        conta = self.contas.get(numero)
        if not conta:
            print("Conta não encontrada.")
            return
        
        conta.depositar(valor)

    def sacar(self, numero, valor):
        conta = self.contas.get(numero)
        if not conta:
            print("Conta não encontrada.")
            return
        
        conta.sacar(valor)

    def consultar_saldo(self, numero):
        conta = self.contas.get(numero)
        if not conta:
            print("Conta não encontrada.")
            return
        
        conta.consultar_saldo()

    def transferir(self, origem, destino, valor):
        conta_origem = self.contas.get(origem)
        conta_destino = self.contas.get(destino)

        if not conta_origem or not conta_destino:
            print("Conta de origem ou destino não encontrada.")
            return

        if conta_origem.saldo < valor:
            print("Saldo insuficiente para transferência.")
            return

        conta_origem.sacar(valor)
        conta_destino.depositar(valor)

        print(f"Transferência de R${valor} realizada de {origem} para {destino}.")


# =========================
# Execução do programa
# =========================

banco = Banco()

banco.criar_conta(1, "João", 1000)
banco.criar_conta(2, "Maria", 500)

banco.depositar(1, 200)
banco.sacar(2, 100)

banco.consultar_saldo(1)
banco.consultar_saldo(2)

banco.transferir(1, 2, 300)

banco.consultar_saldo(1)
banco.consultar_saldo(2)