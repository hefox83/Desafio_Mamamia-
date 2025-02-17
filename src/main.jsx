import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaProvider from "./contexts/pizzaContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PizzaProvider>
    <App />
    </PizzaProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
