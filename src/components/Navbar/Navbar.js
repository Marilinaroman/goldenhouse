import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import './Navbar.css';

function NavbarGh() {
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
                        <Link to='Category/Kitchen' className='link'>Kitchen</Link>
                        <Link to='Category/Bath' className='link'>Bath</Link>
                        <Link to='Category/Contact' className='link'>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand>
                    <CartWidget/>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavbarGh;