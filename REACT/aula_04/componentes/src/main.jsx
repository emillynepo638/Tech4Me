import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import PaginaPai from './SPA/PaginaPai.jsx'
import ComponentesFilhos from './ComponentesFilhos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PaginaPai /> */}
    <ComponentesFilhos />
  </StrictMode>
)
