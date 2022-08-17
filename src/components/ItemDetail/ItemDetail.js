
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import {useState, useContext} from 'react'
import Count from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext'
import AlertContext  from '../../context/Alert';

const ItemDetail = ({id, name, price, description,stock,img}) =>{
    const [quantityAdd, setQuantityAdd] = useState(0)
    const {addItem, getProductQuantity} = useContext(CartContext)
    const {setNotification} = useContext(AlertContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdd(quantity)

        const productToAdd = {
            id, name, price, quantity:Number(quantity), total: (price*quantity)
        }
        if(quantity<=0){
            setNotification('danger',`Sorry! We don't have stock`)
        } else{
            addItem(productToAdd)
            setNotification('success',`You added ${quantity} ${name}`)
        }
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
                    </div>)}
                </div>
            </div>
        </div>
);
}

export default ItemDetail