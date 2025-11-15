class Carro {
  constructor(marca, modelo, ano, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
  }

  exibirInfo() {
    return (
      "Marca: " + this.marca +
      " | Modelo: " + this.modelo +
      " | Ano: " + this.ano +
      " | Cor: " + this.cor
    );
  }
}

var fusca = new Carro("Volkswagen", "Fusca", 1972, "Azul");
var chevette = new Carro("Chevrolet", "Chevette", 1981, "Bege");


console.log("🚗 Lista de carros antigos:");
console.log(fusca.exibirInfo());
console.log(chevette.exibirInfo());
