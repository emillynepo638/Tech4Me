function Emprestados() {
  const livros = [
    { id: 1, titulo: "1984", emprestadoPara: "Ana" },
    { id: 2, titulo: "A Revolução dos Bichos", emprestadoPara: "Carlos" },
  ];

  return (
    <div className="secao">
      <h2>📕 Emprestados</h2>
      <ul>
        {livros.map((livro) => (
          <li key={livro.id}>
            <strong>{livro.titulo}</strong> — Emprestado para:{" "}
            <strong>{livro.emprestadoPara}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Emprestados;
