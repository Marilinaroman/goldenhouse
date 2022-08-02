import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarGh from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarGh/>
        <Routes>
          <Route path="/" element={<ItemListContainer tittle='Golden House'/>} />
          <Route path="Category/:category" element={<ItemListContainer/>} />
          <Route path="Detail/:prodId" element={<ItemDetailContainer/>} />
          <Route path="*" element={<h1>404 Not Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
