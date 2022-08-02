
import Count from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({name, price, description,stock,img}) =>{
    
    const handleOnAdd = (quantity) => {
        console.log(`Quantity add is: ${quantity}`);
    }

    return(
        <div className='itemDetail'>
            <h1>{name}</h1>
            <div className='detail'>
                <div>
                    <img className='imageProduct'src={img} alt={name}/>
                </div>
                <div>
                    <p> ${price}</p>
                    <p>{description}</p>
                    <p> Stock = {stock}</p>
                    <Count stock={stock} onAdd={handleOnAdd}/>
                </div>
            </div>
        </div>
);
}

export default ItemDetail