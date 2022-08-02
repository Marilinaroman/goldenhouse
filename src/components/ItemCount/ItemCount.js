import {useState} from 'react';
import './ItemCount.css'

const Count = ({stock, onAdd}) =>{
    const [number, setNumber] = useState(0);
    
    const add = () => {
        if (number<stock){
            setNumber(number + 1)
            return setNumber
        }
    } 

    const subtract = () => {
        if (number>0){
            setNumber(number - 1)
            return setNumber
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
                    <p>{number}</p>
                <button onClick={add} className='btnCount'>
                    <img 
                    src='../images/icono/add.png' 
                    width={32} alt='Add product'
                    />
                </button>
            </div>
            <button className='buttonAdd' onClick={()=> onAdd(number)}>Add to Cart</button>
        </>
    )
}

export default Count