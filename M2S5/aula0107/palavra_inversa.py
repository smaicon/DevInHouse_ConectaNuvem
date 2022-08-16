def PalavraInversaException(Exception):
    def __init__(self, message):
        super().__init__(message)
        
        
        
def retorna_palavra(func):

    def inverte(text):
        if not isistance(text, str):
            raise PalavraInversaException("aceitamos valores do tipo string")
        
        return "".join(reversed(text))
    

    return inverte

@retorna_palavra
def palavra(text):
    return text


if __name__ == "__main__":
    print(palavra("alo"))


#app2:30