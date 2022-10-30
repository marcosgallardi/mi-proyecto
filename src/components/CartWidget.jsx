import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../context/cartContext';

export const CartWidget = (props) => {

    const { getTotalItemCount} = useContext(cartContext);

    return (
        <>
            <Link to="/cart" className=' pe-3'>
                {props.icon}
            <span> {getTotalItemCount()} </span>
            </Link>
        </>
    )
}
