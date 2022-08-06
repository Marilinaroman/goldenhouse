
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import {useState, useContext} from 'react'
import Count from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext'

const ItemDetail = ({id, name, price, description,stock,img}) =>{
    const {addItem} = useContext(CartContext)
    const [quantity, setQuantity] = useState(0)
    
    const handleOnAdd = (quantity) => {;
        setQuantity(quantity)
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
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