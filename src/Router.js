import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Documentos from './Componentes/Documentos';
import TipoPagos from './Componentes/TipoPagos';
import TopProveedores from './Componentes/TopProveedores';
import Factura from './Componentes/Facturas';
import Retenciones from './Componentes/Retenciones';
import FacturaEspecial from './Componentes/FacturaEspecial';



const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/tipopago" element={<TipoPagos />} />
        <Route path="/topproveedores" element={<TopProveedores />} />
        <Route path="/facturas" element={<Factura />} />
        <Route path="/retenciones" element={<Retenciones />} />
        <Route path="/facturaespecial" element={<FacturaEspecial />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;