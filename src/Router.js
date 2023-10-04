import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Componentes/Home';
import Mantenimientos from './Componentes/Mantenimientos';
import Documentos from './Componentes/Documentos';
import TipoPagos from './Componentes/TipoPagos';
import TopProveedores from './Componentes/TopProveedores';
import Facturas from './Componentes/Facturas';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mantenimientos" element={<Mantenimientos />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/tipopago" element={<TipoPagos />} />
        <Route path="/topproveedores" element={<TopProveedores />} />
        <Route path="/facturas" element={<Facturas />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;