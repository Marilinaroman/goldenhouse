import { useState, useEffect  } from "react";
import {useParams} from "react-router-dom"
import { getProductsById} from '../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail'



const ItemDetailContainer = () =>{

    const [product, setProduct] = useState();
    const [loadingDetail, setLoadingDetail] = useState(true);
    const {prodId} = useParams();

    useEffect(() => {
        getProductsById(prodId).then(product => {
            setProduct(product)
        }).catch(error =>{
            console.log(error)
        }).finally(()=>{
            setLoadingDetail(false)
        })
    }, [prodId])

    if (loadingDetail){
        return <h1>Loading...</h1>
     }

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer