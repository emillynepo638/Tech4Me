// Lista de notas dos alunos
var notas = [6.5, 8.0, 7.5, 5.0, 9.0, 6.0, 10.0];

// Exibir todas as notas
console.log("Notas da turma: " + notas.join(", "));

// Encontrar a maior nota
var maiorNota = Math.max(...notas);
console.log("Maior nota da turma: " + maiorNota);

// Contar quantos alunos ficaram abaixo da média (7.0)
var abaixoDaMedia = 0;
for (var i = 0; i < notas.length; i++) {
    if (notas[i] < 7.0) {
        abaixoDaMedia++;
    }
}

console.log("Quantidade de alunos abaixo da média 7.0: " + abaixoDaMedia);
