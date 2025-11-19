function mostrarSistema() {

  const sistema = {
    alunos: (function () {
      let lista = [];

      for (let i = 1; i <= 3; i++) {
        let nome = prompt(`Digite o nome do aluno ${i}:`);
        lista.push(nome);
      }

      return lista.sort(); // retorna os nomes em ordem alfabética
    })()
  };

  console.log(sistema);
  alert("Sistema executado! Veja o console do navegador (F12).");
}
