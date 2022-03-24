function validar() {
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  if (usuario == "aluno" && senha == "1234") {
    alert("Login realizado com sucesso");
  } else {
    alert("Preencha os campos corretamente");
  }
}
