console.log("Funcional !");

var vetor = [];

vetor.push("fusca");
vetor.push("belina");
vetor.push("escort");

console.log(vetor[0]);
console.log(vetor[1]);
console.log(vetor[2]);

console.log(vetor);

var nome = "Ada";
var sobrenome = "Lovelace";
var nomeCompleto = nome + " " + sobrenome;
var idade = 10;

if (idade == 0) {
  console.log("Sobrenome" + sobrenome);
} else {
  console.log("Sobrenome não informado");
}

if (idade >= 18 && idade < 60) {
  console.log(`A usuaria ${nomeCompleto} é adulta.`);
} else if (idade >= 60) {
  console.log(`A usuária ${nomeCompleto} é idosa.`);
} else {
  console.log(`A usuária ${nomeCompleto} é criança.`);
}
--
alert("Cuidado com o loop");
var carros = ["escort", "uno", "brasilia"];
var indice = 0;

while (indice < 3) {
  console.log(carros[indice]);
  indice++;
}

var botao = document.getElementsBy