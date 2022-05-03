class conta {
  constructor(n_conta, saldo, cliente) {
    this.n_conta = n_conta;
    this.saldo = saldo;
    this.cliente = cliente;

    console.log(
      `Oi eu sou o  ${this.cliente}, esta é minha conta ${this.n_conta}meu saldo  é ${this.saldo}`
    );
  }
}
