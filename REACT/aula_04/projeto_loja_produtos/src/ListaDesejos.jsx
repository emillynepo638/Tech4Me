function ListaDesejos({ produtos }) {
  return (
    <div className="card">
      <h2>💖 Lista de Desejos</h2>

      {produtos.map((produto, index) => (
        <p key={index}>{produto.nome}</p>
      ))}
    </div>
  )
}

export default ListaDesejos
