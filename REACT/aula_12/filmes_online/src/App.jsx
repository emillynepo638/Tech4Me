import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from "./components/Cabecalho.jsx";
import Inicio from "./pages/Inicio.jsx";
import Detalhes from "./pages/Detalhes.jsx";
import Sobre from "./pages/Sobre.jsx";
import NaoEncontrada from "./pages/NaoEncontrada.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;