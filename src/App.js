import './App.css';
import './style.css';

import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Carousel from './components/Carousel';
import Divider from './components/Divider';
import Footer from './components/Footer';
import ItemCount from './components/itemCount/ItemCount';
import NewCard from './components/NewCard';
import PosteoContainer from './posteos/PosteoContainer';
import CuadroDetailContainer from './components/cuadrosDetail/CuadroDetailContainer';



function App() {

  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  };

  return (
    <div className="App">

      <NavBar/>
      <ItemCount onAdd={onAdd}/>

      <CuadroDetailContainer/>

      <PosteoContainer/>

      <ItemListContainer/>
      <NewCard/>

      

      <Carousel/>
      <Divider/>
      <Footer/>
    </div>
  );
}

export default App;

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
