import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarGh from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartDetail from './components/Cart/Cart';
import Login from './components/Login/Login'
import { CartContextProvider } from './context/CartContext';
import { AlertProvider } from './context/Alert';
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <div className="App">
      <AlertProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavbarGh/>
            <Routes>
              <Route path="/" element={<ItemListContainer tittle='Golden House'/>} />
              <Route path="Category/:category" element={<ItemListContainer/>} />
              <Route path="Detail/:prodId" element={<ItemDetailContainer/>} />
              <Route path="Login" element={<Login/>} />
              <Route path="Cart" element={<CartDetail/>}/>
              <Route path='/Checkout' element={<Checkout/>}/>
              <Route path="*" element={<h1>404 Not Page</h1>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </AlertProvider>
    </div>
  );
}

export default App;
