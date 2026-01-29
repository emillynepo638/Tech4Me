import "./Doces.css";

const doces = [
  { id: 1, nome: "Brigadinho", tipo: "Chocolate", preco: 1.5 },
  { id: 2, nome: "Beijinho", tipo: "Coco", preco: 1.5 },
  { id: 3, nome: "Cajuzinho", tipo: "Amendoim", preco: 1.5 },
  { id: 4, nome: "Quindim", tipo: "Ovos", preco: 3.0 },
  { id: 5, nome: "Bolo de Rolo", tipo: "Tradicional", preco: 5.0 },
  { id: 6, nome: "Pudim", tipo: "Leite", preco: 4.0 }, // 👈 novo doce
];

function DoceCard({ doce }) {
  return (
    <li className="card">
      <div className="cardTop">
        <h3 className="cardTitle">{doce.nome}</h3>
        <span className="badge">{doce.tipo}</span>
      </div>

      <div className="cardBottom">
        <span className="price">
          {doce.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button className="btn">adicionar</button>
      </div>
    </li>
  );
}

function ListaDoces({ itens }) {
  return (
    <ul className="grid">
      {itens.map((doce) => (
        <DoceCard key={doce.id} doce={doce} />
      ))}
    </ul>
  );
}

export default function Doces() {
  return (
    <div className="page">
      <header className="header">
        <p className="pill">Loja de Doces 🍭</p>
        <h1>Lista de Doces</h1>
        <p className="sub">
            Confira nossa seleção especial de doces artesanais feitos para adoçar o seu dia.
        </p>
      </header>

      <main className="content">
        <ListaDoces itens={doces} />
      </main>
    </div>
  );
}
