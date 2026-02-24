import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [tempo, setTempo] = useState({
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  const [rodando, setRodando] = useState(false);

  useEffect(() => {
    let timer;

    if (rodando) {
      timer = setTimeout(() => {
        setTempo((prev) => {
          let { horas, minutos, segundos } = prev;

          segundos++;

          if (segundos === 60) {
            segundos = 0;
            minutos++;
          }

          if (minutos === 60) {
            minutos = 0;
            horas++;
          }

          return { horas, minutos, segundos };
        });
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [rodando, tempo]);

  function iniciar() {
    setRodando(true);
  }

  function pausar() {
    setRodando(false);
  }

  function resetar() {
    setRodando(false);
    setTempo({ horas: 0, minutos: 0, segundos: 0 });
  }

  function formatar(valor) {
    return valor.toString().padStart(2, "0");
  }

  return (
    <div className="page">
      <h1 className="title">Temporizador</h1>
      <p className="subtitle">
        Um temporizador delicado para acompanhar cada instante 💕
      </p>

      <div className="card">
        <div className="display">
          <span className="tempo">
            {formatar(tempo.horas)}:
            {formatar(tempo.minutos)}:
            {formatar(tempo.segundos)}
          </span>
        </div>

        <div className="controles">
          <button onClick={iniciar}>Iniciar</button>
          <button onClick={pausar}>Pausar</button>
          <button onClick={resetar} className="outline">
            Resetar
          </button>
        </div>
      </div>
    </div>
  );
}
