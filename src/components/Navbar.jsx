import { Link } from "react-router-dom";
import { PizzaContext } from "../contexts/pizzaContext";
import { useContext } from "react";

const Menu = () => {
    const { carrito } = useContext(PizzaContext);
    const total = carrito.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.price * valorActual.count,
      0
    );
    const totalProductos = carrito.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.count,
      0
    );
    console.log(total);
    return (
      <>
        <nav className="navbar navbar-dark bg-info">
          <div className="container-fluid">
            <Link to="/">
              <h3>Pizzería Mamma Mia!</h3>
            </Link>
            <Link to="/carrito">
              <h6>Productos en carrito {totalProductos} </h6>
              <h6>Total: ${total}</h6>
  
            </Link>
          </div>
        </nav>
    
      </>
    );
  };
  
  export default Menu;