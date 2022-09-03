
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import {useState, useContext} from 'react'
import Count from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext'
import AlertContext  from '../../context/Alert';
import {useAsync} from '../../hooks/useAsync'
import { getOtherColor } from '../../service/firebase/firestore';

const ItemDetail = ({id, name, price, colour, description,stock,img}) =>{
    
    const {data, error} = useAsync(() => getOtherColor(name))

    const [quantityAdd, setQuantityAdd] = useState(0)
    const {addItem, getProductQuantity} = useContext(CartContext)
    const {setNotification} = useContext(AlertContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdd(quantity)

        const productToAdd = {
            id, name, price, colour, quantity:Number(quantity), total: (price*quantity)
        }
        if(quantity<=0){
            setNotification('danger',`Sorry! We don't have stock`)
        } else{
            addItem(productToAdd)
            setNotification('success',`You added ${quantity} ${name}`)
        }
    }
    
    const productQuantity= getProductQuantity(id)
    
    const handleClick = (data) =>{
        return <ItemDetail {...data}/>
    }

    if(error){
        console.log(error)
    }
    return(
        <div className='itemDetail'>
            <h1>{name}</h1>
            <div className='detail'>
                <div className='imagesDetail'>
                    <img className='imageProduct'src={img} alt={name}/>
                    {data? 
                    (<div className='moreProducts'>
                        {data?.map((u)=>
                        <Link className='otherProduct' key={u.id} to={`/Detail/${u.id}`} onClick={handleClick(data)}><img  width={60} height={60} src={u.img} alt={u.id}/></Link>
                    )}
                    </div>): (<></>)
                    }                    
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