function HistoricoCompras({ compras }) {
  return (
    <div className="card">
      <h2>📜 Histórico de Compras</h2>

      {compras.map((compra, index) => (
        <p key={index}>
          {compra.nome} - Comprado em: {compra.data}
        </p>
      ))}
    </div>
  )
}

export default HistoricoCompras
