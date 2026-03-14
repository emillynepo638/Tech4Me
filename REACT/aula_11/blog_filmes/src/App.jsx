import { useState } from "react";
import "./App.css";

function Inicio() {
  return (
    <div className="pagina">
      <h2>Bem-vindo ao CineBlog 🎬</h2>
      <p>
        Aqui você encontra recomendações de filmes, listas e sinopses
        para escolher o que assistir.
      </p>
    </div>
  );
}

function Listagem() {
  const filmes = [
    "Interestelar",
    "Crepúsculo",
    "Jogos Vorazes",
    "Velozes e Furiosos",
    "Vingadores"
  ];

  return (
    <div className="pagina">
      <h2>Lista de Filmes</h2>

      <ul className="lista">
        {filmes.map((filme, index) => (
          <li key={index}>{filme}</li>
        ))}
      </ul>
    </div>
  );
}

function Sinopse() {
  const filmes = [
    {
      nome: "Interestelar",
      sinopse:
        "Um grupo de astronautas atravessa um buraco de minhoca no espaço em busca de um novo planeta habitável para salvar a humanidade."
    },
    {
      nome: "Crepúsculo",
      sinopse:
        "Bella Swan se muda para uma nova cidade e se apaixona por Edward Cullen, um misterioso jovem que guarda um grande segredo: ele é um vampiro."
    },
    {
      nome: "Jogos Vorazes",
      sinopse:
        "Em um futuro distópico, jovens são obrigados a participar de um torneio mortal televisionado. Katniss Everdeen se voluntaria para salvar sua irmã."
    },
    {
      nome: "Velozes e Furiosos",
      sinopse:
        "A saga acompanha Dominic Toretto e sua equipe em corridas ilegais, grandes roubos e missões cheias de ação e velocidade."
    },
    {
      nome: "Vingadores",
      sinopse:
        "Os maiores heróis da Terra se unem para impedir Loki e um exército alienígena de dominar o planeta."
    }
  ];

  return (
    <div className="pagina">
      <h2>Sinopse dos Filmes</h2>

      <div className="cards">
        {filmes.map((filme, index) => (
          <div className="card-filme" key={index}>
            <h3>{filme.nome}</h3>
            <p>{filme.sinopse}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Sobre() {
  return (
    <div className="pagina">
      <h2>Sobre o Blog</h2>
      <p>
        Este blog foi criado para compartilhar recomendações e sinopses
        de filmes famosos do cinema mundial.
      </p>
    </div>
  );
}

function App() {
  const [pagina, setPagina] = useState("inicio");

  function renderizarPagina() {
    if (pagina === "inicio") return <Inicio />;
    if (pagina === "lista") return <Listagem />;
    if (pagina === "sinopse") return <Sinopse />;
    if (pagina === "sobre") return <Sobre />;
  }

  return (
    <div className="container">
      <h1>CineBlog</h1>

      <nav className="menu">
        <button onClick={() => setPagina("inicio")}>Início</button>
        <button onClick={() => setPagina("lista")}>Listagem</button>
        <button onClick={() => setPagina("sinopse")}>Sinopse</button>
        <button onClick={() => setPagina("sobre")}>Sobre</button>
      </nav>

      <div className="conteudo">
        {renderizarPagina()}
      </div>
    </div>
  );
}

export default App;