function calcularDesconto() { // Função que calcula o valor sem centavos

  var preco = prompt("Digite o valor do produto (ex: 13.83):");   // Pede o valor do produto

  var precoNumero = parseFloat(preco);   // Converte para número decimal

  // Verifica se o valor é válido
  if (isNaN(precoNumero)) {
    alert("Por favor, digite um número válido!");
    return;
  }

  var precoSemCentavos = Math.floor(precoNumero);   // Pega apenas a parte inteira do número (descarta os centavos)

  // Mostra o resultado
  console.log("Você pode pagar: R$ " + precoSemCentavos);
  alert("Você pode pagar: R$ " + precoSemCentavos);
}
