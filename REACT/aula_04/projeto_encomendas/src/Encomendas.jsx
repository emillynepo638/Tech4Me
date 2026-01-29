import "./Encomendas.css";

// 1) Recebidas
function Recebidas() {
  const pacotesRecebidos = [
    { id: 101, codigo: "BR-9831", cliente: "Ana Souza", data: "26/01/2026" },
    { id: 102, codigo: "BR-1140", cliente: "Pedro Lima", data: "26/01/2026" },
    { id: 103, codigo: "BR-7722", cliente: "Bruna Costa", data: "27/01/2026" },
  ];

  return (
    <section className="coluna">
      <h2 className="tituloColuna">Recebidas</h2>

      <ul className="lista">
        {pacotesRecebidos.map((p) => (
          <li key={p.id} className="card">
            <div className="topoCard">
              <strong className="codigo">{p.codigo}</strong>
              <span className="tag recebida">Recebida</span>
            </div>

            <p className="linha">
              <span className="label">Cliente:</span> {p.cliente}
            </p>
            <p className="linha">
              <span className="label">Data:</span> {p.data}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// 2) Em transporte
function EmTransporte() {
  const pacotesTransporte = [
    {
      id: 201,
      codigo: "BR-5561",
      destino: "Centro - RJ",
      previsao: "28/01/2026",
    },
    {
      id: 202,
      codigo: "BR-9090",
      destino: "Copacabana - RJ",
      previsao: "29/01/2026",
    },
  ];

  return (
    <section className="coluna">
      <h2 className="tituloColuna">Em transporte</h2>

      <ul className="lista">
        {pacotesTransporte.map((p) => (
          <li key={p.id} className="card">
            <div className="topoCard">
              <strong className="codigo">{p.codigo}</strong>
              <span className="tag transporte">Transporte</span>
            </div>

            <p className="linha">
              <span className="label">Destino:</span> {p.destino}
            </p>
            <p className="linha">
              <span className="label">Previsão:</span> {p.previsao}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// 3) Entregues (mostra se recebeu o destinatário ou outra pessoa)
function Entregues() {
  const pacotesEntregues = [
    {
      id: 301,
      codigo: "BR-2201",
      destino: "Tijuca - RJ",
      dataEntrega: "26/01/2026",
      recebidoPor: "Destinatário", // <- regra do enunciado
      nomeRecebedor: "Mariana Rocha",
    },
    {
      id: 302,
      codigo: "BR-3302",
      destino: "Barra - RJ",
      dataEntrega: "27/01/2026",
      recebidoPor: "Outra pessoa do endereço", // <- regra do enunciado
      nomeRecebedor: "João (porteiro)",
    },
  ];

  return (
    <section className="coluna">
      <h2 className="tituloColuna">Entregues</h2>

      <ul className="lista">
        {pacotesEntregues.map((p) => (
          <li key={p.id} className="card">
            <div className="topoCard">
              <strong className="codigo">{p.codigo}</strong>
              <span className="tag entregue">Entregue</span>
            </div>

            <p className="linha">
              <span className="label">Destino:</span> {p.destino}
            </p>
            <p className="linha">
              <span className="label">Entrega:</span> {p.dataEntrega}
            </p>

            <div className="blocoRecebimento">
              <p className="linha">
                <span className="label">Recebido por:</span> {p.recebidoPor}
              </p>
              <p className="linha">
                <span className="label">Nome:</span> {p.nomeRecebedor}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Página principal
export default function Encomendas() {
  return (
    <div className="page">
      <header className="header">
        <p className="pill">📦 Encomendas</p>
        <h1>Painel de entregas</h1>
        <p className="sub">
          Acompanhe pacotes recebidos, em transporte e entregues.
        </p>
      </header>

      <main className="board">
        <Recebidas />
        <EmTransporte />
        <Entregues />
      </main>
    </div>
  );
}
