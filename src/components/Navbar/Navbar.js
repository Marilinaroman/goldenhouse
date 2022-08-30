import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import { useAsync } from '../../hooks/useAsync';
import { getCategories } from '../../service/firebase/firestore';
import './Navbar.css';

const NavbarGh = () => {
    const {data,error} = useAsync(() => getCategories())

    if(error){
        console.log(error)
    }

    return (
        <Navbar collapseOnSelect expand='lg' bg='black'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'>
                    <img
                        src='../images/menu.png'
                        alt='logo menu'
                    />
                </Navbar.Toggle>
                <Navbar.Brand>
                    <Link to='/'>
                        <img
                            src='../images/logoGh.png'
                            className="logo"
                            alt="Logo Golden House"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Link to='/' className='link'>Home</Link>
                        {data?.map((category) =>(
                            <Link to={category.path} key={category.name} className='link'>{category.name}</Link>
                        ))}
                        <Link to='/Contact' className='link'>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand className='loginCart col-2 me-auto'>
                    <Link to='Login' className='link'>Login</Link>
                    <Link to='Cart' className='link'><CartWidget/></Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavbarGh;