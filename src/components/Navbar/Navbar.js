import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () =>{
    return (
        <header>
                <img
                        src='images/logoGh.png'
                        className="logo"
                        alt="Logo Golden House"
                />
                <div className="links">
                    <button>Home</button>
                    <button>Kitchen</button>
                    <button>Bathroom</button>
                    <CartWidget/>
                </div>
        </header>

    )
}

export default Navbar