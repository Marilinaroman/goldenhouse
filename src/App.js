import './App.css';
import NavbarGh from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavbarGh/>
      <ItemListContainer tittle='Golden House'/>
    </div>
  );
}

export default App;
