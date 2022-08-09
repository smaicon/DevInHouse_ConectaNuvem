from logging import exception


def publicar_dados():    
    
    try:
       print("acessando arquivo")
       file = open("arquivo.json", "r")
    except FileNotFoundError as exception:

        print("arquivo tá criado")
        print(f"ARQUIVO NAO EXISTE | {exception}")
        arquivo = open("arquivo.json", "w+")
        arquivo.readlines("teste")
        arquivo.close()
        print(f"Arquivo criado")
        
        publicar_dados()
        
    except Exception as exceptions:
        print(exceptions)
    else:
        print("arquivo tá criado")
    finally:
        print("produzindo dados")

if __name__ == "__main":
    publicar_dados()