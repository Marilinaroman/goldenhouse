import './ItemListContainer.css';
import ItemList from './../ItemList/ItemList';

const ItemListContainer = ({tittle}) =>{
    return (
    <>
        <h1>{tittle}</h1>
        <ItemList/>
    </>    
    )
}

export default ItemListContainer