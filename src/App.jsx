import React from 'react';

import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer';


export const App = () => {

    return (



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


            <Routes>
                <Route path="/productos/:camisetasId" />
                <Route path="/productos/:pantalonesId" />
            </Routes>


            <div className="d-none d-lg-block">
                <div className="container-fluid mn-5">

                    <div className="ms-3">
                        <Routes>
                            <Route path="/" element={<ItemListContainer />} />

                            <Route path="/conferencia/:categoryId" element={<ItemListContainer />} />
                        </Routes>

                    </div>


                </div>
            </div>


        </BrowserRouter>


    )
};










