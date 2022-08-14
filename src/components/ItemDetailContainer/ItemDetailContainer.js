import { useState, useEffect  } from "react";
import {useParams} from "react-router-dom"
import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../service/firebase'
import ItemDetail from '../ItemDetail/ItemDetail'



const ItemDetailContainer = () =>{

    const [product, setProduct] = useState();
    const [loadingDetail, setLoadingDetail] = useState(true);
    const {prodId} = useParams();

    useEffect(() => {
        getDoc(doc(db, 'products',prodId)).then(res => {
            const data = res.data()
            const productDb = {id:res.id, ...data}
            setProduct(productDb)

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