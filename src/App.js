import React from 'react';
import AppRouter from './Router';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from './Images/cxp-logo.png';
import './App.css';

const App = () => {
  return (
    <div>
      <div className='navegador'>
        <Navbar className="bg-body-tertiary" style={{ margin: 0, padding: 0}}>
          <Container style={{ margin: 0}}>
            <Navbar.Brand><img src={logo} alt="Logo"/></Navbar.Brand>
          </Container>
        </Navbar>
        
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <NavDropdown title="Reportes" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/topproveedores">Top 5 Proveedores</NavDropdown.Item>
            <NavDropdown.Item href="/topro">Top 5 Productos</NavDropdown.Item>
            <NavDropdown.Item href="/ANT">Antiguedad de saldos General</NavDropdown.Item>
            <NavDropdown.Item href="/ANTP">Antiguedad de saldos Proveedor</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Mantenimientos" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/documentos">Documentos</NavDropdown.Item>
            <NavDropdown.Item href="/tipopago">Tipos de Pago</NavDropdown.Item>
            <NavDropdown.Item href="/NotaD">Notas de Débito</NavDropdown.Item>
            <NavDropdown.Item href="/contrasenia">Contraseña</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Movimientos" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/Abonos">Abonos</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
      <AppRouter />
    </div>
  );
};

export default App;