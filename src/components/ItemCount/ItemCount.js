import {useState} from 'react';
import './ItemCount.css'

const Count = ({stock}) =>{
    const [number, setNumber] = useState(0);

    const add = () => {
        number < stock? setNumber(number + 1 ) : setNumber(number=stock);
    } 

    const subtract = () => {
        number > 0? setNumber(number -1 ) : setNumber(number = 0);
    } 
    return(
        <>
            <div>
                <p>{number}</p>
                <button onClick={add} className='button'>
                    <img 
                    src='./images/icono/add.png' 
                    width={32} alt='Add product'
                    />
                </button>
                <button onClick={subtract}className='button'>
                    <img 
                    src='./images/icono/substract.png' 
                    width={32} 
                    alt='Subtract product'
                    />
                </button>
            </div>
        </>
    )
}

export default Count;