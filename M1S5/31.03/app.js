/*import concat from "./utils";

const concatenado = concat([1, 2, 3], [2, 3, 5]);

console.log(concatenado);*/

function blah(resolve, reject) {
  resolve();
  reject();
}

const listaCEPs = {
  88034001: {
    logradouro: "Rua do SENAI SC",
  },
};
// exemplo  de promisse
function buscaCEPpromise(cep) {
  return new Promise((resolvido, rejeitado) => {
    const resultado = listaCEPs[cep];

    const erro = resultado ? null : "CEP inválido!";

    if (erro) {
      rejeitado(erro);
    } else {
      resolvido(resultado);
    }
  });
}

buscaCEPpromise("88080063")
  .then((resultado) => {
    //console.log(resultado);
  })
  .catch((erro) => {
    //console.log('ERRRRRRROOOOU');
    //console.log(erro);
  })
  .finally(() => {
    //console.log('Sempre executa ao final de tudo.');
  });

//console.log('Após')

// pending até resolver ou dar problema se resolver com sucesso fulfilled o contrario rejected

//fetch
function buscaCEPfetch() {
  const display = document.getElementById("display");
  const campoCEP = document.getElementById("campo-cep");
  const btnCEP = document.getElementById("btn-cep");
  const cep = campoCEP.value;

  if (!cep) {
    display.innerHTML = "Informe um CEP!";
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((resposta) => {
      resposta.json().then((conteudo) => {
        console.log(conteudo);
        display.innerHTML = conteudo.localidade;
      });
    })
    .catch((erro) => {
      console.log(erro);
    });
  btnCEP.addEventLIstener("click", buscaCEPfetch);
}

// promise com atraso
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("blah"), ms);
  });
}

// uma arrow function assíncrona
async function buscaCEP() {
  // comando de espera
  const resposta = await delay(1000);
  // executa após conclusão de delay
  console.log("Terminei de esperar! " + resposta);
}
// async await com fetch

async function buscaCEPawait() {
  const cep = campoCEP.value;

  if (!cep) {
    display.innerHTML = "Informe um CEP!";
    return;
  }

  const url = `https://viacep.com.br/ws/${cep}/json`;
  const resposta = await fetch(url);
  const conteudo = await resposta.json();

  console.log(conteudo);
  display.innerHTML = conteudo.localidade;
}

btnCEP.addEventListener("click", buscaCEPawait);

//btnCEP.addEventListener('click', buscaCEPawait);

// EXEMPLO COM TRY CATCH
// try bloco critico | catch  bloco executado  finally sempre executado no final.

async function buscaCEPtry() {
  try {
    const cep = campoCEP.value;

    if (cep.length !== 8) {
      throw new Error("CEP com tamanho inválido!");
    } else if (!/^\d+$/.test(cep)) {
      throw new Error("CEP só pode conter números!");
    }

    const url = `https://viacep.com.br/ws/${cep}/json`;
    const resposta = await fetch(url);
    const conteudo = await resposta.json();

    console.log(conteudo);
    display.innerHTML = conteudo.localidade;
  } catch (erro) {
    display.innerHTML = erro;
    console.log("DENTRO DO CATCH!");
    console.log({ erro });
  } finally {
    console.log("FINALLY!");
  }
}

btnCEP.addEventListener("click", buscaCEPtry);
