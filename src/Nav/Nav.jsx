import './Nav.css'
import {useLocalStorage} from '../Producto/useLocalStorage';

function Nav({clickRegistro,setclickRegistro}) {


  function BotonRegistro(){
      setclickRegistro(true);

  }
  
  return (
    <div className="Nav">
      <div className="Nav_Title">
        <h3>CMR - Productos</h3>
      </div>
      <div className="Nav_Links">
        <a href="">Productos</a><br/><br/>

        <a href="" onClick={BotonRegistro} >Registrar Nuevo Producto</a>
      </div>
 
    </div>
  );
}

export default Nav;