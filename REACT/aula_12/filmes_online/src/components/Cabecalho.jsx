import { Link } from "react-router-dom";

function Cabecalho() {
  return (
    <header className="cabecalho">
      <h1>CineFlix</h1>

      <nav>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}

export default Cabecalho;