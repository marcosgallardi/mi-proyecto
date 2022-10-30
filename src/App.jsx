import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartContextProvider } from './context/cartContext';
import { CartView } from './components/CartView';
import { Nosotros } from './components/Nosotros';

//import { Nosotros } from './components/Nosotros';
//import { Contacto } from './components/Contacto';





export const App = () => {

    return (


        <CartContextProvider>

            <BrowserRouter>
         
                <div className="container-fluid vh-100 position-relative bg-image">
                    <div className="container-fluid position-absolute top-0 start-0">
                        <div className="d-none d-lg-block">
                            <Navbar />
                        </div>
                        
                        <div className="d-flex justify-content-center pt-5 mt-5">

                            <Routes>
                                <Route path="/producto/:Itemid" element={<ItemDetailContainer />} />
                            </Routes>
                        </div>
                    </div>
                </div>
               
                    <div className="mn-5">
                
                        
                            <Routes>
                                <Route path="/" element={<ItemListContainer />} />
                       

                                <Route path="/conferencia/:categoryId" element={<ItemListContainer />} />
                            </Routes>
                            
                            <Routes>
                                <Route path="/productos/:tipoId" element={<ItemListContainer />} />
                                <Route path="/cart" element={<CartView/>} />
                        
                            </Routes>
                        
                    </div>
          
        </BrowserRouter>
           
        </CartContextProvider>
                    
                    
                      
                      


    )
};
         
                
            

        
            
                






                

             












