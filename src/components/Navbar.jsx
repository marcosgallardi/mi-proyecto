import React from 'react';
import { NavLink } from 'react-router-dom';

import { CartWidget } from './CartWidget';
import { ItemListContainer } from './ItemListContainer';

export const Navbar = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center pt-2">

        <div className="ps-3">
          <img src="/assets/img/logo.png" alt="asdasd" className="img-fluid" />
        </div>

        <nav className='nav aling-items-center'>
          <li><NavLink to={"/"} className="fs-5 link-light text-decoration-none pe-4">Inicio</NavLink> </li>

          <div className="dropdown">
            <li className="fs-5 link-light text-decoration-none pe-4 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</li>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><NavLink to={`/productos/remeras`} className="dropdown-item link-light text-center">Camisetas</NavLink></li>
              <li><NavLink to={`/productos/pantalones`} className="dropdown-item link-light text-center">Pantalones</NavLink></li>
            </ul>
          </div>

          <div className="dropdown">
            <li className="fs-5 link-light text-decoration-none pe-4 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Conferencia</li>
            <ul className="dropdown-menu dropdown-menu-dark text-decoration-none">
              <li><NavLink to={"/conferencia/Oeste"} className="dropdown-item link-light">Oeste</NavLink></li>
              <li><NavLink to={"/conferencia/Este"} className="dropdown-item link-light">Este</NavLink></li>
            </ul>
          </div>



          <li><NavLink to={"/"} className="fs-5 link-light text-decoration-none pe-4">Nosotros</NavLink> </li>
          <li><NavLink to={"/"} className="fs-5 link-light text-decoration-none pe-4">Contancto</NavLink> </li>
        </nav>

        <div className="d-flex align-items-center">

          <CartWidget icon={<i className="bi bi-cart text-light fs-4"></i>} />

          <a href="#" className='pe-3'>
            <i className="bi bi-instagram text-light fs-4"></i>
          </a>

          <a href="#" className='pe-3'>
            <i className="bi bi-facebook text-light fs-4"></i>
          </a>
        </div>

      </div>

    </>
  )
};




