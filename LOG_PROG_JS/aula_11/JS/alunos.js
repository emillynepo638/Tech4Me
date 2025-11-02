var turma = [];
var quantidade = parseInt(prompt("Quantos alunos há na turma?"));

for (var i = 0; i < quantidade; i++) {
  var nome = prompt("Digite o nome do aluno " + (i + 1) + ":");
  turma[i] = nome; 
}

console.log("Lista de alunos:");
for (var i = 0; i < turma.length; i++) {
  console.log((i + 1) + " - " + turma[i]);
}