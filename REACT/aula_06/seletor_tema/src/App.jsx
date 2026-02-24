import { useState, useEffect } from 'react'
import './App.css'

function SeletorTema({ tema, alterarTema }) {
  return (
    <div className="seletor-tema">
      <button
        className={tema === 'claro' ? 'ativo' : ''}
        onClick={() => alterarTema('claro')}
      >
        🌸 Tema Claro
      </button>

      <button
        className={tema === 'escuro' ? 'ativo' : ''}
        onClick={() => alterarTema('escuro')}
      >
        🌙 Tema Escuro
      </button>
    </div>
  )
}

function App() {
  const [tema, setTema] = useState('claro')

  // Ciclo de vida = executa sempre que o tema muda
  useEffect(() => {
    document.body.className = tema
  }, [tema])

  return (
    <div className="app">
      <h1>Seletor de Tema</h1>
      <p>Escolha um tema para mudar a aparência da página ✨</p>

      <SeletorTema tema={tema} alterarTema={setTema} />
    </div>
  )
}

export default App