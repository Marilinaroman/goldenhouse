import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () =>{
    return (
        <header>
                <a href="#">
                    <img
                        src='images/logoGh.png'
                        className="logo"
                        alt="Logo Golden House"
                    />
                </a>
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="#kitchen">Kitchen</a>
                    <a href="#Bathroom">Bathroom</a>
                    <CartWidget/>
                </div>
        </header>

    )
}

export default Navbar