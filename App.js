import imagen from './unnamed.png'
import fondo from './fondo.jpg'
import './App.css';

function App() {
  return (
    <div className='cuerpo'>
      <img className='fondo' src={fondo} alt='banner'></img>
          <div className='contenedor'>
          </div>
          <div className='contenedor2'>
            <img className='imagen' src={imagen} alt='banner'>
            </img>
            <h1>INICIA SESION</h1>
            <div className='inicio'>
              <div className='correo'>
                <h5 >Correo</h5>
                <input type="email" className="email" id="email" class="input" ></input>
              </div>
              <div className='contraseña'>
                <h5 >Contraseña</h5>
           	    <input type="password" name="password" id="password" class="input"></input>
              </div>
            </div>
            <a href='#' className='uno'>¿Has olvidado tu contraseña?.</a>
            <a href='#' className='dos'>¿Ya te has registrado?.</a>
            <button className='boton' type="submit">Iniciar Sesión</button>
          </div>
    </div>
  );
}

export default App;
