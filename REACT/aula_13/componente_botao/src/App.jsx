import Botao from "./components/Botao";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Exemplo de Botão</h1>
      <Botao tipo="primario">Botão Primário</Botao>
      <Botao tipo="secundario">Botão Secundário</Botao>
    </div>
  );
}

export default App;