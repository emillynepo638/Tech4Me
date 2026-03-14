import filmes from "../data/Filmes.js";
import CardFilme from "../components/CardFilmes.jsx";

function Inicio() {
  return (
    <main className="container">
      <h2 className="titulo-pagina">Filmes em cartaz</h2>

      <div className="grade-filmes">
        {filmes.map((filme) => (
          <CardFilme key={filme.id} filme={filme} />
        ))}
      </div>
    </main>
  );
}

export default Inicio;