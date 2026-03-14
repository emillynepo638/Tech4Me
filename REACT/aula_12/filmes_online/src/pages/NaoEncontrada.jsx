import { Link } from "react-router-dom";

function NaoEncontrada() {
  return (
    <main className="container nao-encontrada">
      <h2>404</h2>
      <p>Ops! A página que você tentou acessar não existe.</p>

      <Link to="/" className="botao">
        Voltar para o início
      </Link>
    </main>
  );
}

export default NaoEncontrada;