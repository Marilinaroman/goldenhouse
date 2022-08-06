import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";
import { getProductsPrimary, getProductByCategory } from "./../asyncMock";
import ItemList from './../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({tittle}) =>{

    const [products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);
    const {category} = useParams()

    useEffect(() =>{
        const asyncFunction = category ? getProductByCategory : getProductsPrimary
        asyncFunction(category).then((products)=>{
            setProducts(products)
        }).catch(error =>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [category]);

    if(loading){
        return <h1>loading</h1>
    }
    return (
    <>
        <h1>{tittle}</h1>
        <div className="cards">
            <ItemList products={products}/>
        </div>
    </>    
    )
}

export default ItemListContainer