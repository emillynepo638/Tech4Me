const carros = [
  { montadora: "Ford", modelo: "Fiesta", ano: 2020 },
  { montadora: "Chevrolet", modelo: "Onix", ano: 2023 },
  { montadora: "Volkswagen", modelo: "Gol", ano: 2022 },
  { montadora: "Fiat", modelo: "Argo", ano: 2018 }
];

// Ano atual
const anoAtual = new Date().getFullYear();

const seminovos = carros.filter(carro => anoAtual - carro.ano < 3);

console.log(seminovos);
