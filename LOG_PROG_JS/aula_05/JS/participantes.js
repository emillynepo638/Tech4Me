// Pede o número de participantes
var participantes = prompt("Digite o número de participantes da chamada:");

// Converte para número
participantes = Number(participantes);

// Verifica o limite da sala (20)
if (participantes >= 20) {
  alert("O limite da sala foi atingido!");
} else {
  alert("Ainda existe limite na sala.");
}
