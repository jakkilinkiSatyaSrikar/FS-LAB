import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Parent, Child, Student} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Parent />
    <Child name="Queen" age={18}/>
    <Student name="Srikar" age={21} />
  </StrictMode>,
)
