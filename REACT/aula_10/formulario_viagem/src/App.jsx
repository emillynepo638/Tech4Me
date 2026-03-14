import { useState } from "react";
import "./App.css";

function App() {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [resumo, setResumo] = useState(null);

  let mensagemErro = "";

  if (quantidade <= 0) {
    mensagemErro = "O mínimo de passagens é 1";
  } else if (quantidade > 5) {
    mensagemErro = "Limite de passagens excedido";
  }

  const botaoDesativado = mensagemErro !== "";

  function comprar(e) {
    e.preventDefault();

    setResumo({
      origem,
      destino,
      quantidade
    });
  }

  return (
    <div className="container">
      <h1>Compra de Passagens</h1>

      <form className="formulario" onSubmit={comprar}>

        <label>
          Origem
          <input
            type="text"
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
          />
        </label>

        <label>
          Destino
          <input
            type="text"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
        </label>

        <label>
          Quantidade de passagens
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
          />
        </label>

        {mensagemErro && (
          <p className="erro">{mensagemErro}</p>
        )}

        <button type="submit" disabled={botaoDesativado}>
          Comprar
        </button>

      </form>

      {resumo && (
        <div className="resumo">
          <h2>Resumo da compra</h2>
          <p><strong>Origem:</strong> {resumo.origem}</p>
          <p><strong>Destino:</strong> {resumo.destino}</p>
          <p><strong>Passagens:</strong> {resumo.quantidade}</p>
        </div>
      )}
    </div>
  );
}

export default App;