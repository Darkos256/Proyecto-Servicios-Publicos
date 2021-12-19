import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Consulta from '../../pages/Consulta/Consulta';
import Usuario from '../../pages/Usuario/Usuario';
import Users from '../../pages/CRUD/Prueba';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import PrivateRoute from '../Routers/PrivateRoute';
// import PublicRoute from '../Routers/PublicRoute';
import Roles from '../helpers/Roles';
import Layout from '../Layout/Layout';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>

            <Route path="/register" element={<Register/>}></Route>

            <Route path="/consultas" element={<PrivateRoute roles={Roles.regular}><Consulta/></PrivateRoute>}/>
            <Route path="/admin/users" element={<PrivateRoute roles={Roles.admin}><Users/></PrivateRoute>}/>
            <Route path="/mi-cuenta" element={<Usuario/>}/>

            <Route path="*" element={<Home/>}></Route>
          </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
