import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Context from './Clase 19/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
)
