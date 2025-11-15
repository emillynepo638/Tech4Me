var alunos = [];
var nome;

do {
    nome = prompt("Digite o nome do aluno (ou deixe vazio para encerrar):");

    if (nome !== "") {
        alunos.push(nome);
    }

} while (nome !== "");

console.log("Lista de alunos:");
console.log(alunos);
