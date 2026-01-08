const input = document.getElementById("filmeInput");
const btnAdd = document.getElementById("btnAdicionar");
const btnAZ = document.getElementById("btnAZ");
const btnZA = document.getElementById("btnZA");
const buscaInput = document.getElementById("buscaInput");

const lista = document.getElementById("listaFilmes");

let filmes = [];
let ordemAtual = "AZ"; 

function renderizarLista() {
  lista.innerHTML = "";

  // aplica filtro
  const termo = buscaInput.value.toLowerCase();

  const filtrados = filmes.filter(f =>
    f.toLowerCase().includes(termo)
  );

  filtrados.forEach(filme => {
    const li = document.createElement("li");
    li.textContent = filme.toUpperCase();
    lista.appendChild(li);
  });
}

function ordenarFilmes() {
  filmes.sort((a, b) =>
    ordemAtual === "AZ"
      ? a.localeCompare(b)
      : b.localeCompare(a)
  );

  // estado visual dos botões
  btnAZ.classList.toggle("active", ordemAtual === "AZ");
  btnZA.classList.toggle("active", ordemAtual === "ZA");

  renderizarLista();
}

function adicionarFilme() {
  const nome = input.value.trim();
  if (!nome) return;

  filmes.push(nome);
  input.value = "";
  ordenarFilmes();
  input.focus();
}

// eventos
btnAdd.addEventListener("click", adicionarFilme);

input.addEventListener("keypress", e => {
  if (e.key === "Enter") adicionarFilme();
});

btnAZ.addEventListener("click", () => {
  ordemAtual = "AZ";
  ordenarFilmes();
});

btnZA.addEventListener("click", () => {
  ordemAtual = "ZA";
  ordenarFilmes();
});

buscaInput.addEventListener("input", renderizarLista);
