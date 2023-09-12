import React from 'react';
import { Carousel } from 'react-bootstrap';
import { BsAward } from 'react-icons/bs';
import ExampleCarouselImage1 from '../Images/proveedor 1.png';
import ExampleCarouselImage2 from '../Images/proveedor 2.png';

const TopProveedores = () => {
  return (
    <div style={{ margin: "2%" }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ marginRight: '10px', marginTop: '1%' }}>Top 5 Proveedores</h1>
        <BsAward size={30} />
      </div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={ExampleCarouselImage1} className="d-block w-40 mx-auto" alt="First slide" style={{ height: 'auto' }} />
          </div>
          <Carousel.Caption>
            <h3><b>1. Proveedor</b></h3>
            <p>SR. Ronaldo Villardo</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={ExampleCarouselImage2} className="d-block w-40 mx-auto" alt="First slide" style={{ height: 'auto' }} />
          </div>
          <Carousel.Caption>
            <h3><b>2. Proveedor</b></h3>
            <p>SR. Luis Grid</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TopProveedores;