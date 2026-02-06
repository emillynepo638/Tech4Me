import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// // import App from './App.jsx'
// import ExState from './ExState.jsx'
import Sorte from './Sorte.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* {<ExState />} */}
    <Sorte />
  </StrictMode>,
)