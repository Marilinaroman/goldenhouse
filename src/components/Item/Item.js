import Card from 'react-bootstrap/Card';
import Count from './../ItemCount/ItemCount';

const Item = ({product}) =>{
    return (
        <>
            <Card 
            key={product.id}
            style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name} - {product.color}</Card.Title>
                    <Card.Title>${product.price}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>Available Stock : {product.stock}</Card.Text>
                    <Count stock={product.stock}/>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item