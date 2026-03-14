import { useParams, Link } from "react-router-dom";
import filmes from "../data/Filmes.js";

function Detalhes() {
  const { id } = useParams();

  const filme = filmes.find((item) => item.id === Number(id));

  if (!filme) {
    return (
      <main className="container">
        <h2>Filme não encontrado</h2>
        <Link to="/" className="botao">
          Voltar para a página inicial
        </Link>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="card-detalhes">
        <img src={filme.imagem} alt={filme.titulo} />

        <div className="info-detalhes">
          <h2>{filme.titulo}</h2>
          <p><strong>Gênero:</strong> {filme.genero}</p>
          <p><strong>Ano:</strong> {filme.ano}</p>
          <p><strong>Diretor:</strong> {filme.diretor}</p>
          <p><strong>Sinopse:</strong> {filme.sinopse}</p>

          <Link to="/" className="botao">
            Voltar
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Detalhes;