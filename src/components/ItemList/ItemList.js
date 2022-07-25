import Item from '../Item/Item'

const ItemList = ({products}) =>{
    return (
        <>
            {products.map((u) => <Item product={u}/>)}
        </>
    )
}

export default ItemList