import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");
  const [cor, setCor] = useState("#ffd54f");
  const [corNaFonte, setCorNaFonte] = useState(false);
  const [notas, setNotas] = useState(() => {
    const notasSalvas = localStorage.getItem("notas");
    return notasSalvas ? JSON.parse(notasSalvas) : [];
  });

  useEffect(() => {
    localStorage.setItem("notas", JSON.stringify(notas));
  }, [notas]);

  function adicionarNota() {
    if (texto.trim() === "") return;

    const novaNota = {
      id: Date.now(),
      texto: texto,
      cor: cor,
      corNaFonte: corNaFonte,
    };

    setNotas([...notas, novaNota]);
    setTexto("");
  }

  function excluirNota(id) {
    const notasAtualizadas = notas.filter((nota) => nota.id !== id);
    setNotas(notasAtualizadas);
  }

  return (
    <div className="container">
      <div className="painel">
        <h1>Quadro de Anotações</h1>
        <p className="subtitle">
          Crie post-its personalizados e deixe tudo salvo no navegador
        </p>

        <div className="controles">
          <input
            type="text"
            placeholder="Digite sua anotação"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />

          <select value={cor} onChange={(e) => setCor(e.target.value)}>
            <option value="#ffd54f">Amarelo</option>
            <option value="#ff8a80">Vermelho</option>
            <option value="#80d8ff">Azul</option>
            <option value="#a7ffeb">Verde água</option>
            <option value="#ea80fc">Roxo</option>
            <option value="#f8bbd0">Rosa</option>
          </select>

          <label className="check">
            <input
              type="checkbox"
              checked={corNaFonte}
              onChange={(e) => setCorNaFonte(e.target.checked)}
            />
            Aplicar cor na fonte
          </label>

          <button onClick={adicionarNota}>Criar nota</button>
        </div>

        <div className="quadro">
          {notas.length === 0 ? (
            <p className="sem-notas">Nenhuma anotação criada ainda.</p>
          ) : (
            notas.map((nota) => (
              <div
                key={nota.id}
                className="nota"
                style={{
                  backgroundColor: nota.corNaFonte ? "#fff8dc" : nota.cor,
                  color: nota.corNaFonte ? nota.cor : "#333",
                }}
              >
                <button
                  className="btn-excluir"
                  onClick={() => excluirNota(nota.id)}
                >
                  ×
                </button>

                <p>{nota.texto}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;