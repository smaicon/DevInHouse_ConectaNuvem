class Pessoa:
    global ano_atual
    ano_atual = 2022
    
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
    
    @classmethod
    
    def criarPeloAnoNascimento(cls, nome, nascimento):
        return cls(nome, ano_atual - nascimento)
        #return cls('nome', idade)
    
    def mostrar(self):
        print(f'{self.nome} tem : {self.idade} anos')
        
pessoa = Pessoa('Davi', 5)
pessoa.display()

pessoa2 = Pessoa.criarPeloAnoNascimento('Maria', 2018)
pessoa2.mostrar()