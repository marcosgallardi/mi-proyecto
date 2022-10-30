import { useState } from "react";
import { createContext } from "react"

export const cartContext = createContext();

export const CartContextProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, count) => {

        let newCart = [...cart];
        let newItem = { ...item, count }
        newCart.push(newItem)
        setCart(newCart)
    }








    const getTotalItemCount = () => {
        let total = 0;
        cart.forEach(itemInCart => {
            total = total + itemInCart.count
        });
        return total;
    };

    const getTotalPrice = () => {
        let total = 0;
        cart.forEach(itemInCart => {
            total = total + (itemInCart.count * itemInCart.price)
        });
        return total;
    };

    const removeItem = (idRemove) => {
        let newRemove = cart.filter(itemInCart => (itemInCart.id !== idRemove))
        setCart(newRemove);
    };

    const removeTotal = () => {
        setCart(cart = []);
    };



    return (

        <cartContext.Provider value={{ cart, addToCart, getTotalItemCount, removeItem, getTotalPrice, removeTotal }}>
            {props.children}
        </cartContext.Provider>


    )
};