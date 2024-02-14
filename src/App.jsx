import React, { useState } from 'react';
import './App.css';

// COMPONENTS //
import Consola from './components/componentsReusable/card/consola';


// DATA //
import Consolas from './data/consola';


function App() {

  // CONSOLA //
  const listaDeConsolas = Consolas.map((v, index) => (<Consola key={index} contenido={v.contenido} estiloConsola={v.estiloConsola} id={v.id} />))



  return (
    <div className="App">

      <h1>Bienvenidos a CodeWord!</h1>

      <div className="containerConsolas"> {listaDeConsolas} </div>

    </div>

  )
}

export default App
