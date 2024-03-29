class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = [];
  }
  salvar() {
    let produto = this.lerDados();

    if (this.validaCampos(produto)) {
      this.adicionar(produto);

      //alert("salvar");
    }
    this.listaTabela();
    // console.log(this.arrayProdutos);
    this.cancelar();
  }

  listaTabela() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";
    for (let i = 0; i < this.arrayProdutos.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_produto = tr.insertCell();
      let td_valor = tr.insertCell();
      let td_acoes = tr.insertCell();

      td_id.innerText = this.arrayProdutos[i].id;
      td_produto.innerText = this.arrayProdutos[i].nomeProduto;
      td_valor.innerText = this.arrayProdutos[i].valor;
      //outra forma de centralizar
      td_id.classList.add("center");
      td_acoes.classList.add("center");

      let imgEdit = document.createElement("img");
      imgEdit.src = "./img/editar.png";
      td_acoes.appendChild(imgEdit);

      let imgDelete = document.createElement("img");
      imgDelete.src = "./img/excluir.png";
      td_acoes.appendChild(imgDelete);
      imgDelete.setAttribute(
        "onclick",
        "produto.deletar(" + this.arrayProdutos[i].id + ")"
      );
    }
  }
  adicionar(produto) {
    this.arrayProdutos.push(produto);
    this.id++;
  }

  lerDados() {
    let produto = {};
    produto.id = this.id;
    produto.nomeProduto = document.getElementById("produto").value;
    produto.valor = document.getElementById("valor").value;

    return produto;
  }

  validaCampos(produto) {
    let msg = "";
    if (produto.nomeProduto == "") {
      msg += " - informe o nome do produto";
    }
    if (produto.valor == "") {
      msg += "- Informe o valor do produto";
    }
    if (msg != "") {
      alert(msg);
      return false;
    }
    return true;
  }
  cancelar() {
    document.getElementById("produto").value = "";
    document.getElementById("valor").value = "";
  }
  deletar(id) {
    if (confirm("deseja realmente deleletar o" + id)) {
    }
    let tbody = document.getElementById("tbody");

    for (let i = 0; i < this.arrayProdutos.length; i++) {
      if (this.arrayProdutos[i].id == id) {
        //pega o item para deletar pega o i é quantos quer deletar 01
        this.arrayProdutos.splice(i, 1);
        tbody.deleteRow(i);
      }
    }
    //alert("deletar o id " + id);
  }
}

var produto = new Produto();
//implementar funão editar
