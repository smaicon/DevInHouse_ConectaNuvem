class pessoa {
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
    return `O meu nome e ${this.#nome}, e eu tenho $(this.#idade)anos;`;
  }
}

const p1 = new pessoa("Ana", 37);
console.log(p1.nome);

p1.nome = "Marcelo";
console.log(p1.nome);
