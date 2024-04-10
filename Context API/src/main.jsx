import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Appcontextprovider from "./Context/Appcontext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appcontextprovider>

    <App />
    </Appcontextprovider>
  </React.StrictMode>,
)
