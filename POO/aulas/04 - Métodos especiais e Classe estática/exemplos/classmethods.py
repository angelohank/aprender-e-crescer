class Data:
    def __init__(self, dia, mes, ano):
        self.dia = dia
        self.mes = mes
        self.ano = ano

    def __str__(self):
        return f"{self.dia:02d}/{self.mes:02d}/{self.ano}"

    # construtor alternativo: cria a partir de uma string "DD/MM/AAAA"
    @classmethod
    def de_string(cls, texto):
        dia, mes, ano = texto.split("/")
        return cls(int(dia), int(mes), int(ano))  # cls(...) = Data(...)

    # construtor alternativo: cria a data de hoje
    @classmethod
    def hoje(cls):
        from datetime import date
        d = date.today()
        return cls(d.day, d.month, d.year)


# três formas de criar o mesmo tipo de objeto
d1 = Data(10, 5, 2024)          # construtor normal
d2 = Data.de_string("10/05/2024") # classmethod — a partir de string
d3 = Data.hoje()                  # classmethod — data atual

print(d1)   # 10/05/2024
print(d2)   # 10/05/2024
print(d3)   # (data de hoje)