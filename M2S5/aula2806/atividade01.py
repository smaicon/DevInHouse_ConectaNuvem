class Empresa:
    
    def __init__(self, nome:str):
        self.nome = nome
        self.funcionarios = []

class Funcionario:
    
    def __init__(self, funcao:str, nome:str):
        self.funcao = funcao
        self.nome = nome
    
    def cadastrarFuncionario(self, nome, funcao = funcao):
        self.funcionarios.append(Funcionario(nome = nome))
        
    def listarFuncionarios(self):
        for funcionarios in self.funcionarios:
            print(f'func:{funcionarios.nome}, funcao {self.funcao}, empresa {self.nome}')
            
            

emp1 = Empresa('conecta')
emp1.cadastrarFuncionario('Joao', 'dev')
emp1.cadastrarFuncionario('Maria', 'dev')
emp1.cadastrarFuncionario('Fernando', 'dev')

emp1.listarFuncionarios()


emp1.listasFuncionarios()



