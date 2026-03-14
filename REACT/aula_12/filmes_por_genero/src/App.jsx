import { Routes, Route, NavLink, useParams } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="pagina">
      <h2>Blog de Filmes</h2>
      <p>Escolha um gênero no menu para ver os filmes.</p>
    </div>
  );
}

function FilmesPorGenero() {
  const { genero } = useParams();

  const filmes = [
    { id: 1, nome: "Velozes e Furiosos", genero: "acao" },
    { id: 2, nome: "Vingadores", genero: "acao" },
    { id: 3, nome: "Crepúsculo", genero: "romance" },
    { id: 4, nome: "Como Eu Era Antes de Você", genero: "romance" },
    { id: 5, nome: "Interestelar", genero: "ficcao" },
    { id: 6, nome: "Avatar", genero: "ficcao" },
  ];

  const filmesFiltrados = filmes.filter((filme) => filme.genero === genero);

  return (
    <div className="pagina">
      <h2>Filmes de {genero}</h2>

      {filmesFiltrados.length > 0 ? (
        <div className="cards">
          {filmesFiltrados.map((filme) => (
            <div className="card" key={filme.id}>
              <h3>{filme.nome}</h3>
              <p>Gênero: {filme.genero}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhum filme encontrado para esse gênero.</p>
      )}
    </div>
  );
}

function Erro404() {
  return (
    <div className="pagina">
      <h2>Página não encontrada</h2>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>CineBlog</h1>

      <nav className="menu">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/filmes/acao">Ação</NavLink>
        <NavLink to="/filmes/romance">Romance</NavLink>
        <NavLink to="/filmes/ficcao">Ficção</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes/:genero" element={<FilmesPorGenero />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </div>
  );
}

export default App;