const consola = [

{

id: 1,
contenido: `
for (let i = 0; i < 10; i++) {
  const esPar = i % 2 === 0;
  if (esPar) {
    continue;
  }

  console.log(i); // Solo mostramos este console.log si es impaaaaaaaaaaaaaaaaaaaaar (prueba para que se ver que tal el slide xd)

  if (i === 7) {
    break; // Salimos del bucle al llegar al 7
  }
}
`,

estiloConsola: "consola1"

},

 {
 id: 2,
 contenido: `
 html,body {

   margin: 0;
   padding: 0;

 }

 * {

   box-sizing: border-box;

 }

 h1{

 text-align: center;

 }
 .containerConsolas{

   width: 600px;
   display: flex;
   flex-direction: column;
   gap: 5px;
   margin: 20px auto; 
   align-items: center;
  
   }
 `,

 estiloConsola: "consola2"

 },

{

id: 3,
contenido: `
import PropTypes from 'prop-types';

function MiComponente({ miProp }) {
  return <div>{miProp}</div>;
}

MiComponente.propTypes = {
  miProp: PropTypes.string.isRequired,
};

`,

estiloConsola: "consola3"

},

{
  id: 4,
  contenido: `
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
  `,
  
  estiloConsola: "consola2"
  
  },

]

export default consola