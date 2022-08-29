import {useParams} from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProd } from "../../service/firebase/firestore";
import { useAsync } from "../../hooks/useAsync";
import './ItemDetailContainer.css'

const ItemDetailContainer = () =>{
    const {prodId} = useParams();
    const {data,error,loading} = useAsync(()=> getProd(prodId))

    if (loading){
        return <h1>Loading...</h1>
    }

    if(error) {
        console.log(error)
    }

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...data}/>
        </div>
    )
}

export default ItemDetailContainer