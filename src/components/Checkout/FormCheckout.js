import {useState, useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CartContext from '../../context/CartContext'


const FormCheckout = () =>{
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();

    const {buyer} = useContext(CartContext)
    
    const handleName = (e) =>{
        e.target.value && setFirstName(e.target.value)
    }
    const handleLastName = (e) =>{
        e.target.value && setLastName(e.target.value)
    }
    const handleAddress = (e) =>{
        e.target.value && setAddress(e.target.value)
    }
    const handlePhone = (e) =>{
        e.target.value && setPhone(e.target.value)
    }

    const handleBuyer = (e) => {
        e.preventDefault()
        buyer.push({firstName,lastName, address, phone})
        
    }

    console.log(buyer)
    
    return (
        <Container>
            <Form className="justify-content-md-center">
                <Row>
                    <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            onChange={handleName}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={handleLastName}
                            placeholder="Last name"
                            defaultValue="Otto"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col}controlId="validationCustom03">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address"  onChange={handleAddress} required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid address.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}controlId="validationCustom05">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone" onChange={handlePhone} required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid phone.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <button className="button" onClick={handleBuyer}>submit</button>
                </Row>
            </Form>
        </Container>
    )
}

export default FormCheckout