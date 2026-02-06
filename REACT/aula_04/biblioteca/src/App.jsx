import Disponiveis from "./components/disponiveis";
import Emprestados from "./components/emprestados";
import Reservados from "./components/reservados";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>📚 Biblioteca</h1>

      <Disponiveis />
      <Emprestados />
      <Reservados />
    </div>
  );
}

export default App;
