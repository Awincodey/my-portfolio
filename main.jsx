import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './react-portfolio/src/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
