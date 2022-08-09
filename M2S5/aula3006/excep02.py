if __name__ == "__main__":
    try:
        a = int(input("Informe um valor: "))
        b = int(input("Informe um segunto valor: "))
        nota_final = (a+b)/2
    except Exception as exception:
        print("tivemos um erro")
    else:
        print(f"o resultado final foi {nota_final}")
    finally:
        print("Agradeço sua visita")