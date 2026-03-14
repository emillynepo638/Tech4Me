import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [numero, setNumero] = useState(0);
  const [quadrado, setQuadrado] = useState(0);

  useEffect(() => {
    setQuadrado(numero * numero);
  }, [numero]);

  function aumentar() {
    setNumero(numero + 1);
  }

  function diminuir() {
    setNumero(numero - 1);
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Efeito calculando o quadrado</h1>
        <p className="subtitle">
          Clique nos botões para aumentar ou diminuir o número
        </p>

        <div className="numero-box">
          <span>Número:</span>
          <strong>{numero}</strong>
        </div>

        <div className="botoes">
          <button onClick={diminuir}>- Diminuir</button>
          <button onClick={aumentar}>+ Aumentar</button>
        </div>

        <div className="resultado">
          <p>Quadrado do número:</p>
          <h2>{quadrado}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;