import React from 'react';
import AppRouter from './Router';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar className="bg-body-tertiary" style={{ margin: 0, padding: 0}}>
        <Container style={{ margin: 0}}>
          <Navbar.Brand><h4>Sistemas de Cuentas por Pagar</h4></Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar bg="dark" data-bs-theme="dark" style={{ padding:'1%' }}>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Movimientos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/pagosmasivos">Pagos Masivos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Reportes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/topproveedores">Top 5 Proveedores</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Mantenimientos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/documentos">Documentos</NavDropdown.Item>
              <NavDropdown.Item href="/tipopago">Tipos de Pago</NavDropdown.Item>
              <NavDropdown.Item href="/facturas">Facturas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppRouter />
    </div>
  );
};

export default App;