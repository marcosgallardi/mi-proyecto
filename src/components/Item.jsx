import { Link } from "react-router-dom";


export const Item = (props) => {



    return (
        <>

            <div className="card m-5">
                <div className="card-body">

                    <img src={props.img} className="img-fluid" alt="" />
                    <h5 className="card-title"> {props.title} </h5>
                    <p className="card-text"> {props.description} </p>
                    <p className="card-text fw-bold"> Color: <small className="text-muted"> {props.colour}</small></p>
                    <p>Stock: {props.stock}</p>
                    <p className="fw-bold fs-5">$ {props.price} </p>
                    <div className="text-center pt-2">
                        <Link to={`/producto/${props.id}`} className="btn btn-primary">Ver Mas</Link>
                    </div>
                </div>
            </div>





        </>
    )

};







