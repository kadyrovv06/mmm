import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Todo from './components/todo/todo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <Todo/>

  </StrictMode>,
)
