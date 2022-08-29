import {getDocs, collection, query, where, getDoc, doc, documentId, writeBatch, addDoc, } from 'firebase/firestore'
import {db} from '../../service/firebase'


export const getProducts = (category) =>{
    const firstFilter = query(collection(db,'products'),where('order', '==', 1))
    const collectionAll = !category ?  firstFilter : query(firstFilter, where ('category', '==', category))

    return getDocs(collectionAll).then(response =>{
            const productsDb = response.docs.map(doc =>{
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            return productsDb
        }).catch(error =>{
            return error
        })
}

export const getProd = (prodId) =>{
    return getDoc(doc(db, 'products',prodId)).then(res => {
        const data = res.data()
        const productDb = {id:res.id, ...data}
        
        return productDb

    }).catch(error =>{
        return error
    })
}


export const getCategories =()=>{
    const allCategories = collection(db, 'categories')
    return getDocs(allCategories).then((response) =>{
        const categories = response.docs.map((snap)=>{
            return{
                id: snap.id,
                ...snap.data()
            }
        })
        return categories
    }).catch(error =>{
        return error
    })
}

export const createNewOrders = async (newOrder, cart, clearCart) =>{
    const ids = cart.map(u => u.id)
    const listProducts = collection(db, 'products')
    let orderAdd =[]

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
        orderAdd = await addDoc(orderRef, newOrder)
        clearCart()
        return orderAdd
    }
    return orderAdd
}

export const getRegister = () =>{
    const userRef = collection(db, 'users')

    return getDocs(userRef).then(res =>{
        const register = res.docs.map(doc=>{
            const data = doc.data()
            return{
                id: doc.id,
                ...data
            }
        })
        return register
    }).catch(error =>{
        return error
    })
}

export const newRegister = (users) =>{
    const userRef = collection(db, 'users')
    addDoc(userRef,users)
}
