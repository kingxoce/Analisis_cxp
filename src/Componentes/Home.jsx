import React from 'react';
import {PiAddressBookBold, PiWrenchFill, PiUsersFourFill} from "react-icons/pi";
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Home = () => {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Reportes
    </Tooltip>
  );

  const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Mantenimientos
    </Tooltip>
  );

  const renderTooltip3 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Proveedores
    </Tooltip>
  );



  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flex: 3 }}>
        <div style={{ flex: 1 }}>
          <h1 style={{textAlign: 'center', marginTop:'60%'}}>
            <OverlayTrigger placement="top" overlay={renderTooltip}>
              <Button variant="dark" href="/mantenimientos" 
               style={{
                width: '80px',
                height: '80px',
                borderRadius: '0',
                border: '1px solid orange',
                margin: '5%',
                padding: '1%',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', // Agregamos la sombra
              }}>
                <PiAddressBookBold size={65} style={{color : 'white', margin: 0}} />
              </Button>
            </OverlayTrigger>
          </h1>
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{textAlign: 'center', marginTop:'60%'}}>
            <OverlayTrigger placement="top" overlay={renderTooltip2}>
                <Button variant="dark" href="/mantenimientos" 
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '0',
                  border: '1px solid orange',
                  margin: '5%',
                  padding: '1%',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', // Agregamos la sombra
                }}>
                  <PiWrenchFill size={65} style={{color : 'white', margin: 0}} />
                </Button>
              </OverlayTrigger>
          </h1>
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{textAlign: 'center', marginTop:'60%'}}>
            <OverlayTrigger placement="top" overlay={renderTooltip3}>
              <Button variant="dark" href="/topproveedores" 
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '0',
                border: '1px solid orange',
                margin: '5%',
                padding: '1%',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', // Agregamos la sombra
              }}>
                <PiUsersFourFill size={65} style={{color : 'white', margin: 0}} />
              </Button>
            </OverlayTrigger>
          </h1>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <img
          src={require('../Images/20943645.jpg')}
          alt="Imagen"
          style={{
            marginTop: '20px',
            width: '900px',
            animation: 'floating 3s ease-in-out infinite',
          }}
        />
      </div>
      <style>
        {`
        @keyframes floating {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        `}
      </style>
    </div>
  );
};

export default Home;