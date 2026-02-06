import Curso from './Curso'
import './App.css'

function App() {
  const cursos = [
    {
      nome: 'React Básico',
      cargaHoraria: '40h',
      professor: 'Gaby'
    },
    {
      nome: 'JavaScript Avançado',
      cargaHoraria: '60h',
      professor: 'Gabyzinha'
    },
    {
      nome: 'HTML e CSS',
      cargaHoraria: '30h',
      professor: 'Gabriella'
    }
  ]

  return (
    <div className="container">
      <h1>📚 Lista de Cursos</h1>

      {cursos.map((curso, index) => (
        <Curso key={index} curso={curso} />
      ))}
    </div>
  )
}

export default App
