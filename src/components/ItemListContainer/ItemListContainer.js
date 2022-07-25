import { useState, useEffect  } from "react";
import { getProducts } from "../asyncMock";
import ItemList from './../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({tittle}) =>{

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        getProducts().then((products)=>{
            setProducts(products);
        })
    }, []);

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