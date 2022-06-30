class Pessoa():
    def __init__(self, nome) -> None:
        self.nome = nome
    
    def retornaCidade(self):
        print(f'{self.nome} mora em Floripa')
    @staticmethod   
    def temSus(self):
        print(self + "temSus")
        
p = Pessoa()
p.retornaCidade()
p.temSus()