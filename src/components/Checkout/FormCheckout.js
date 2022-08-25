import {useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CartContext from '../../context/CartContext'


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
    }

    console.log(buyer)
    
    return (
        <Container>
            <form className="justify-content-md-center" onSubmit={handleSubmit}>
            <Row>
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
            </Row>
            <Row>
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
                        type="text" 
                        placeholder="Phone" 
                        name='phone' 
                        value={phone} 
                        onChange={handleChange} 
                        required 
                        />
                        
            </Row>
            <Row>
                {(firstName && lastName && address && phone )? <button className="button" onClick={()=>createOrder()}>submit</button> : console.log('Form empty')}
            </Row>
            </form>
        </Container>
    )
}

export default FormCheckout