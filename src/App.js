import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarGh from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import { AlertProvider } from './context/Alert'

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
              <Route path="*" element={<h1>404 Not Page</h1>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </AlertProvider>
    </div>
  );
}

export default App;
