import {useContext } from 'react';
import Form from 'react-bootstrap/Form';
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
            <Form className="justify-content-md-center" onSubmit={handleSubmit}>
            <Row>
                <Form.Label>First Name</Form.Label>
                    <input
                            required
                            type="text"
                            name='firstName'
                            placeholder="First name"
                            value={firstName}
                            onChange={handleChange}
                        />
                <Form.Label>Last name</Form.Label>
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
                    <Form.Label>Address</Form.Label>
                        <input 
                        type="text" 
                        placeholder="Address" 
                        name='address' 
                        value={address} 
                        onChange={handleChange} 
                        required
                        />
                    <Form.Label>Phone</Form.Label>
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
            </Form>
        </Container>
    )
}

export default FormCheckout