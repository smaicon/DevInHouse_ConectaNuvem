class Cliente:
    
    def __init__(self, nome:str) -> None:
        self.nome = nome
        self.endereco = []
        
        
    def cadastrar_endereco(self, cidade:str, estado:str):
        self.endereco.append(Endereço(cidae=cidade, estado=estado))
        
    def listar_enderecos(self):
        for endereco in self.enderecos:
            print('f"o Licente {self.nome} reside em {endereco.cidade} {endereco.estado}')
            
    def __del__(self):
        print(f'removendo {self.nome} e {self.enderecos}')
        
    class Endereco:
        def  __init__ (self, cidade:str, estado:str):
            self.cidade = cidade
            self.estado = estado
    
if __name__ == "__main__":
    cliente = Cliente(nome="pedro")
    cliente.cadastrar_endereco(cidade="Palhoca", estado="SC")
    
    cliente.listar_enderecos()
    
    del cliente