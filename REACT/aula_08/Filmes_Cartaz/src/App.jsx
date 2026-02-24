import { useEffect, useState } from "react";
import "./App.css";

function FilmeCard({ filme }) {
  return (
    <article className="posterCard">
      <div className="posterGlow" />
      <img className="posterImg" src={filme.poster} alt={`Poster do filme ${filme.titulo}`} />

      <div className="posterInfo">
        <h3 className="posterTitle">{filme.titulo}</h3>
        <div className="posterMeta">
          <span className="badge">{filme.genero}</span>
          <span className="nota">⭐ {filme.nota}</span>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    // “ciclo de vida”: quando o componente monta (nasce)
    async function buscarFilmes() {
      try {
        setCarregando(true);
        setErro("");

        const res = await fetch("http://localhost:3001/filmes");
        if (!res.ok) throw new Error("Falha ao buscar filmes");

        const dados = await res.json();

        // Garantir top 10 por nota (se quiser)
        const top10 = [...dados].sort((a, b) => b.nota - a.nota).slice(0, 10);
        setFilmes(top10);
      } catch (e) {
        setErro("Não consegui carregar os filmes. Veja se o JSON Server está rodando na porta 3001.");
      } finally {
        setCarregando(false);
      }
    }

    buscarFilmes();
  }, []);

  return (
    <div className="page">
      <header className="top">
        <div className="brand">
          <span className="dot" />
          <h1>Filmes em Cartaz</h1>
        </div>
        <p className="subtitle">Top 10 melhores filmes da semana</p>
      </header>

      {carregando && <p className="status">Carregando cartazes…</p>}
      {erro && <p className="status error">{erro}</p>}

      {!carregando && !erro && (
        <section className="grid">
          {filmes.map((filme) => (
            <FilmeCard key={filme.id} filme={filme} />
          ))}
        </section>
      )}

      <footer className="footer">
        <p>
          🎬 Feito com 💜 por <strong>Emilly Nepomuceno</strong>
        </p>
        <span>Projeto acadêmico — React + JSON Server</span>
      </footer>

    </div>
  );
}
