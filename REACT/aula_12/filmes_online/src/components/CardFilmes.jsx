import { Link } from "react-router-dom";

function CardFilme({ filme }) {
  return (
    <div className="card-filme">
      <img src={filme.imagem} alt={filme.titulo} />

      <h2>{filme.titulo}</h2>

      <p>
        <strong>Gênero:</strong> {filme.genero}
      </p>

      <p>
        <strong>Ano:</strong> {filme.ano}
      </p>

      <Link to={`/detalhes/${filme.id}`} className="botao">
        Ver detalhes
      </Link>
    </div>
  );
}

export default CardFilme;