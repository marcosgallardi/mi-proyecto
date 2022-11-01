import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../context/cartContext";

import { UserForm } from "./UserForm";




export const CartView = () => {

  const navigate = useNavigate();

  const { cart, removeItem, getTotalPrice, removeTotal } = useContext(cartContext)




  if (cart.length === 0)
    return (
      <>
        <div className="card position-absolute top-50 start-50 translate-middle tamaño">
          <div className="card-body text-center">
            <h5 className="card-title pt-2">Todavia ni empezamos!!</h5>
            <p className="card-text pt-3">El carrito todavia esta vacio! Vamos a comprar</p>
            <Link to="/" className="btn btn-primary mt-2">Ir a comprar</Link>
          </div>
        </div>
      </>
    )










  return (
    <>
      <div className="container position-absolute top-50 start-50 translate-middle justify-content-center align-items-center pt-5 mt-5">
        <div className="card">
          <div className="card-body">


            {
              cart.map(producto => (

                <div className="row" key={producto.id}>

                  <div className="col-2">
                    <img src={producto.img} className="w-25 pb-3" alt="" />
                  </div>


                  <div className="col-2 fw-bold">
                    <p>{producto.title}</p>
                  </div>

                  <div className="col-2 ">
                    <p> <span className="fw-light">Precio: $</span> {producto.price} </p>
                  </div>

                  <div className="col-1">
                    <p> <span className="fw-light">Cantidad:</span> {producto.count}</p>
                  </div>
                  <div className="col-2 ps-5">
                    <p>Precio Total: ${producto.count * producto.price}</p>
                  </div>
                  <div className="col text-end">
                    <button className="btn" onClick={() => removeItem(producto.id)}>X</button>
                  </div>
                  <hr />
                </div>
              ))
            }



            <div className="fw-bold fs-5 pt">
              Valor Compra: ${getTotalPrice()}
              <hr />
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-danger me-md-2" type="button" onClick={removeTotal}>Vaciar Carrito</button>

          </div>
          <UserForm />

        </div>
      </div>

    </>
  )


};









