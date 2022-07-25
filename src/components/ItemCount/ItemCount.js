import {useState} from 'react';
import './ItemCount.css'

const Count = ({stock, onAdd}) =>{
    const [number, setNumber] = useState(0);

    const add = () => {
        number < stock? setNumber(number + 1 ) : setNumber(number=stock);
    } 

    const subtract = () => {
        number > 0? setNumber(number -1 ) : setNumber(number = 0);
    } 
    return(
        <>
            <div className='count'>
                <button onClick={add} className='button'>
                    <img 
                    src='./images/icono/add.png' 
                    width={32} alt='Add product'
                    />
                </button>
                    <p>{number}</p>
                <button onClick={subtract}className='button'>
                    <img 
                    src='./images/icono/substract.png' 
                    width={32} 
                    alt='Subtract product'
                    />
                </button>
            </div>
            <button className='buttonAdd' onClick={()=> onAdd(number)}>Add to Cart</button>
        </>
    )
}

export default Count;