import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Componentes/Home';
import Mantenimientos from './Componentes/Mantenimientos';
import Documentos from './Componentes/Documentos';
import TipoPagos from './Componentes/TipoPagos';
import TopProveedores from './Componentes/TopProveedores';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mantenimientos" element={<Mantenimientos />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/tipopago" element={<TipoPagos />} />
        <Route path="/topproveedores" element={<TopProveedores />} />
        <Route path="/Abonos" element={<Abonos />} />
        <Route path="/NotaD" element={<NotaD />} />
        <Route path="/ANT" element={<ANT />} />
        <Route path="/ANTP" element={<ANTP />} />
        <Route path="/toppro" element={<TopProducts />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;