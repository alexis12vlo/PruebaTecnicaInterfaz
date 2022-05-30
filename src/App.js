import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav.jsx'
import Producto from './Producto/Producto.jsx'
import {useLocalStorage} from './Producto/useLocalStorage';
import React, { useState } from 'react';

function App() {
  const [clickRegistro,setclickRegistro]=useLocalStorage('clickRegistro',false);
  return (
    <div className="App">
    <div className="Container_Nav">
      <div className="Container_Nav_Fixed">
        <Nav clickRegistro={clickRegistro} setclickRegistro={setclickRegistro} />
      </div>
      
    </div>
    <div className="Container_Card">
      <Producto clickRegistro={clickRegistro} setclickRegistro={setclickRegistro}/>
    </div>  
    </div>
  );
}

export default App;
