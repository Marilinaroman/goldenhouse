import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

function NavbarGh() {
    return (
        <Navbar collapseOnSelect expand='lg' bg='black'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'>
                    <img
                        src='images/menu.png'
                        alt='logo menu'
                    />
                </Navbar.Toggle>
                <Navbar.Brand>
                    <img
                        src='images/logoGh.png'
                        className="logo"
                        alt="Logo Golden House"
                    />
                </Navbar.Brand>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <button>Kitchen</button>
                        <button>Bath</button>
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