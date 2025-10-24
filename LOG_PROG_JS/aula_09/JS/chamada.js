function chamadaWhile() {
  var nomes = [];
  var nome = prompt("Digite o nome do aluno (ou deixe vazio para encerrar):");

  // enquanto o usuário digitar algum nome
  while (nome !== "") {
    nomes.push(nome); // adiciona o nome no array
    nome = prompt("Digite o nome do próximo aluno (ou deixe vazio para encerrar):");
  }

  console.log("🧾 Lista de alunos presentes (while):");
  console.log(nomes);
}
