function Curso({ curso }) {
  return (
    <div className="card">
      <h2>{curso.nome}</h2>
      <p>⏱ Carga horária: {curso.cargaHoraria}</p>
      <p>👨‍🏫 Professor: {curso.professor}</p>
    </div>
  )
}

export default Curso
