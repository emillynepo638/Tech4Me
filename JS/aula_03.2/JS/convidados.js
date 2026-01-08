const input = document.getElementById("nomeInput");
const btn = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaConvidados");
const total = document.getElementById("total");

let convidados = [];

function atualizarLista() {
  // Ordem alfabética
  convidados.sort((a, b) => a.localeCompare(b));

  // Limpa a lista
  lista.innerHTML = "";

  // Recria os itens
  convidados.forEach(nome => {
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });

  // Atualiza total
  total.textContent = `Total de convidados: ${convidados.length}`;
}

function adicionarConvidado() {
  const nome = input.value.trim();

  if (nome === "") return;

  convidados.push(nome);
  input.value = "";
  atualizarLista();
  input.focus();
}

btn.addEventListener("click", adicionarConvidado);

input.addEventListener("keypress", e => {
  if (e.key === "Enter") adicionarConvidado();
});
