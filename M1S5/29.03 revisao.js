function comum() {
  console.log("comum");
}
const anonima = function () {
  console.log("anonima");
};
const arrow = () => {
  console.log("arrow");
};
const arrowA = (nome) => {
  return `Olá, ${nome}`;
};
const arrowB = (nome) => `Olá, ${nome}`;
const arrowC = (a, b) => a + b;

comum();
anonima();
arrow();
console.log(this);
const campoNome = "Romeu";
const result = arrowB(campoNome);
console.log(result);
const resultC = arrowC(2, 4);
console.log(resultC);

const vet = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// map junta os returns em novo array
const result2 = vet.map((item, index, array) => {
  return item * 4;
});

// faz novo array com todos que deram true o teste
const result3 = vet.filter((item, index, array) => {
  return item > 4;
});

//some retorna true se pelo menos 1 dos elementos passar no teste
const result4 = vet.some((item, index, array) => {
  return item > 4;
});

//retorna booleano
const result5 = vet.every((item, index, array) => {
  return item > 4;
});

// reduce acc(acumulador) é resultado do execução anterior e retorna o valor da soma total
const result6 = vet.reduce((acc, item) => acc + item, 0);

console.log(result5);

const produtos = [
  { nome: "batata", qtd: 2, preco: 4 },
  { nome: "arroz", qtd: 3, preco: 3 },
];

const accFunc = (acumulador, item) => {
  return acumulador + item.qtd * item.preco;
};
const total = produtos.reduce(accFunc, 10);

//equivalente à função anterior
const totalB = produtos.reduce(
  (qqrcoisa, item) => qqrcoisa + item.qtd * item.preco,
  0
);

//console.log(total)

//no dia a dia usa-se muito o map  for each reduce
