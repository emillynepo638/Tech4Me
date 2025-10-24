function contar() {
  var numero = 1; 

  // O bloco será executado pelo menos uma vez
  do {
    console.log("Número: " + numero);
    numero++; // soma +1 a cada volta
  } while (numero <= 10); // repete até chegar em 10

  console.log("✅ Contagem finalizada!");
}
