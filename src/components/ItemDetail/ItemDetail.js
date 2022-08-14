
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import {useState, useContext} from 'react'
import Count from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext'

const ItemDetail = ({id, name, price, description,stock,img}) =>{
    const [quantityAdd, setQuantityAdd] = useState(0)
    const {addItem, getProductQuantity} = useContext(CartContext)

    const handleOnAdd = (quantity) => {;
        setQuantityAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
        console.log(productToAdd)
    }

    const productQuantity= getProductQuantity(id)
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
                    {quantityAdd <=0 ? <Count stock={stock} initial={productQuantity} onAdd={handleOnAdd}/> : ( <div>
                        <Link className='button' to='/Cart'>Go to Cart</Link>
                        <Link className='button' to='/' >Keep Buying</Link>
                    </div>)}
                </div>
            </div>
        </div>
);
}

export default ItemDetail