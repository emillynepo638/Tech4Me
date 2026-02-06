import { useState } from "react";

function SeletorCores() {
  const cores = [
    { hex: "#ff5d8f", nome: "Rosa Pink" },
    { hex: "#ffb3c6", nome: "Rosa Bebê" },
    { hex: "#cdb4db", nome: "Lilás" },
    { hex: "#bde0fe", nome: "Azul Céu" },
    { hex: "#caffbf", nome: "Verde Menta" },
    { hex: "#ffd6a5", nome: "Pêssego" },
  ];

  const [corSelecionada, setCorSelecionada] = useState(cores[0]);

  return (
    <div className="seletor-wrap">
      <div className="seletor-card">
        <div className="seletor-header">
          <h2>Seletor de Cores</h2>
          <p>Clique em uma cor para aplicar no painel.</p>
        </div>

        <div className="cores">
          {cores.map((cor) => (
            <button
              key={cor.hex}
              type="button"
              className={`cor ${corSelecionada.hex === cor.hex ? "ativa" : ""}`}
              style={{ backgroundColor: cor.hex }}
              onClick={() => setCorSelecionada(cor)}
            >
              <span className="cor-brilho" />
              {corSelecionada.hex === cor.hex && <span className="check">✓</span>}
            </button>
          ))}
        </div>

        <div className="painel-area">
          <div className="painel" style={{ backgroundColor: corSelecionada.hex }}>
            <div className="painel-badge">EM USO</div>

            <div className="painel-texto">
              <h3>{corSelecionada.nome}</h3>
              <p>{corSelecionada.hex}</p>
            </div>

            <div className="painel-footer">
              <span className="pill">Painel</span>
              <span className="pill">Cor aplicada</span>
            </div>
          </div>

          <div className="dica">
            <span className="dot" style={{ backgroundColor: corSelecionada.hex }} />
            <p>
              Selecionada: <strong>{corSelecionada.nome}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeletorCores;
