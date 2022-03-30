//revisao aula

function comum() {
  console.log("comum");
}

const anonima = function () {
  console.log("anonima");
};

comum();
anonima();

const arrow = () => {
  console.log("arrow");
};

comum();
anonima();
arrow();
