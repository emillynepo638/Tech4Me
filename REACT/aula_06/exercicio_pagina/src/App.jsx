import { useState } from "react";
import "./App.css";

function App() {
  const [pagina, setPagina] = useState(0);

  function paginaAnterior() {
    setPagina(pagina - 1);
  }

  function proximaPagina() {
    setPagina(pagina + 1);
  }

  return (
    <div className="container">
      <button
        onClick={paginaAnterior}
        disabled={pagina === 0}
      >
        -
      </button>

      <span className="pagina">{pagina}</span>

      <button
        onClick={proximaPagina}
        disabled={pagina === 10}
      >
        +
      </button>
    </div>
  );
}

export default App;
