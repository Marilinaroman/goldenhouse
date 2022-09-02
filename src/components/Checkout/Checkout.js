import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import FormCheckout from './FormCheckout'
import { useNavigate } from "react-router-dom"
import { createNewOrders } from "../../service/firebase/firestore"
import './Checkout.css'

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
        return (<div className="containerCheckout">
                    <h1>We're creating your order</h1>
                </div>)
    }
    if(newOrder) {
        setTimeout(() => {
            navigate('/')
        }, 5000)
        return (
        <div className="containerCheckout">
            <h1>{`The id of your order is: ${newOrder.id}`}</h1>
        </div>)
    }

    return (
        <div className="containerCheckout"> 
            <FormCheckout createOrder={createOrder}/>
        </div>
    )
}

export default Checkout