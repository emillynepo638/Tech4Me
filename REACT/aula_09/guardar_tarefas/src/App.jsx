import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((dados) => {
        setTarefas(dados.slice(0, 10));
        setCarregando(false);
      })
      .catch((erro) => {
        console.error("Erro ao carregar tarefas:", erro);
        setCarregando(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Lista de Tarefas</h1>
        <p className="subtitle">Tarefas sincronizadas com o servidor</p>

        {carregando ? (
          <p className="loading">Carregando tarefas...</p>
        ) : (
          <ul className="lista">
            {tarefas.map((tarefa) => (
              <li key={tarefa.id} className="item">
                <span>{tarefa.title}</span>
                <strong>{tarefa.completed ? "✅ Concluída" : "⏳ Pendente"}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;