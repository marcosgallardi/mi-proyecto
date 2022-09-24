import React from 'react';

import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';

export const App = () => {
    return (
        <>

            <section>
                <div className="container-fluid vh-100 position-relative bg-image">
                    <div className="container-fluid position-absolute top-0 start-0">
                        <div className="d-none d-lg-block">
                            <Navbar />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <ItemListContainer title={<h2 className='p-5 display-5 fw-bold text-light'>ItemListContainer</h2>} />
            </section>
        </>
    )
};
