import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Relógio em Tempo Real</h1>
        <p className="subtitle">Acompanhe o horário atualizado a cada segundo</p>

        <div className="relogio">
          {horaAtual.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}

export default App;