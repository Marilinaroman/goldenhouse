import {useState, createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) =>{
        setCart([...cart], productToAdd)
    }

    return(
        <CartContextProvider value={{cart, addItem}}>
            {children}
        </CartContextProvider>
    )
}

export default CartContext