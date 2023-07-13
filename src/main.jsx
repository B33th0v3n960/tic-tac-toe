import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import App from './components/App.jsx'
import Logo from './components/Logo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Logo />
    <App />
  </React.StrictMode>
)
