import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { PizzaContext } from "../contexts/pizzaContext";


const Detalle = () => {
    const { id } = useParams();
    const { pizzas, agregarCarrito } = useContext(PizzaContext);
    const [pizzaDatos, setPizzaDatos] = useState({});
  
    const getData =  () => {
      const dataPizza = pizzas.find((pizza) => pizza.id == id);
      setPizzaDatos(dataPizza);
    };
  
    useEffect(() => {
      getData()
    }, []);
    return (
      <>
      
        {pizzaDatos && (
          <div className="container p-3">
            <h5>Detalle Pizza:</h5>
            <div className="card">
              <div className="row">
                  <div className="col-md-6">
                      <img className="img-fluid" src={pizzaDatos.img} alt="" />
                  </div>
                  <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{pizzaDatos.name}</h5>
                    
                    <p className="card-text">{pizzaDatos.desc}</p>
                    Ingredientes:
                    <ul>
                    {pizzaDatos.ingredients && pizzaDatos.ingredients.map((ingredient, index) => {
                      return (
                        <li key={index}>{ingredient}</li>
                      )
                    })}  
                      </ul>
                    
                    <div className="d-flex justify-content-around">
                    <strong className="card-text"> ${pizzaDatos.price}</strong>
                    <button className="btn btn-danger" onClick={()=>agregarCarrito(pizzaDatos)}>
                      Añadir
                    </button>
  
                    </div>
    
                  </div>
                  </div>
              </div>
              
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Detalle;