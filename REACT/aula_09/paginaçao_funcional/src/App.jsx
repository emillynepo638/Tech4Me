import { useState } from "react";
import "./App.css";

export default function App() {
  const itens = [
    "Paleta de Sombras Rose",
    "Blush Soft",
    "Perfume Floral",
    "Creme Hidratante",
    "Gloss Pink",
    "Sérum Facial",
    "Sabonete Suave",
    "Loção Corporal",
    "Óleo Essencial",
    "Máscara Facial",
  ];

  const itensPorPagina = 3;
  const totalPaginas = Math.ceil(itens.length / itensPorPagina);

  const [paginaAtual, setPaginaAtual] = useState(1);

  const inicio = (paginaAtual - 1) * itensPorPagina;
  const itensVisiveis = itens.slice(inicio, inicio + itensPorPagina);

  function voltar() {
    setPaginaAtual((p) => Math.max(1, p - 1));
  }

  function avancar() {
    setPaginaAtual((p) => Math.min(totalPaginas, p + 1));
  }

  return (
    <div className="page">
      <h1 className="title">Paginação</h1>
      <p className="subtitle">Descubra nossos produtos selecionados com carinho para você</p>

      <div className="card">
        <ul className="lista">
          {itensVisiveis.map((item, index) => (
            <li key={index} className="item">
              {item}
            </li>
          ))}
        </ul>

        <div className="paginacao">
          <button onClick={voltar} disabled={paginaAtual === 1}>
            ◀
          </button>

          <span className="textoPagina">
            Página <strong>{paginaAtual}</strong> de{" "}
            <strong>{totalPaginas}</strong>
          </span>

          <button onClick={avancar} disabled={paginaAtual === totalPaginas}>
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
