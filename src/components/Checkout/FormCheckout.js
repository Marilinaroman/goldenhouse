import {useContext } from 'react';
import CartContext from '../../context/CartContext'
import './FormCheckout.css'


const FormCheckout = ({createOrder}) =>{

    const {buyer, setBuyer} = useContext(CartContext)
    const {firstName, lastName, address, phone} = buyer

    
    const handleChange = (e) =>{
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value            
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    console.log(buyer)
    
    return (
        <div className='form'>
            <h1>Complete the form</h1>
            <form className="justify-content-md-center" onSubmit={handleSubmit}>
            <div className='data'>
                <label>First Name</label>
                <input
                    required
                    type="text"
                    name='firstName'
                    placeholder="First name"
                    value={firstName}
                    onChange={handleChange}
                />
                <label>Last name</label>
                <input
                    required
                    type="text"
                    name='lastName'
                    onChange={handleChange}
                    value={lastName}
                    placeholder="Last name"
                />
                <label>Address</label>
                    <input 
                        type="text" 
                        placeholder="Address" 
                        name='address' 
                        value={address} 
                        onChange={handleChange} 
                        required
                        />
                <label>Phone</label>
                    <input 
                        type="number" 
                        placeholder="Phone" 
                        name='phone' 
                        value={phone} 
                        onChange={handleChange} 
                        required 
                        />
                        
            </div>
            <div className='formButton'>

            {(firstName && lastName && address && phone )? <button className="button" onClick={()=>createOrder()}>Submit</button> : console.log('Form empty')}
            </div>
            </form>
        </div>
    )
}

export default FormCheckout