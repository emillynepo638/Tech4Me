function ligar() {
  var frase;

  // Enquanto o usuário não digitar a frase certa, o loop continua
  while (frase !== "Tech4FM é show") {
    frase = prompt("📞 Seja bem-vindo à Rádio Tech4FM! Diga a frase correta para ganhar a camiseta:");
  }

  alert("🎉 Parabéns! Você ganhou a camiseta da Tech4FM!");
}