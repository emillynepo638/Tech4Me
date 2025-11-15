// Lista de carros com propriedades: modelo e cor
var carros = [
    { modelo: "Fusca", cor: "azul" },
    { modelo: "Chevette", cor: "vermelho" },
    { modelo: "Gol", cor: "azul" },
    { modelo: "Uno", cor: "branco" },
    { modelo: "Kombi", cor: "vermelho" }
];

// Objeto para contar quantos carros há de cada cor
var cores = {};

// Loop para contar as cores
for (var i = 0; i < carros.length; i++) {
    var cor = carros[i].cor;

    if (cores[cor]) {
        cores[cor]++; // Se já existir, soma mais 1
    } else {
        cores[cor] = 1; // Se não existir, começa com 1
    }
}

// Exibe o total de carros por cor
console.log("Total de carros por cor:");
for (var cor in cores) {
    console.log(cor + ": " + cores[cor]);
}
