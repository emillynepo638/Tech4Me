import { useState } from 'react'
import './App.css'

function StatusAssistido({ assistido }) {
  return (
    <span className={`status ${assistido ? "ok" : "pendente"}`}>
      {assistido ? "✅🍿 Assistido" : "⏳🎬 Não assistido"}
    </span>
  )
}

function TipoBadge({ tipo }) {
  return (
    <span className={`tipo ${tipo === "Filme" ? "filme" : "serie"}`}>
      Tipo: {tipo === "Filme" ? "Filme 🎬" : "Série 📺"}
    </span>
  )
}

function ItemFilme({ item, onMarcarAssistido }) {
  return (
    <li className={`item ${item.assistido ? "itemOk" : ""}`}>
      <div className="info">
        <strong className="titulo">{item.titulo}</strong>
        <div className="badges">
          <TipoBadge tipo={item.tipo} />
          <StatusAssistido assistido={item.assistido} />
        </div>
      </div>

      <div className="acoes">
        <button
          className="btn"
          onClick={() => onMarcarAssistido(item.id)}
          disabled={item.assistido}
        >
          {item.assistido ? "Já assistido ✅" : "Marcar como assistido"}
        </button>
      </div>
    </li>
  )
}

export default function App() {
  const [titulo, setTitulo] = useState("")
  const [tipo, setTipo] = useState("Filme")

  const [lista, setLista] = useState([
    { id: 1, titulo: "Como eu era antes de você", tipo: "Filme", assistido: true },
    { id: 2, titulo: "The Vampire Diares", tipo: "Série", assistido: true },
    { id: 3, titulo: "A culpa é das estrelas", tipo: "Filme", assistido: false },
  ])

  function adicionar() {
    if (titulo.trim() === "") return

    const novoItem = {
      id: Date.now(),
      titulo: titulo.trim(),
      tipo,
      assistido: false,
    }

    setLista([...lista, novoItem])
    setTitulo("")
    setTipo("Filme")
  }

  function marcarAssistido(id) {
    setLista(
      lista.map((item) =>
        item.id === id ? { ...item, assistido: true } : item
      )
    )
  }

  return (
    <main className="page">
      <section className="card">
        <h1 className="h1">🎬 Minha lista (Filmes e Séries)</h1>
        <p className="sub">
          Adicione e marque como assistido. A lista é numerada e guarda o tipo.
        </p>

        <div className="form">
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o título..."
          />

          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="Filme">Filme</option>
            <option value="Série">Série</option>
          </select>

          <button className="btn add" onClick={adicionar}>
            Adicionar
          </button>
        </div>

        <h2 className="h2">📌 Lista numerada</h2>

        <ol className="lista">
          {lista.map((item) => (
            <ItemFilme
              key={item.id}
              item={item}
              onMarcarAssistido={marcarAssistido}
            />
          ))}
        </ol>
      </section>
    </main>
  )
}
