const carros = [
  { montadora: "Ford", modelo: "Fiesta" },
  { montadora: "Chevrolet", modelo: "Onix" },
  { montadora: "Volkswagen", modelo: "Gol" },
  { montadora: "Fiat", modelo: "Argo" }
];

// Exibir apenas as montadoras no console
carros.forEach(carro => {
  console.log(carro.montadora);
});
