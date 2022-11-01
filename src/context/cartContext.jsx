import { useState } from "react";
import { createContext } from "react"

export const cartContext = createContext();

export const CartContextProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, count) => {

        const newItem = { ...item, count }


        if (isInCart(newItem.id)) {


            const newCart = cart.map(producto => {

                if (producto.id === newItem.id) {
                    producto.count += newItem.count
                }
                console.log(producto.id)
                return (producto)
            })


            setCart(newCart)

        }

        else {
            setCart([...cart, newItem])

        }


    };
    const removeItem = (idRemove) => {
        const newRemove = cart.filter(itemInCart => (itemInCart.id !== idRemove))
        setCart([...newRemove]);
    };

    const isInCart = (id) => {
        return cart.some(producto => (producto.id === id))
    };

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



    const removeTotal = () => {
        setCart([]);
    };



    return (

        <cartContext.Provider value={{ cart, addToCart, getTotalItemCount, removeItem, getTotalPrice, removeTotal, isInCart }}>
            {props.children}
        </cartContext.Provider>


    )
};




