var alunos = [];
var nome = prompt("Digite o nome do aluno (ou deixe vazio para encerrar):");

while (nome !== "") {
    alunos.push(nome);
    nome = prompt("Digite o nome do aluno (ou deixe vazio para encerrar):");
}

console.log("Lista de alunos:");
console.log(alunos);
