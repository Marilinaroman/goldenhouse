import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import FormCheckout from './FormCheckout'
import { useNavigate } from "react-router-dom"
import { createNewOrders } from "../../service/firebase/firestore"

const Checkout =() =>{
    const [isLoading, setIsLoading] = useState(false)
    const [newOrder, setNewOrder] = useState()
    const {cart, total, clearCart, buyer}= useContext(CartContext)

    const navigate = useNavigate()

    const createOrder = async () =>{

        setIsLoading(true)

        try{
            const newOrder = {
                buyer,
                items: cart,
                total,
                date: new Date(),
            }
        
        createNewOrders(newOrder, cart, clearCart).then((res)=>{
            setNewOrder(res)
            setIsLoading(false)
        }).catch(error =>{
            console.log(error)
        })} 
        catch (error) {
            console.log(error)
        }
    }

    if(isLoading) {
        return <h1>We're creating your order</h1>
    }
    if(newOrder) {
        setTimeout(() => {
            navigate('/')
        }, 5000)
        return <h1>{`The id of your order is: ${newOrder.id}`}</h1>
    }

    return (
        <> 
            <h1>Complete the form</h1>
            <FormCheckout createOrder={createOrder}/>
        </>
    )
}

export default Checkout