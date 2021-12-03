import imagen from './unnamed.png'
import fondo from './fondo.jpg'
import './App.css';

function App() {
  return (
    <div className='cuerpo'>
      <img className='fondo' src={fondo} alt='banner'></img>
      <div className='contenedor' >
        <img className='imagen' src={imagen} alt='banner'>
        </img>
        <div className='contenedor2'>
          <h1>Crea Tu Usuario</h1>
          <div className='registro1'>
            <h5 >Nombre</h5>
            <input type="text" className="nombre" id="nombre" class="input" ></input>
          </div>
          <div className='registro2'>
            <h5 >Apellido</h5>
            <input type="text" className="apellido" id="apellido" class="input" ></input>
          </div>
          <div className='registro3'>
            <h5 >Numero De Factura</h5>
            <input type="text" className="factura" id="factura" class="input" ></input>
          </div>
          <div className='registro4'>
            <h5 >Correo Electronico</h5>
            <input type="email" className="email" id="email" class="input" ></input>
          </div>
          <div className='registro5'>
            <h5 >Numero Telefonico</h5>
            <input type="text" className="telefono" id="telefono" class="input" ></input>
          </div>
          <div className='registro6'>
            <h5 >Contraseña</h5>
            <input type="password" className="contraseña" id="password" class="input" ></input>
          </div>
          <div className='requisitos'>
            <input type="checkbox" name="conditions" className='cuadro' required></input><p className='texto'>Acepto y autorizo el tratamiento de mis datos personales de acuerdo con la politica de tratamiento de datos personales.</p>
          </div>
          <button className='boton' type="submit">Crear</button>
        </div>
      </div>
    </div>
  );
}

export default App;
