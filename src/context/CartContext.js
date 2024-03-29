import {useState, createContext, useContext, useEffect } from "react";
import AlertContext  from './Alert';

const CartContext = createContext()

export const CartContextProvider = ({children}) =>{

    const {setNotification} = useContext(AlertContext)

    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("cart");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    
})
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addItem = (productToAdd) =>{
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUp = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUp = {
                        ...prod,
                        quantity: productToAdd.quantity,
                        total: productToAdd.quantity*productToAdd.price
                    }
                    return productUp
                } else {
                    return prod
                }
            })

            setCart(cartUp)
        }
    }
    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
        accu += prod.quantity
        })

        return accu
    }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }
    const clearCart = () => {
        setCart([])
    }
    const removeItem = (id) => {
        const prod = cart.find(u =>u.id === id)
        setNotification('warning', `You removed ${prod.quantity} ${prod.name}`)
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }

    const total = cart.reduce((acc, sum) => {
        return acc + sum.total
    }, 0)


    
    
    return(
        <CartContext.Provider value={{cart, addItem, getQuantity,getProductQuantity, isInCart, clearCart, removeItem, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext