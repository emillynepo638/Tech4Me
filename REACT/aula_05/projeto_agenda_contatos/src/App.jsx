import Contato from './Contato'
import './App.css'

function App() {
  const contatos = [
    {
      nome: 'Gabriella',
      telefone: '(11) 99999-1111',
      email: 'gabi@email.com'
    },
    {
      nome: 'Emilly',
      telefone: '(21) 98888-2222',
      email: 'emilly@email.com'
    },
    {
      nome: 'Ana',
      telefone: '(31) 97777-3333',
      email: 'ana@email.com'
    }
  ]

  return (
    <div className="container">
      <h1>📒 Agenda de Contatos</h1>

      {contatos.map((contato, index) => (
        <Contato key={index} contato={contato} />
      ))}
    </div>
  )
}

export default App
