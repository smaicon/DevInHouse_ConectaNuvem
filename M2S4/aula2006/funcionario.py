class Funcionario:
    def __init__(self, nome, salario, vinculo = True):
        self.salario = salario
        self.vinculo = vinculo
        self.nome = nome
        
    def setarSalario(self, salario):
        self.salario = salario
    
    def aumentoSalario(self, percent):
        self.salario = self.salario * percent + self.salario
    
    def demitir(self):
        self.vinculo = False  
    

class Dev(Funcionario):
    def __init__(self, nome, salario, vinculo = True):
        super().__init__(nome, salario, vinculo)    

class Designer(Funcionario):
    def __init__(self, nome, salario, vinculo = True):
        super().__init__(nome, salario, vinculo)    

class Marketing(Funcionario):
    def __init__(self, nome, salario, vinculo = True):
        super().__init__(nome, salario, vinculo)  
        
    def bonificacao(self, percent):
        self.salario = self.salario * percent + self.salario
        print(f'o novo salario do {self.nome} com bonificação é {self.salario}')
        
dev = Dev('Yan, 12000')
designer = Designer('Gabriel', 6000)
mkt = Marketing('Pedro', 13000)

mkt.bonificação(0.35)