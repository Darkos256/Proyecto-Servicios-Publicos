import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  method
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Consulta from './pages/Consulta/Consulta';
import Services from './pages/CRUD/Prueba';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Routes>
        <Route path="/"  element={<Home/>}  ></Route>
        <Route path="/consulta" element={<Consulta/>}></Route>
        <Route path="/prueba"  element={<Services/>} method="POST"></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </main>
   </Router>
  );
}

export default App;
