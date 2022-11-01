import { useContext } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { InputForm } from "./InputForm";
import Swal from "sweetalert2/dist/sweetalert2.js";
import 'sweetalert2/src/sweetalert2.scss';
import { CreateOrder } from "../services/firebase";
import { cartContext } from "../context/cartContext";

export const UserForm = () => {

  const Navigate = useNavigate();

  const { cart, removeTotal, getTotalPrice } = useContext(cartContext)

  const [addForm, setAddForm] = useState({
    name: "",

    email: "",
    phone: ""
  });

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    let newUser = { ...addForm }
    newUser[name] = value;
    setAddForm(newUser)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()


    setTimeout(() => {
      removeTotal()
    }, 1500);


    const datosTotales = {
      datosUser: addForm,
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
      Navigate("/");
    })



  }

  return (
    <>
      <h2 className="text-muted fs-5 text-center">Completa con tus datos!</h2>
      <form onSubmit={onFormSubmit} className="ms-2">
        <InputForm value={addForm.name} title="Nombre Completo" name="name" required={true} onChange={onInputChange} />

        <InputForm value={addForm.email} title="Email" name="email" required={true} onChange={onInputChange} />
        <InputForm value={addForm.phone} title="telefono" name="phone" required={true} onChange={onInputChange} />

        <button type="submit" className="btn btn-outline-danger my-2 ms-2 mt-3" >Finalizar Compra</button>
      </form>
    </>

  )
}