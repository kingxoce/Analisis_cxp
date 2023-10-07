import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Documentos from './Componentes/Documentos';
import TipoPagos from './Componentes/TipoPagos';
import TopProveedores from './Componentes/TopProveedores';
import Factura from './Componentes/Facturas';
import NotaD from './Componentes/Nota_debito';
import Abonos from './Componentes/Abonos';
import ANT from './Componentes/Antiguedad_saldos';
import ANTP from './Componentes/Antiguedad_saldosp';
import TopProducts from './Componentes/TopProductos';
import Contrasenia from './Componentes/Contrasenia';  
import NotaCredito from './Componentes/NotaCredito';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/tipopago" element={<TipoPagos />} />git
        <Route path="/topproveedores" element={<TopProveedores />} />
        <Route path="/facturas" element={<Factura />} />
        <Route path="/ANT" element={<ANT />} />
        <Route path="/ANTP" element={<ANTP />} />
        <Route path="/Abonos" element={<Abonos />} />
        <Route path="/NotaD" element={<NotaD />} />
        <Route path="/Topro" element={<TopProducts />} />
        <Route path="/contrasenia" element={<Contrasenia />} />
        <Route path="/NotaCredito" element={<NotaCredito />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;