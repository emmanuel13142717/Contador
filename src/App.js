import './App.css';
import logoPrincipal from './Imagenes/logo.png'
import Boton from './Componentes/Boton';
import Contador from './Componentes/Contador';
import {useState} from 'react';
function App() {
  const[numClics,setNumClics]=useState(0);
  
  const Manejarclick=()=>{
    setNumClics(numClics+1);  
  }
  const ReinicioContador=()=>{
    setNumClics(0);    
  }
  return (
    <div className="App">
      <div className='logoContenedor'>
        <img  
          className='logo'
          src={logoPrincipal}
          alt='Logo de Prueba'/>
      </div>
      <div className='contenedorPrincipal'>
        <Contador numClics={numClics}/>
        <Boton 
        texto='Clic'
        botonClick={true}
        manejarClick={Manejarclick}/>
        <Boton 
        texto='Reiniciar'
        botonClick={false}
        manejarClick={ReinicioContador}/>
      </div>
    </div>
  );
}

export default App;
