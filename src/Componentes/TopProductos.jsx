import React from 'react';
import { Carousel } from 'react-bootstrap';
import { BsAward } from 'react-icons/bs';
import ExampleCarouselImage1 from '../Images/proveedor 1.png';
import ExampleCarouselImage2 from '../Images/proveedor 2.png';
import service1 from '../Images/producto.jpg';
import service2 from '../Images/services-icon-png-2282.png';


const TopProducts = () => {
  return (
    <div style={{ margin: "2%" }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ marginRight: '10px', marginTop: '1%' }}>Top 5 Productos y Servicios</h1>
        <BsAward size={30} />
      </div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={service2} className="d-block w-40 mx-auto" alt="First slide" style={{ height: 'auto' }} />
          </div>
          <Carousel.Caption>
            <h3><b>1. Servicio A</b></h3>
            <p>Servicio</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={service1} className="d-block w-40 mx-auto" alt="First slide" style={{ height: 'auto' }} />
          </div>
          <Carousel.Caption>
            <h3><b>2. Producto C</b></h3>
            <p>Producto</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={service1} className="d-block w-40 mx-auto" alt="First slide" style={{ height: 'auto' }} />
          </div>
          <Carousel.Caption>
            <h3><b>3. Producto A</b></h3>
            <p>Producto</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={service1} className="d-block w-40 mx-auto" alt="First slide" style={{ height: 'auto' }} />
          </div>
          <Carousel.Caption>
            <h3><b>4. Producto N</b></h3>
            <p>Producto</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={service1} className="d-block w-40 mx-auto" alt="First slide" style={{ height: 'auto' }} />
          </div>
          <Carousel.Caption>
            <h3><b>2. Producto C</b></h3>
            <p>Producto</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TopProducts;