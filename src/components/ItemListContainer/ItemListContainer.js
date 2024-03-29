import { useParams } from "react-router-dom";
import { getProducts } from "../../service/firebase/firestore";
import { useEffect } from "react";
import ItemList from './../ItemList/ItemList';
import './ItemListContainer.css';
import { useAsync } from "../../hooks/useAsync";
import Loading from "../Loading/Loading";

const ItemListContainer = ({tittle}) =>{
    useEffect(() => {
        document.title = "Golden House"
    }, []);

    const {category} = useParams()
    const {data, error, loading} = useAsync(() => getProducts(category), [category])
    
    if(loading){
        return <Loading />
    }

    if(error) {
        console.log(error)
    }

    return (
    <>  
        <h1>{ tittle?? category}</h1>
        <div className="cards">
            <ItemList products={data}/>
        </div>
    </>   
)
}

export default ItemListContainer