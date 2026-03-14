function Sobre() {
  return (
    <main className="container">
      <h2 className="titulo-pagina">Sobre o site</h2>

      <div className="caixa-sobre">
        <p>
          O CineFlix é um site de filmes online criado em React para exibir uma
          lista de filmes, detalhes de cada título e navegação entre páginas.
        </p>

        <p>
          Neste projeto foram utilizadas rotas, componentes reutilizáveis,
          useParams para capturar o id do filme e uma página 404 para rotas que
          não existem.
        </p>
      </div>
    </main>
  );
}

export default Sobre;