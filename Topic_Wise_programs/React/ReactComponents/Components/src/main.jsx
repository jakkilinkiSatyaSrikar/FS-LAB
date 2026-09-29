import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Comp1, {Comp2, Comp3} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comp1 />
    <Comp2 />
    <Comp3 />
  </StrictMode>,
)
