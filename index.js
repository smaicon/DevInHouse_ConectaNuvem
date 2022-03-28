/*let x = 50;

function somarMais3() {
  return x + 3;
}
module.exports = somarMais3;
*/

class Dev {
  constructor(nome, idade, principalLinguagem) {
    this.nome = nome;
    this.idade = idade;
    this.principalLinguagem = principalLinguagem;
  }
  apresentacao() {
    console.log(
      `Sou dev, trabalho com,${this.principalLinguagem}, meu nome é ${this.nome} e tenho ${this.idade} anos`
    );
  }
}
const dev = new Dev("Ana", 37, "Javascript");
dev.apresentacao();
class FrontendDev extends Dev {
  constructor(nome, idade, principalLinguagem, framework) {
    super();
    this.nome = nome;
    this.idade = idade;
    this.principalLinguagem = principalLinguagem;
    this.framework = framework;
  }
  apresentacao() {
    console.log(
      `Sou frontend e trabaho com ${this.principalLinguagem}, meuno nome é ${this.nome} e tenho ${this.idade} anos e sou especialista em ${this.framework}.`
    );
  }
}
class BackendDev extends Dev {
  constructor(nome, idade, principalLinguagem, bancoDeDados) {
    super(nome, idade, principalLinguagem);
    this.bancoDeDados = bancoDeDados;
  }
  apresentacao() {
    console.log(
      `Sou backend e trabaho com ${this.principalLinguagem}, meuno nome é ${this.nome} e tenho ${this.idade} 
      anos e sou especialista em ${this.bancoDeDados}.`
    );
  }
}
const frontend1 = new FrontendDev("Pedro", 24, "Javascript", "React");
const backend1 = new BackendDev("Joao", 35, "c#", "mysql");
console.log(frontend1);
frontend1.apresentacao();

console.log(backend1);
frontend1.apresentacao();
