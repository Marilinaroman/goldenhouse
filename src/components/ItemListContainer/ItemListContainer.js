import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../service/firebase/firestore";
import ItemList from './../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({tittle}) =>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category} = useParams()

    useEffect(() =>{
    getProducts(category).then(products =>{
        setProducts(products)
    }).catch(error =>{
        console.log(error)
    }).finally(()=>{
        setLoading(false)
    })
}, [category]);

    
    if(loading){
        return <h1>Loading...</h1>
    }
    return (
    <>
        <h1>{ tittle?? category}</h1>
        <div className="cards">
            <ItemList products={products}/>
        </div>
    </>    
    )
}

export default ItemListContainer