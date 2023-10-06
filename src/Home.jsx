import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsPeople, BsLayoutTextWindow, BsGraphUpArrow } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import './App.css';

const Home = () => {


  return (
    <div className='home'>
      <div className='mod-welcome'>
        <div className='image-overlay'></div>
        <p>Sistema CXP Ferreteria la Central</p>
      </div>
      <div className='botones'>
        <Container>
          <Row>
            <Col sm={4}><Button variant="dark" title="Top Proveedores" as="a" href="/topproveedores"><BsPeople /></Button></Col>
            <Col sm={4}><Button variant="dark" title="Top Productos" as="a" href="/topproveedores"><BsGraphUpArrow /></Button></Col>
            <Col sm={4}><Button variant="dark" title="Facturas" as="a" href="/topproveedores"><BsLayoutTextWindow /></Button></Col>
          </Row>
          <Row>
            <Col sm={4}><p>Top Proveedores</p></Col>
            <Col sm={4}>Top Productos</Col>
            <Col sm={4}>Facturas</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;