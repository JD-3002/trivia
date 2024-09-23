import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import TriviaGame from './TriviaGame.jsx'
import './styles/styles.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TriviaGame />
  </StrictMode>,
)
