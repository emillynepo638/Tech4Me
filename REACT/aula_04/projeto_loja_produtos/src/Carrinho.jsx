function Carrinho({ produtos }) {
  return (
    <div className="card">
      <h2>🛍️ Carrinho</h2>

      {produtos.map((produto, index) => (
        <p key={index}>
          {produto.nome} - R$ {produto.preco}
        </p>
      ))}
    </div>
  )
}

export default Carrinho
