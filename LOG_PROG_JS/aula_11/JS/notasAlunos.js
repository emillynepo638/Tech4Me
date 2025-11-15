var notas = [];
var soma = 0;

for (var i = 1; i <= 5; i++) {
    var nota = parseFloat(prompt("Digite a nota " + i + ":"));
    notas.push(nota);
    soma += nota;
}

var media = soma / 5;


console.log("Notas inseridas:", notas);
console.log("Média das notas:", media);
