import { useState, useEffect  } from "react";
import {useParams} from "react-router-dom"
import { getProductsById} from '../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail'



const ItemDetailContainer = () =>{

    const [product, setProduct] = useState()
    const {prodId} = useParams()

    useEffect(() => {
        getProductsById(prodId).then(product => {
            setProduct(product)
        })
    }, [prodId])


    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer