class Conta:
    def __init__(self, nome, agencia, conta):
        self.nome = nome
        self.agencia = agencia
        self.conta = conta
        self.__saldo = 0
    def depositar(self, valor):
        self.saldo += valor
      #get  
    @property
    def saldo(self):
        return self.saldo
    #set
    @saldo.setter
    def saldo(self, novo_saldo):
        raise ValueError("impossivel alterar o saldo diretamente")
    
    def depositar(self, valor):
        self.__saldo += valor
        
    def sacar(self, valor):
        self.__saldo += valor
    
    
conta = Conta("pedro", "001", "1234")
conta.saldo = 11000                                                                                                     
print(f"O saldo da conta é {conta.__saldo}")
