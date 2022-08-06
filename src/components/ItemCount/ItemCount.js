import {useState} from 'react';
import './ItemCount.css'


const Count = ({stock, onAdd}) =>{
    const [number, setNumber] = useState(0);
    
    const handleChange = (e) =>{
        if(e.target.value <= stock){
            setNumber(e.target.value)
        }
    }

    const add = () => {
        if (number<stock){
            setNumber(Number(number) + 1)
        }
    } 

    const subtract = () => {
        if (number>0){
            setNumber(number - 1)
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
                    <input onChange={handleChange}  value={number}/>
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