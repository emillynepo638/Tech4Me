const veiculo = {
  marca: "Fiat",
  modelo: "Pulse",
  anoFabricacao: 2023,
  mesFabricacao: 9, // setembro
  anoModelo: null
};

// IIFE para calcular o ano modelo
(function(v) {
  v.anoModelo = v.mesFabricacao <= 7 
    ? v.anoFabricacao 
    : v.anoFabricacao + 1;
})(veiculo);

console.log(veiculo);
