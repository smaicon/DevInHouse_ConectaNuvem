/*class Person {
  constructor(name) {
    this.name = name;
  }
  caminhar() {
    return `${this.name}está caminhando`;
  }
}
var person = new Person("Ana");
console.log(person.caminhar());
*/
/*
class Pessoa {
  #nome;
  #idade;

  constructor(nome, idade) {
    this.#nome = nome;
    this.#idade = idade;
  }

  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }

  exibir() {
    return `O meu nome é ${this.#nome} e eu tenho ${this.#idade} anos`;
  }
}

const p1 = new Pessoa("Ana", 37);
//apos criar o get
console.log(p1.nome);
//apos usar o set
p1.nome = "marcelo";
console.log(p1.nome);

/*
console.log(p1.exibir());
console.log(p1.#idade);*/

//closure pratica
/*
const somarMais3 = require("./24.03.closure");

console.log(somarMais3());

let x = 100;
console.log(somarMais3());
*/
//herança
class Dev {
  constructor(nome, idade, principalLinguagem) {
    this.nome = nome;
    this.idade = idade;
    this.principalLinguagem = principalLinguagem;
  }
  apresentacao() {
    console.log(
      `Sou dev, trablalho com ${this.principalLinguagem}, meu nome é ${this.nome} e tenho ${this.idade} anos`
    );
  }
}

const dev = new Dev("Pedro", 31, "Python");
dev.apresentacao();

// outra forma de chamar | os filhos dentro do constructor
class FrontendDev extends Dev {
  constructor(nome, idade, principalLinguagem, framework) {
    super(nome, nome, principalLinguagem);

    this.framework = framework;
  }
  apresentacao() {
    console.log(
      `Sou dev frontend, trablalho com ${this.principalLinguagem}, meu nome é ${this.nome}
       e tenho ${this.idade} anos e sou especialista em ${this.framework}`
    );
  }
}

class BackendDev extends Dev {
  constructor(nome, idade, principalLinguagem, bancodeDados) {
    super();
    this.nome = nome;
    this.idade = idade;
    this.principalLinguagem = principalLinguagem;
    this.bancodeDados = bancodeDados;
  }
  apresentacao() {
    console.log(
      `Sou dev backedend, trablalho com ${this.principalLinguagem}, meu nome é ${this.nome}
         e tenho ${this.idade} anos e sou especialista em ${this.bancodeDados}`
    );
  }
}

const frontend1 = new FrontendDev("Pedro", 35, "Javascript", "react");
const backend1 = new FrontendDev("Joao", 31, "c#", "Sql");

console.log(frontend1);
frontend1.apresentacao();

console.log(backend1);
backend1.apresentacao();
console.log("---- POLIMORFISMO ------");
//polimorfismo
class Pessoa {
  ser() {
    console.log("Eu sou uma pessoa");
  }
}

class Jovem extends Pessoa {}

class Idoso extends Pessoa {
  serAvancado() {
    console.log("eu tenho uma idade avançado");
  }
}

const p1 = [new Pessoa(), new Jovem()];
p1.forEach((p1) => p1.ser());

const p2 = new Idoso();
p2.serAvancado();
