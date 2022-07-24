import './App.css';
import NavbarGh from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Count from './components/ItemCount/ItemCount'

function App() {
  return (
    <div className="App">
      <NavbarGh/>
      <ItemListContainer tittle='Golden House'/>
      <Count stock='20'/>
    </div>
  );
}

export default App;
