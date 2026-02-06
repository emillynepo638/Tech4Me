function Contato({ contato }) {
  return (
    <div className="card">
      <h2>{contato.nome}</h2>
      <p>📞 {contato.telefone}</p>
      <p>📧 {contato.email}</p>
    </div>
  )
}

export default Contato
