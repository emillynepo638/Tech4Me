const nomeCompleto = [
  "Emilly",
  "Vitória",
  "Santos",
  "Nepomuceno",
  "Bernardo"
];

// Desestruturação: primeiro nome + resto (sobrenomes)
const [primeiroNome, ...sobrenomes] = nomeCompleto;

console.log("Primeiro nome:", primeiroNome);
console.log("Total de sobrenomes:", sobrenomes.length);
console.log("Sobrenomes:", sobrenomes);
