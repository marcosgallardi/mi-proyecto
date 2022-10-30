import React, { useState } from 'react';

export const CounterUpgrade = ({ stock, addToCart }) => {

    const initialState = 1;

    const [count, setCount] = useState(initialState)

    const handleAdd = () => {
        if (count < stock) setCount(count + 1)
    };


    const handleDelete = () => {
        if (count > 1) setCount(count - 1)

    };




    return (
        <div>

            <div className="align-item-center pt-3">
                <div className="btn-group me-2" role="group" aria-label="Second group">
                    <button type="button" className="btn btn-secondary" onClick={handleDelete}>-</button>
                    <button className=" btn-secondary">Cantidad {count}</button>

                    <button type="button" className="btn btn-secondary" onClick={handleAdd}>+</button>
                </div>

            </div>
            <button type="button" className="btn btn-outline-dark ms-1 mt-4" onClick={() => { addToCart(count) }}>Agregar al carrito</button>

        </div>
    )
}
