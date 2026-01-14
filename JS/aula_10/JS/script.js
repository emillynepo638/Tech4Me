const API_URL = "http://localhost:3000/missoes";

const lista = document.getElementById("lista-missoes");
const form = document.getElementById("form-missao");
const input = document.getElementById("titulo");

const btnTodas = document.getElementById("todas");
const btnPendentes = document.getElementById("pendentes");
const btnConcluidas = document.getElementById("concluidas");

async function buscarMissoes() {
    const resposta = await fetch(API_URL);
    const missoes = await resposta.json();
    mostrarMissoes(missoes);
}

// Mostrar missões na tela
function mostrarMissoes(missoes) {
    lista.innerHTML = "";

    missoes.forEach(missao => {
        // Cria os elementos HTML pelo JS
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = missao.titulo;
        if (missao.concluida) {
            span.classList.add("concluida");
        }

        span.addEventListener("click", () => {
            atualizarMissao(missao);
        });

        // Botão de excluir
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "🗑️";
        btnExcluir.addEventListener("click", () => {
            excluirMissao(missao.id);
        });

        li.appendChild(span);
        li.appendChild(btnExcluir);
        lista.appendChild(li);
    });
}

// Adicionar missão
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const novaMissao = {
        titulo: input.value,
        concluida: false
    };

    await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(novaMissao)
    });

    input.value = "";
    buscarMissoes();
});

// Atualizar missão (concluir / desfazer)
async function atualizarMissao(missao) {
    await fetch(`${API_URL}/${missao.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ...missao,
            concluida: !missao.concluida
        })
    });
    
    buscarMissoes();
}

// Excluir missão
async function excluirMissao(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    buscarMissoes();
}

// Filtros
btnTodas.addEventListener("click", buscarMissoes);

btnPendentes.addEventListener("click", async () => {
    const res = await fetch(API_URL);
    const missoes = await res.json();
    const pendentes = missoes.filter(m => !m.concluida);
    mostrarMissoes(pendentes);
});

btnConcluidas.addEventListener("click", async () => {
    const res = await fetch(API_URL);
    const missoes = await res.json();
    const concluidas = missoes.filter(m => m.concluida);
    mostrarMissoes(concluidas);
});

// Inicial
buscarMissoes();