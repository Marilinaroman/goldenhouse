import './CartWidget.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () =>{
    const {getQuantity} = useContext(CartContext)
    const quantity = getQuantity()
    return(
        <div className="CartWidget">
            <img
                src='../images/cartwidget.png'
                alt="CartWidget"
                width="40"
            />
            <span>{quantity}</span>
        </div>
    )
}

export default CartWidget