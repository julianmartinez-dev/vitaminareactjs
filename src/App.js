
import './App.css';

import NavBar from './components/NavBar';
import Cards from './components/Cards';
import ItemListContainer from './components/ItemListContainer';
import Carousel from './components/Carousel';
import Divider from './components/Divider';
import Footer from './components/Footer';
import OtraCard from './components/OtraCard';
import ItemCount from './components/ItemCount';

// import Contador from './components/Contador';

function App() {

  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  };

  return (
    <div className="App">
      <NavBar/>
      <ItemCount onAdd={onAdd}/>

      {/* <Contador/> */}
      
      <ItemListContainer/>

      <Cards/>
      <OtraCard/> 
     

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Carousel/>
      <Divider/>

      <Footer/>

    </div>
  );
}

export default App;
