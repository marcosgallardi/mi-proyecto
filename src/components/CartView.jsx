import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../context/cartContext";
import { CreateOrder } from "../services/firebase";
import Swal from "sweetalert2/dist/sweetalert2.js";

import 'sweetalert2/src/sweetalert2.scss';


export const CartView = () => {

  const navigate = useNavigate();

  const { cart, removeItem, getTotalPrice, removeTotal } = useContext(cartContext)

  const finalizarCompra = () => {
    const datosUser = {
      user: "MarcosGallardi",
      email: "gallardimarcos98@gmail.com",
      phone: 2324530382
    }
    setTimeout(() => {
      removeItem()
    }, 1000);


    const datosTotales = {
      datosUser: datosUser,
      cart: cart,
      precioTotal: getTotalPrice(),
      fecha: new Date()
    }




    CreateOrder(datosTotales).then((respuesta) => {
      Swal.fire(
        'Gracias por tu compra',
        '',
        'success'
      )
    }).then(result => {
      navigate("/");
    })

  }


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
      <div className="container position-absolute top-50 start-50 translate-middle justify-content-center align-items-center">
        <div className="card">
          <div className="card-body">


            {cart.map(producto => (

              <div className="row">

                <div className="col-4">
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
                <div className="col-2">
                  <p>Precio Total: ${producto.count * producto.price}</p>
                </div>
                <div className="col text-end">
                  <button className="btn" onClick={() => { removeItem(producto.id) }}>X</button>
                </div>
                <hr />
              </div>
            ))
            }

            <div className="pt">
              Valor Compra: ${getTotalPrice()}
            </div>
          </div>
          <button type="button" className="btn btn-outline-dark" onClick={finalizarCompra} data-bs-toggle="modal" data-bs-target="#exampleModal">Finalizar Compra</button>

        </div>

      </div>

    </>
  )


};








