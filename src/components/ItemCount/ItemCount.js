import {useState} from 'react';
import './ItemCount.css'


const Count = ({stock, onAdd, initial = 1}) =>{
    const [quantity, setQuantity] =  useState( stock>0 ? initial : stock);
    
    const handleChange = (e) =>{
        if(e.target.value <= stock){
            setQuantity(e.target.value)
        }
    }

    const add = () => {
        if (quantity<stock){
            setQuantity(Number(quantity) + 1)
        }
    } 

    const subtract = () => {
        if (quantity>0){
            setQuantity(quantity - 1)
        }
    }
    
    return(
        <>
            <div className='count'>
                <button onClick={subtract} className='btnCount'>
                    <img 
                    src='../images/icono/substract.png' 
                    width={32} 
                    alt='Subtract product'
                    />
                </button>
                    <input onChange={handleChange}  value={quantity}/>
                <button onClick={add} className='btnCount'>
                    <img 
                    src='../images/icono/add.png' 
                    width={32} alt='Add product'
                    />
                </button>
            </div>
            <button className='buttonAdd' onClick={()=> onAdd(quantity)}>Add to Cart</button>
        </>
    )
}

export default Count