function somarApostas() {
  var total = 0;
  var aposta;
  var contador = 1;

  // Executa o bloco pelo menos uma vez
  do {
    aposta = parseFloat(prompt("Digite o valor da aposta do amigo " + contador + ":"));
    total = total + aposta;
    contador++;
  } while (contador <= 4); // Continua até o 4º amigo

  alert("💸 O valor total do prêmio é: R$ " + total.toFixed(2));
}
