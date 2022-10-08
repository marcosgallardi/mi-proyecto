import { CounterUpgrade } from "./CounterUpgrade";

export const ItemDetail = (props) => {
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
                                <p>Stock: {props.stock}</p>
                                <p className="fw-bold fs-5">$ {props.price} </p>
                                <CounterUpgrade />
                                <button type="button" class="btn btn-outline-dark ms-1 mt-4">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};