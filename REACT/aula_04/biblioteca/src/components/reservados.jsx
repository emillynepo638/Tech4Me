function Reservados() {
  const livros = [
    { id: 1, titulo: "Harry Potter", dataReserva: "10/01/2026" },
    { id: 2, titulo: "Senhor dos Anéis", dataReserva: "15/01/2026" },
  ];

  return (
    <div className="secao">
      <h2>📙 Reservados</h2>
      <ul>
        {livros.map((livro) => (
          <li key={livro.id}>
            <strong>{livro.titulo}</strong> — Data da reserva:{" "}
            <strong>{livro.dataReserva}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reservados;
