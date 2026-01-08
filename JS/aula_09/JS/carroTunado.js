const carroAntigo = {
  modelo: "Civic",
  ano: 2004,
  cor: "prata",
  motor: "1.6",
  portas: 4
};

console.log("Carro original:", carroAntigo);

// Novo objeto com alterações (reforma)
const carroTunado = { ...carroAntigo,     
  cor: "preto fosco",
  motor: "2.0 turbo",
  rodas: "aro 20",
  som: "subwoofer",
  tunado: true
};

console.log("Carro tunado:", carroTunado);
