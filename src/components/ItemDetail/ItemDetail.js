
import Count from '../ItemCount/ItemCount';
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const ItemDetail = ({name, price, description,stock,img}) =>{

    const [quantity, setQuantity] = useState(0)
    
    const handleOnAdd = (quantity) => {
        console.log(`Quantity add is: ${quantity}`);
        setQuantity(quantity)
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
                    {quantity <=0 ? <Count stock={stock} onAdd={handleOnAdd}/> : ( <div>
                        <Link className='button' to='/Cart'>Go to Cart</Link>
                        <Link className='button' to='/' >Keep Buying</Link>
                    </div>)}
                </div>
            </div>
        </div>
);
}

export default ItemDetail