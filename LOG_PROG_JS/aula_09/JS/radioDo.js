function ligarDo() {
  var frase;

  // O do...while garante que o prompt apareça pelo menos uma vez
  do {
    frase = prompt("📞 Seja bem-vindo à Rádio Tech4FM! Diga a frase correta para ganhar a camiseta:");
  } while (frase !== "Tech4FM é show");

  alert("🎉 Parabéns! Você ganhou a camiseta da Tech4FM!");
}
