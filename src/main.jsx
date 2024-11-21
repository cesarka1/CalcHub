import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './components/navbar.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
  </StrictMode>,
)
