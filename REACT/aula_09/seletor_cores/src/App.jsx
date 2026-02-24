import { useState } from "react";
import "./App.css";

export default function App() {
  const cores = [
    { nome: "Vermelho", valor: "#ef4444" },
    { nome: "Azul", valor: "#3b82f6" },
    { nome: "Verde", valor: "#22c55e" },
    { nome: "Roxo", valor: "#a855f7" },
    { nome: "Amarelo", valor: "#eab308" },
    { nome: "Preto", valor: "#111827" },

    // ➕ novas cores
    { nome: "Rosa", valor: "#ec4899" },
    { nome: "Laranja", valor: "#f97316" },
    { nome: "Turquesa", valor: "#14b8a6" },
    { nome: "Cinza", valor: "#9ca3af" },
  ];

  const [corSelecionada, setCorSelecionada] = useState(cores[0]);

  return (
    <div className="page">
      <h1 className="title">Seletor de Cores</h1>
      <p className="subtitle">
        Escolha uma cor clicando nas bolinhas abaixo
      </p>

      <div className="layout">
        <div className="paleta">
          {cores.map((cor) => {
            const ativa = cor.valor === corSelecionada.valor;

            return (
              <button
                key={cor.valor}
                className={`bolinha ${ativa ? "ativa" : ""}`}
                style={{ backgroundColor: cor.valor }}
                onClick={() => setCorSelecionada(cor)}
                title={cor.nome}
              />
            );
          })}
        </div>

        <div
          className="painel"
          style={{ backgroundColor: corSelecionada.valor }}
        >
          <span className="textoPainel">
            Cor selecionada
            <br />
            <strong>{corSelecionada.nome}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
