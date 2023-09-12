import React from 'react';
import { PiAddressBookBold, PiWrenchFill, PiUsersFourFill } from 'react-icons/pi';
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
        <div style={{ flex: 1, width:'10%' }}>
          <h1 style={{ textAlign: 'left', marginTop: '60%', width: '10%' }}>
            <OverlayTrigger placement="top" overlay={renderTooltip}>
              <Button
                variant="dark"
                href="/mantenimientos"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#515258',
                  marginLeft: '5%',
                  padding: '1%',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
                }}
              >
                <PiAddressBookBold size={65} style={{ color: 'white', margin: 0 }} />
              </Button>
            </OverlayTrigger>
            <p style={{ textAlign: 'left', marginLeft: '0px', fontSize: '30px', marginLeft: '5%', width:'20%' }}>Reportes</p>
          </h1>
        </div>
        <div style={{ flex: 1, width:'center' }}>
          <h1 style={{ textAlign: 'left', marginTop: '60%' }}>
            <OverlayTrigger placement="top" overlay={renderTooltip2}>
              <Button
                variant="dark"
                href="/mantenimientos"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#515258', // Cambiamos el color a azul
                  marginLeft: '5%',
                  padding: '1%',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', // Agregamos la sombra
                }}
              >
                <PiWrenchFill size={65} style={{ color: 'white', margin: 0 }} />
              </Button>
            </OverlayTrigger>
            <p style={{ textAlign: 'left', marginRight: '0px', fontSize:'30px', marginLeft: '5%' }}>Mantenimiento</p> {/* Agregamos el texto */}
          </h1>
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ textAlign: 'left', marginTop: '60%' }}>
            <OverlayTrigger placement="top" overlay={renderTooltip3}>
              <Button
                variant="dark"
                href="/topproveedores"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#515258', // Cambiamos el color a azul
                  margin: '0%',
                  padding: '1%',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', // Agregamos la sombra
                }}
              >
                <PiUsersFourFill size={65} style={{ color: 'white', margin: 0 }} />
              </Button>
            </OverlayTrigger>
            <p style={{ textAlign: 'right', marginRight: '10px', fontSize:'30px' }}>Top Proveedores</p> {/* Agregamos el texto */}
          </h1>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            marginTop: '10px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            backgroundColor: '#5764AE', // Cambiamos el color a azul
            animation: 'floating 3s ease-in-out infinite',
          }}
        >
        </div>
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