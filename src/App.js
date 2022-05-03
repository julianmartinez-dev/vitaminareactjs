import './App.css';
import './style.css';

import React from "react";

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Carousel from './components/Carousel';
import Divider from './components/Divider';
import Footer from './components/Footer';
import ItemCount from './components/itemCount/ItemCount';
import NewCard from './components/NewCard';
import PosteoContainer from './posteos/PosteoContainer';
// import CuadroDetailContainer from './components/cuadrosDetail/CuadroDetailContainer';
//  import { BrowserRouter } from 'react-router-dom';



function App() {

  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  };

  return (

    <div className="App">

      <NavBar/>
      <ItemCount onAdd={onAdd}/>

      {/* <CuadroDetailContainer/> */}

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

