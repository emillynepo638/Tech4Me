import { useState } from "react";
import "./App.css";

function App() {
  const [modoEscuro, setModoEscuro] = useState(false);

  function trocarModo() {
    setModoEscuro(!modoEscuro);
  }

  return (
    <div className={modoEscuro ? "app escuro" : "app claro"}>
      <div className="card">
        <h1>{modoEscuro ? "Modo Escuro" : "Modo Claro"}</h1>
        <p>
          Clique no botão para alterar as cores de fundo e da fonte da página.
        </p>

        <button onClick={trocarModo}>
          {modoEscuro ? "Ativar modo claro" : "Ativar modo escuro"}
        </button>
      </div>
    </div>
  );
}

export default App;