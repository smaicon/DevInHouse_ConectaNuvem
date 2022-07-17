class Pessoa:
    def __init__(self, nome, idade, endereco):
        self.nome = nome
        self.idade = idade

    @classmethod
    def criarPeloAnoNascimento(cls, nome, nascimento):
    
    def mostrar(self):
        print(f'{self.nome} tem {self.idade} anos')
        

class Aluno(Pessoa):
    def __init__(self, nome, idade, endereco) -> Nome:
        self.nome = nome
        self.nota = 0
        self.idade = idade

    def darNota(self, nota):
        self.nota = nota
        print(f'{self.nome} recebeu nota {self.nota}')
        
        @staticmethod
        def periodoLetivo():
            print('O periodo letivo para o semestre X vai do dia  dd/MM ao dia dd2/MM2' )
        

var1 = Aluno.criarPeloAnoNascimento('Davi', 2017)
var1.mostrar()

cont 37:00