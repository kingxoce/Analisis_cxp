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
          </NavDropdown>
          <NavDropdown title="Mantenimientos" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/documentos">Documentos</NavDropdown.Item>
            <NavDropdown.Item href="/tipopago">Tipos de Pago</NavDropdown.Item>
            <NavDropdown.Item href="/facturas">Facturas</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
      <AppRouter />
    </div>
  );
};

export default App;