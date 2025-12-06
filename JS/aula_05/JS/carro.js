// Classe Pai
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descrever() {
        console.log(`${this.marca} ${this.modelo} (${this.ano})`);
    }
}

// Classe Filha
class CarroEletrico extends Carro {
    constructor(marca, modelo, ano, bateria, autonomia) {
        super(marca, modelo, ano); // chama o construtor da classe pai
        this.bateria = bateria;    // em kWh
        this.autonomia = autonomia; // em km
    }

    carregar() {
        console.log(`Carregando a bateria de ${this.bateria} kWh...`);
    }

    infoAutonomia() {
        console.log(`Autonomia estimada: ${this.autonomia} km`);
    }
}

// Criando objetos
const tesla = new CarroEletrico("Tesla", "Model 3", 2024, 75, 450);

tesla.descrever();        // método da classe pai
tesla.carregar();         // método da classe filha
tesla.infoAutonomia();
