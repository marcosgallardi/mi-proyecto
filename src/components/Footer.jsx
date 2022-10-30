import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark py-2 text-light text-center">
                <div className="row align-items-center pb-5">
                    <div className="col-4">
                        <Link to="/" className="display-6 text-decoration-none text-light">Inicio</Link>
                    </div>
                    <div className="col-4">
                        <p>Todos los derechos reservados por <a href="oberon.ar" className="text-decoration-none "> <span className="text-danger fs-5 fw-bold"> Oberon</span></a> </p>
                    </div>
                    <div className="col-4">
                        <Link to="/cart" className="display-6 text-decoration-none text-light">Carrito</Link>
                    </div>
                </div>
            </div>
        </>
    )
};

