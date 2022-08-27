import {getDocs, collection, query, where, getDoc, doc} from 'firebase/firestore'
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


