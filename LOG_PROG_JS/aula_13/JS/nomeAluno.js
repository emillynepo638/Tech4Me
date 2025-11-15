var aluno = {
  nome: "Carlos",
  sobrenome: "Silva"
};

var informacao = {
  mostrar: function() {
    // usando o objeto aluno para montar o nome completo
    return aluno.nome + " " + aluno.sobrenome;
  }
};

console.log("Nome completo do aluno:");
console.log(informacao.mostrar());
