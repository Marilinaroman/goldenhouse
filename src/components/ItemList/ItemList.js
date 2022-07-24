import { useState, useEffect  } from "react";
import { getProducts } from "../asyncMock";
import Card from 'react-bootstrap/Card';
import Count from './../ItemCount/ItemCount';
import './ItemList.css';
import Container from "react-bootstrap/esm/Container";


const ItemList = () =>{
    const [products, setProducts] = useState([])
    useEffect(() =>{
        getProducts().then((products)=>{
            setProducts(products);
        })
    }, []);
    
    return (
        <Container>
            <div className='cards'>
                {products.map((u) => (
                    <Card 
                    key={u.id}
                    style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={u.img} />
                        <Card.Body>
                            <Card.Title>{u.name} - {u.color}</Card.Title>
                            <Card.Title>${u.price}</Card.Title>
                            <Card.Text>{u.description}</Card.Text>
                            <Card.Text>Available Stock : {u.stock}</Card.Text>
                            <Count stock={u.stock}/>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    )
}

export default ItemList