function chamadaDoWhile() {
  var nomes = [];
  var nome;

  do {
    nome = prompt("Digite o nome do aluno (ou deixe vazio para encerrar):");

    if (nome !== "") {
      nomes.push(nome); // adiciona o nome no array
    }

  } while (nome !== ""); // repete enquanto o nome não for vazio

  console.log("🧾 Lista de alunos presentes (do...while):");
  console.log(nomes);
}
