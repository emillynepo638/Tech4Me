import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Expressoes from './expressoes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Expressoes />
  </StrictMode>,
)
