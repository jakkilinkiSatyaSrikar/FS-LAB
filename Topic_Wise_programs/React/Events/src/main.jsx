import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Hi, App} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hi />
    <App />
  </StrictMode>,
)
