import Carrinho from './Carrinho'
import ListaDesejos from './ListaDesejos'
import HistoricoCompras from './HistoricoCompras'
import './App.css'

function App() {
  const carrinho = [
    { nome: 'Notebook', preco: 3500 },
    { nome: 'Mouse', preco: 150 },
    { nome: 'Teclado', preco: 300 }
  ]

  const desejos = [
    { nome: 'Monitor Gamer' },
    { nome: 'Cadeira Gamer' },
    { nome: 'Headset' }
  ]

  const historico = [
    { nome: 'Celular', data: '10/01/2026' },
    { nome: 'Fone Bluetooth', data: '05/01/2026' }
  ]

  return (
    <div className="container">
      <h1>🛒 Loja Virtual</h1>

      <Carrinho produtos={carrinho} />
      <ListaDesejos produtos={desejos} />
      <HistoricoCompras compras={historico} />
    </div>
  )
}

export default App
