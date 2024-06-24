import { Route,Routes } from 'react-router-dom'
import Detalle from "./views/Pizza.jsx"
import Menu from './components/Navbar.jsx'
import Pedido from './views/Carrito.jsx'
import './App.css'
import Home from "./views/Home.jsx"

function App() {

  return (
    <>
    <Menu/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pizza/:id' element={<Detalle/>}/>
      <Route path='/carrito' element={<Pedido/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
    </Routes>
    </>
  )
}

export default App
