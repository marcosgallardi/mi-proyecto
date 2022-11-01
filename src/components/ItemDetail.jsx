import { useState, useContext } from "react";
import { CounterUpgrade } from "./CounterUpgrade";
import { cartContext } from '../context/cartContext';
import { Link } from "react-router-dom";




export const ItemDetail = (props) => {

    const [cartState, setCartState] = useState(0)

    const { addToCart } = useContext(cartContext)

    const handleAddToCart = (count) => {
        addToCart(props, count)
        setCartState(count)
    };

    if (props.title === undefined)
        return (

            <>

                <div className="container position-absolute justify-content-center align-items-center">
                    <div className="card mb-5">
                        <div className="row g-0">
                            <div className="col-md-5">
                                <div className="skeleton" />

                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title display-5"> <div className="skeleton1" />
                                    </h5>
                                    <p className="card-text"><div className="skeleton2" />
                                    </p>
                                    <p className="card-text fw-bold"><div className="skeleton3" />
                                    </p>

                                    <p className="fw-bold fs-5"><div className="skeleton3" />
                                    </p>
                                    <p className="card-text pt-4"><div className="skeleton2" />
                                    </p>
                                    <p className="card-text pt-4"><div className="skeleton2" />
                                    </p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )

    else
        return (

            <>

                <div className="container position-absolute justify-content-center align-items-center">
                    <div className="card mb-5">
                        <div className="row g-0">
                            <div className="col-md-5">

                                <img src={props.img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title display-5">{props.title} </h5>
                                    <p className="card-text pt-4">{props.description}</p>
                                    <p className="card-text fw-bold"> Color: <small className="text-muted"> {props.colour}</small></p>

                                    <p className="fw-bold fs-5">$ {props.price} </p>
                                    {cartState === 0 ? <CounterUpgrade addToCart={handleAddToCart} stock={props.stock} /> : <Link to="/cart" className="btn btn-primary">Ir al Carrito</Link>}
                                    {cartState === 0 ? "" : <Link to="/" className="btn btn-outline-danger ms-3">Seguir comprandro</Link>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );


};