import './ItemDetail.css'
import {Link, useParams} from 'react-router-dom'
import {useState, useContext, useEffect} from 'react'
import Count from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext'
import AlertContext  from '../../context/Alert';
import {useAsync} from '../../hooks/useAsync'
import { getOtherColor, getProd } from '../../service/firebase/firestore';
import Loading from '../Loading/Loading';


const ItemDetail = ({id, name, price, colour, description,stock,img}) =>{

    const {prodId} = useParams()
    const {addItem, getProductQuantity} = useContext(CartContext)
    const {setNotification} = useContext(AlertContext)
    const {data,error,loading} = useAsync(()=> getOtherColor(name))
    const [quantityAdd, setQuantityAdd] = useState(0)

    const [options, setOptions] = useState({
        image: img,
        quantityStock: stock,
        colours:colour
    })

    useEffect(()=>{
        getProd(prodId).then(response=>{
            setOptions({image:response.img, quantityStock:response.stock, colours:response.colour})
        }).catch(error =>{
            console.log(error)
        })
    })

    if (loading){
        return <Loading/>
    }

    if(error) {
        console.log(error)
    }

    const handleClick = (e) =>{
        e.stopPropagation()
    }

    const handleOnAdd = (quantity) => {
        setQuantityAdd(quantity)

        const productToAdd = {
            id:prodId, name, price, colour:options.colours, quantity:Number(quantity), total: (price*quantity)
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
                <div className='imagesDetail'>
                    <img className='imageProduct'src={options.image} alt={name}/>
                            {data? 
                                (<div className='moreProducts'>
                                    {data?.map((u)=>
                                    <Link className='otherProduct' key={u.id} to={`/Detail/${u.id}`} onClick={handleClick}><img  width={60} height={60} src={u.img} alt={u.id}/></Link>
                                )}
                                </div>)
                                : (<></>)}
                </div>
                <div>
                    <p> ${price}</p>
                    <p>{description}</p>
                    <p> Stock = {options.quantityStock}</p>
                    {quantityAdd <=0 ? <Count stock={stock} initial={productQuantity} onAdd={handleOnAdd}/> 
                    :(<div>
                        <Link className='button' to='/Cart'>Go to Cart</Link>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail