function calcular() {
  // Pede o número ao usuário
  var numero = prompt("Digite um número:");

  // Converte para número real
  numero = parseFloat(numero);

  // Calcula os valores usando a biblioteca Math
  var raizQuadrada = Math.sqrt(numero);
  var arredondadoCima = Math.ceil(numero);
  var arredondadoBaixo = Math.floor(numero);

  // Mostra os resultados no console
  console.log("Número digitado: " + numero);
  console.log("Raiz quadrada: " + raizQuadrada);
  console.log("Arredondado para cima: " + arredondadoCima);
  console.log("Arredondado para baixo: " + arredondadoBaixo);

  // Verifica se o número arredondado para baixo é par ou ímpar
  if (arredondadoBaixo % 2 === 0) {
    console.log("O número arredondado para baixo é PAR.");
  } else {
    console.log("O número arredondado para baixo é ÍMPAR.");
  }
}
