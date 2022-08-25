import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import FormCheckout from './FormCheckout'
import {db} from '../../service/firebase'
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

const Checkout =() =>{
    const [isLoading, setIsLoading] = useState(false)
    const {cart, total, clearCart, buyer }= useContext(CartContext)

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
        

        const ids = cart.map(u => u.id)
        console.log(ids)
        const listProducts = collection(db, 'products')

        const prodsFromFirestore = await getDocs(query(listProducts, where(documentId(), 'in', ids)))

        const {docs} = prodsFromFirestore

        const outOfStock = [];

        const batch = writeBatch(db)

        docs.forEach( doc => {
            const dataDocs = doc.data()
            const stockDb = dataDocs.stock

            const productsOfCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productsOfCart?.quantity

            if(stockDb >= prodQuantity){
                batch.update(doc.ref, {stock: stockDb - prodQuantity})
            } else{
                outOfStock.push({id: doc.id, ...dataDocs})
            }
            
        })

        if (outOfStock.length === 0){
            await batch.commit()

            const orderRef = collection(db, 'orders')
            const orderAdd = await addDoc(orderRef, newOrder)
            console.log(`id ${orderAdd.id}`)
            clearCart()
            setTimeout(() => {
                navigate('/')
            }, 3000)
        } 
        }catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    if(isLoading) {
        return <h1>We're creating your order</h1>
    }

    return (
        <> 
            <h1>Complete the form</h1>
            <FormCheckout createOrder={createOrder}/>
        </>
    )
}

export default Checkout