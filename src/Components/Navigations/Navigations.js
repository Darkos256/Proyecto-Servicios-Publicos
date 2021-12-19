import {Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../Auth/useAuth';


export default function Navigations() {

  const {logout} = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" variant='dark' bg='dark'>
      <Navbar.Brand as={NavLink} to="/">
        Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <NavDropdown title="Admin">
            <NavDropdown.Item as={NavLink} to="/admin/users">Users</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={NavLink} to="/consultas">Facturas</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
          <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
          <Nav.Link as={NavLink} to="/mi-cuenta">Account</Nav.Link>
          <Nav.Link to="/mi-cuenta" onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
