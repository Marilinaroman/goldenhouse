import Card from 'react-bootstrap/Card';
import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({id, name, price, description, img}) =>{
    const handleClick = (e) =>{
        e.stopPropagation()
    }

    return (
        <Card 
        key={id}
        onClick={handleClick}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                    <Card.Text style={{ overflowY: 'hidden', maxHeight:100 }}>{description}</Card.Text>
                    <Link to={`/Detail/${id}`} className='button'> See more </Link>
                </Card.Body>
        </Card>
    )
}

export default Item