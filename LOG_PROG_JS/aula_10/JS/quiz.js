var respostaCerta = "Tech4Me"; // você pode trocar pela resposta que quiser

for (var i = 1; i <= 3; i++) {
  var tentativa = prompt("Tentativa " + i + ": Resposta enviada");

  if (tentativa && tentativa.toLowerCase() === respostaCerta) {
    alert("Você acertou! Parabéns!");
    break;
  }
}

