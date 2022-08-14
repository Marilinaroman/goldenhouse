import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom";
import {getDocs, collection, query, where } from 'firebase/firestore'
import {db} from '../../service/firebase'
import ItemList from './../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({tittle}) =>{

    const [products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);
    const {category} = useParams()

    useEffect(() =>{
        const collectionAll = !category ? collection(db,'products') : query(collection(db,'products'), where ('category', '==', category))

        getDocs(collectionAll).then(response =>{
            const productsDb = response.docs.map(doc =>{
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productsDb)
            console.log(productsDb)
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
        <h1>{tittle}</h1>
        <div className="cards">
            <ItemList products={products}/>
        </div>
    </>    
    )
}

export default ItemListContainer