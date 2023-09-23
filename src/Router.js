import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Componentes/Home';
import Mantenimientos from './Componentes/Mantenimientos';
import Documentos from './Componentes/Documentos';
import TipoPagos from './Componentes/TipoPagos';
import TopProveedores from './Componentes/TopProveedores';
import RetencionesInsert from './Componentes/RetencionesInsert';
import FacturaEspecial from './Componentes/FacturaEspecial';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mantenimientos" element={<Mantenimientos />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/tipopago" element={<TipoPagos />} />
        <Route path="/topproveedores" element={<TopProveedores />} />
        <Route path="/retencionesinsert" element={<RetencionesInsert/>}/>
        <Route path="/facturaespecial" element={<FacturaEspecial/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;