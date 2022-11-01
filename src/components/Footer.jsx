import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-danger py-3 text-light text-center">
                <div className="row align-items-center py-5">
                    <div className="col-4">
                        <a href="#" className="display-6 text-decoration-none text-light">Inicio</a>
                    </div>
                    <div className="col-4">
                        <p>Todos los derechos reservados por <a href="http://oberon.ar/" className="text-decoration-none " target="blank_"> <span className="text-dark fs-5 fw-bold"> Oberon</span></a> </p>
                    </div>
                    <div className="col-4">
                        <Link to="/cart" className="display-6 text-decoration-none text-light">Carrito</Link>
                    </div>
                </div>
            </div>
        </>
    )
};

