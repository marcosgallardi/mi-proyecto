import React from 'react';
import { ButtonsNavbar } from './ButtonsNavbar';
import { CartWidget } from './CartWidget';

export const Navbar = () => {
    return (
        <>
          <div className="d-flex justify-content-between align-items-center pt-3">

            <div className="ps-3">
              <img src="/assets/img/logo.png" alt="asdasd" className="img-fluid" />
             </div>

            <nav className='nav'>
                <ButtonsNavbar link="Inicio" ancla="#" />
                <ButtonsNavbar link="Productos" ancla="#" />
                <ButtonsNavbar link="Nosotros" ancla="#" />
                <ButtonsNavbar link="Contacto" ancla="#" />
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




