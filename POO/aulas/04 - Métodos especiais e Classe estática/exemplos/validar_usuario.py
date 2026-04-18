class Usuario:
    def __init__(self, nome, email):
        self.nome = nome
        self.email = email

    @staticmethod
    def validar_email(email):
        if "@" in email and "." in email:
            return True
        return False
    
    