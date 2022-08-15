import CartContext from '../../context/CartContext';
import {useContext} from 'react';
import Table from 'react-bootstrap/Table';
import './Cart.css'

const CartDetail = () =>{
    const {cart, clearCart, removeItem} = useContext(CartContext)
    

    return(
        <div className='cart'>
            <h1>{cart.length === 0 ? 'Your cart is empty' :  'Your cart'}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th/>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((u) => {
                        return (
                        <tr key={u.id}>
                        <td>
                            <img src='../images/icono/delete.png' width={22} alt='delete' onClick={() => removeItem(u.id) } id={u.id}/>
                        </td>
                        <td>
                            {u.name}
                        </td>
                        <td>${u.price}</td>
                        <td>{u.quantity}</td>
                        <td>${u.quantity * u.price}</td>
                        </tr>)
                    })}
                    
                </tbody>
            </Table>
            <div className='containerButton'>

                {cart.length !== 0 && <button className='col-auto button' onClick={clearCart}>Clear all the cart</button>}
                {cart.length !== 0 && <button className='col-auto button'>Go yo pay</button>}
            </div>
        </div>
    )
}

export default CartDetail