import { PizzaContext } from "../contexts/pizzaContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { pizzas, agregarCarrito } = useContext(PizzaContext);
    
    const navigate = useNavigate()
  
    return (
      <div className="container-card">
        <div className="row">
          {pizzas &&
            pizzas.map((pizza) => (
              <div key={pizza.id} className="col-md-3 rounded p-3">
                <div className="card shadow-lg">
                  <img src={pizza.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">{pizza.name}</h5>
                    <hr/>
                    Ingredientes:
                    <ul>
                    {pizza.ingredients && pizza.ingredients.map((ingredient, index) => {
                      return (
                        <li className="text-capitalize" key={index}>{ingredient}</li>
                      )
                    })}  
                      </ul>
                      <hr/>
                    <strong className="card-text">$ {pizza.price}</strong>
                    <br/>
                    <a onClick={()=> navigate(`/pizza/${pizza.id}`)} className="btn btn-info verMas">
                      Ver Más
                    </a>&nbsp;
                    <button className="btn btn-danger" onClick={()=>agregarCarrito(pizza)}>
                      Añadir
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default Home;