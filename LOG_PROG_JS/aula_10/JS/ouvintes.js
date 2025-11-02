var ouvintes = [];

function enviarMensagem() {
  var nome = prompt("Digite seu nome:") || document.getElementById("nome").value;

  if (nome == "") {
    alert("Digite um nome!");
    return;
  }

  for (var i = 0; i < ouvintes.length; i++) {
    if (ouvintes[i].toLowerCase() == nome.toLowerCase()) {
      alert("Você já participou!");
      return;
    }
  }

  ouvintes.push(nome);

  if (ouvintes.length <= 5) {
    alert("Parabéns, " + nome + "! Você ganhou um par de ingressos!");
  } else {
    alert("Obrigado por participar, " + nome + ". Infelizmente não ganhou.");
  }

  document.getElementById("nome").value = "";
}
