import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

function Home() {
  const livros = [
    { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis" },
    { id: 2, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry" },
    { id: 3, titulo: "Harry Potter e a Pedra Filosofal", autor: "J. K. Rowling" },
    { id: 4, titulo: "Jogos Vorazes", autor: "Suzanne Collins" },
    { id: 5, titulo: "A Culpa é das Estrelas", autor: "John Green" },
  ];

  return (
    <div className="pagina">
      <h2>Todos os livros disponíveis</h2>
      <div className="cards">
        {livros.map((livro) => (
          <div className="card" key={livro.id}>
            <h3>{livro.titulo}</h3>
            <p><strong>Autor:</strong> {livro.autor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Autores() {
  const autores = [
    "Machado de Assis",
    "Antoine de Saint-Exupéry",
    "J. K. Rowling",
    "Suzanne Collins",
    "John Green",
  ];

  return (
    <div className="pagina">
      <h2>Lista de autores</h2>
      <ul className="lista">
        {autores.map((autor, index) => (
          <li key={index}>{autor}</li>
        ))}
      </ul>
    </div>
  );
}

function Sobre() {
  return (
    <div className="pagina">
      <h2>Sobre o site</h2>
      <p>
        Este site foi criado em React para apresentar livros disponíveis,
        autores cadastrados e navegação entre páginas utilizando rotas.
      </p>
    </div>
  );
}

function NaoEncontrada() {
  return (
    <div className="pagina">
      <h2>Erro 404</h2>
      <p>A página que você tentou acessar não existe.</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <header className="topo">
        <h1>Biblioteca Online</h1>

        <nav className="menu">
          <NavLink to="/" className="link">
            Livros
          </NavLink>

          <NavLink to="/autores" className="link">
            Autores
          </NavLink>

          <NavLink to="/sobre" className="link">
            Sobre
          </NavLink>
        </nav>
      </header>

      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/autores" element={<Autores />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;