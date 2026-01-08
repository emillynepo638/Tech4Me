function mostrarPrimeiroEUltimo(...nomes) {
  if (nomes.length === 0) {
    console.log("Nenhum nome informado.");
    return;
  }

  const primeiroNome = nomes[0];
  const ultimoSobrenome = nomes[nomes.length - 1];

  console.log("Primeiro nome:", primeiroNome);
  console.log("Último sobrenome:", ultimoSobrenome);
}

mostrarPrimeiroEUltimo(
  "Emilly",
  "Vitória",
  "Santos",
  "Nepomuceno",
  "Bernardo"
);