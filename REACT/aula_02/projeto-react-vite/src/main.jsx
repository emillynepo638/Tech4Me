import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ListaDoces from './listaDoces.jsx'
import TabelaDoces from './listaDocesMaterialUi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TabelaDoces />
  </StrictMode>
)
