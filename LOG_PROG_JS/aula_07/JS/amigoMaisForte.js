function verificarMaisForte() {
 
  var nome1 = prompt("Digite o nome do primeiro amigo:");
  var altura1 = parseFloat(prompt("Digite a altura alcançada por " + nome1 + ":"));

  var nome2 = prompt("Digite o nome do segundo amigo:");
  var altura2 = parseFloat(prompt("Digite a altura alcançada por " + nome2 + ":"));

  var nome3 = prompt("Digite o nome do terceiro amigo:");
  var altura3 = parseFloat(prompt("Digite a altura alcançada por " + nome3 + ":"));

  // Quem alcançou a maior altura
  var vencedor;
  var maiorAltura;

  if (altura1 > altura2 && altura1 > altura3) {
    vencedor = nome1;
    maiorAltura = altura1;
  } else if (altura2 > altura1 && altura2 > altura3) {
    vencedor = nome2;
    maiorAltura = altura2;
  } else if (altura3 > altura1 && altura3 > altura2) {
    vencedor = nome3;
    maiorAltura = altura3;
  } else {
    alert("Temos um empate!");
    return;
  }

  // Resultado
  alert("🏆 O amigo mais forte é " + vencedor + " com " + maiorAltura + " metros!");
}
