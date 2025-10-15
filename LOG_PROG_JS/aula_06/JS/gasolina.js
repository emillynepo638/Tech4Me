function calcularPrecoGasolina() { // Função para calcular o preço com duas casas decimais

  var precoDigitado = prompt("Digite o preço da gasolina (ex: 4.940):");   // Pede o valor ao frentista

  var precoNumero = parseFloat(precoDigitado); // Converte o texto em número decimal

  // Verifica se o valor é válido
  if (isNaN(precoNumero)) {
    alert("Por favor, digite um número válido!");
    return; // para a função aqui se o valor for inválido
  }

  var precoFormatado = precoNumero.toFixed(2); // Formata o número com duas casas decimais

  
  console.log("Valor formatado: " + precoFormatado); // Mostra o resultado no console

  
  alert("O valor a pagar é R$ " + precoFormatado); // Mostra o resultado em um alerta
  
}
