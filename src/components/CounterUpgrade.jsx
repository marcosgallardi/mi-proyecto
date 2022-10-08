import React, { useState } from 'react';

export const CounterUpgrade = () => {

    const initialState = 0;

    const [count, setCount] = useState(initialState)

    const handleAdd = () => {
        setCount(count + 1)
    };


    const handleDelete = () => {
        setCount(count - 1)

    };


    return (
        <div>

            <div className="align-item-center">
                <div class="btn-group me-2" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-secondary" onClick={handleDelete}>-</button>
                    <button class=" btn-secondary">Cantidad {count}</button>

                    <button type="button" class="btn btn-secondary" onClick={handleAdd}>+</button>
                </div>

            </div>
        </div>
    )
}
