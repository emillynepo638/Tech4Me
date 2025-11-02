function jogar() {
  var certa = "caneca";

  for (var i = 1; i <= 3; i++) {
    for (var t = 1; t <= 2; t++) {
      var resp = prompt("Ouvinte " + i + " - Tentativa " + t + ": O que o vencedor ganha?");
      if (resp && resp.toLowerCase() == certa) {
        alert("Acertou! Ganhou uma caneca ☕");
        break;
      } else {
        alert("Errou!");
      }
    }
  }

  alert("Fim da promoção!");
}
