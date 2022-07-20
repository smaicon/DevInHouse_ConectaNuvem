class Aluno:
    def __init__(self,nome: str, matricula:int):
        self.nome = nome
        self.matricula = matricula


class Curso:
    def __init__(self, nome: str):
        self.nome = nome
        self.aluno = []
    
    def cadastrar_aluno(self, aluno: Aluno):
        self.aluno = aluno
    
    def listar_alunos(self):
        for aluno in self.alunos:
            print(f'o ALuno {aluno.nome} cuja matricula {aluno.matricula} encontra-se em nossa base de dados')
            
if __name__ == '__main__':
    curso = Curso(nome="ciencia de dados")
    aluno1 = Aluno(nome="Pedro", matricula=1)
    aluno2 = Aluno(nome="Maria", matricula=2)
    aluno3 = Aluno(nome="Joao", matricula=3)
    
    curso.cadastrar_aluno(aluno1)
    curso.cadastrar_aluno(aluno2)
    curso.cadastrar_aluno(aluno3)
    
    curso.listar_alunos()

    

            
            
            
            
            
            
            
            
            
            
            
            
            
            