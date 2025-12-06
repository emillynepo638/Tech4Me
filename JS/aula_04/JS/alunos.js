const input = document.getElementById("nomeAluno");
const botao = document.getElementById("btnCadastrar");
const lista = document.getElementById("listaAlunos");

botao.addEventListener("click", () => {
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  // Criar <li>
  const item = document.createElement("li");
  item.textContent = nome.toUpperCase();

  // Adicionar à lista
  lista.appendChild(item);

  // Limpar campo
  input.value = "";
  input.focus();
});
