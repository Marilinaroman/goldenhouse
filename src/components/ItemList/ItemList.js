import Item from '../Item/Item'

const ItemList = ({data}) =>{
    return (
        <>
            {data.map((u) => <Item key={u.id} {...u}/>)}
        </>
    )
}

export default ItemList