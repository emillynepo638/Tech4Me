function Disponiveis() {
  const livros = [
    { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis" },
    { id: 2, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry" },
    { id: 3, titulo: "Capitães da Areia", autor: "Jorge Amado" },
  ];

  return (
    <div className="secao">
      <h2>📘 Disponíveis</h2>
      <ul>
        {livros.map((livro) => (
          <li key={livro.id}>
            <strong>{livro.titulo}</strong> — {livro.autor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Disponiveis;
