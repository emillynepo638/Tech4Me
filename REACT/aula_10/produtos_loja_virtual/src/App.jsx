import { useState } from "react";
import "./App.css";

function Produto({ nome, preco, estoque }) {
  const [quantidade, setQuantidade] = useState(0);

  function alterarQuantidade(e) {
    const valor = Number(e.target.value);

    if (valor < 0) {
      setQuantidade(0);
    } else {
      setQuantidade(valor);
    }
  }

  const excedeuEstoque = quantidade > estoque;
  const botaoDesativado = quantidade === 0 || excedeuEstoque;

  return (
    <div className="card-produto">
      <h2>{nome}</h2>
      <p className="preco">Preço: R$ {preco.toFixed(2)}</p>
      <p className="estoque">Estoque disponível: {estoque}</p>

      <div className="area-compra">
        <label>
          Quantidade:
          <input
            type="number"
            min="0"
            value={quantidade}
            onChange={alterarQuantidade}
          />
        </label>

        <button disabled={botaoDesativado}>
          Comprar
        </button>
      </div>

      {excedeuEstoque && (
        <p className="mensagem-erro">
          Quantidade maior do que o estoque disponível.
        </p>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Loja Virtual</h1>

      <div className="lista-produtos">
        <Produto nome="Notebook" preco={3500} estoque={5} />
        <Produto nome="Mouse Gamer" preco={120} estoque={8} />
        <Produto nome="Teclado Mecânico" preco={280} estoque={3} />
      </div>
    </div>
  );
}

export default App;