def simple_fibo() = > None:
    num: int(input("informe a quantidade de termos que voce quer: "))
    a = 0
    d = 1
    c = 0

    for _ in range(num):
        print(c, end=" ")
        c = a + d
        d = a
        a = c


def fibo(n: int):

    if n > 1:
        return fibo(n-1) + fibo(n-2)
    return n


if __name__ == "__main__":
    num = int(input("Informe a quantidade de valores que voce quer :"))
    for n in range(num):
        print(fibo(n))
