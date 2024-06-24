import { PizzaContext } from "../contexts/pizzaContext";
import { useContext } from "react"
import Button from 'react-bootstrap/Button';
const Pedido = () => {
    const { carrito, incrementar, decrementar } = useContext(PizzaContext)
    const total = carrito.reduce(
        (acumulador, valorActual) =>
            acumulador + valorActual.price * valorActual.count,
        0
    );

    return (
        <>
            <div className="container">
                <h5>Detalle Pedido:</h5>
                <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    {
                        carrito.map((product, index) => (
                            <>
                                <div key={product.id} className="d-flex justify-content-between px-5">
                                    <div className="d-flex">
                                        <img src={product.img} alt="" width={50} />
                                        &nbsp;&nbsp;
                                        <p className="text-capitalize">{product.name}</p>
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <p className="priceCarrito">${product.price}</p>&nbsp;
                                        <button className="btn btn-danger" onClick={() => decrementar(index)}>-</button>
                                        &nbsp;
                                        <p>{product.count}</p>&nbsp;
                                        <button className="btn btn-primary" onClick={() => incrementar(index)}>+</button>
                                        &nbsp;
                                    </div>
                                </div>
                                <br />
                            </>

                        ))
                    }

                </div>
                <h2 className="textpay">Total: ${total}</h2>
                <Button variant="success">Pagar</Button>{' '}
            </div>

        </>
    )

}

export default Pedido