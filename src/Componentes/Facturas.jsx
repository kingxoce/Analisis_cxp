import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { BsPlus, BsPencil, BsTrash, BsSearch, BsCalendar } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const Facturas = () => {
  const [showModal, setShowModal] = useState(false);
  //campos del modal
  const [selectedAutorizacion, setSelectedAutorizacion] = useState(null);
  const [selectedSerie, setSelectedSerie] = useState(null);
  const [selectedDte, setSelectedDte] = useState(null);
  const [selectedCorrelativo, setSelectedCorrelativo] = useState(null);
  const [selectedFecha, setSelectedFecha] = useState(null);
  const [selectedFechaPago, setSelectedFechaPago] = useState(null);
  const [selectedDesc, setSelectedDesc] = useState(null);
  const [selectedNit, setSelectedNit] = useState(null);
  const [selectedProveedor, setSelectedProveedor] = useState(null);
  const [selectedTotal, setSelectedTotal] = useState(null);
  const [selectedSaldo, setSelectedSaldo] = useState(null);
  const [selectedPago, setSelectedPago] = useState(null);
  //
  const [formErrors, setFormErrors] = useState({});
  const [modalId, setModalId] = useState(0);
  const [modalTitle, setModalTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // Declaración de searchTerm en el estado
  const [tableData, setTableData] = useState([
    { id: 1, tipo: 'Factura', autorizacion: 'BD26DE61-D25F-4F91-899C-135C98E99CEA', serie: 'BD26DE61', 
        dte: '3529461649', correlativo: '1', fecha: '21-09-2023', fechaPago: '01-10-2023', desc: 'pago de impuesto',
        nit: '107313790', proveedor: 'SAC INC', total: 'Q.50', saldo: 'Q.100', pago: 'Q.50' },
    { id: 2, tipo: 'Factura', autorizacion: 'BD26DE61-D25F-4F91-899C-135C98E99CEA', serie: 'BD26DE61', 
        dte: '3529461649', correlativo: '1', fecha: '21-09-2023', fechaPago: '01-10-2023', desc: 'pago de impuesto',
        nit: '107313790', proveedor: 'PORIV', total: 'Q.50', saldo: 'Q.100', pago: 'Q.50' },
  ]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (id) => {
    setModalId(id);
    if (id === 0) {
      setModalTitle('Nueva Factura');
      setSelectedAutorizacion('');
      setSelectedSerie('');
      setSelectedDte('');
      setSelectedCorrelativo('');
      setSelectedFecha(null);
      setSelectedFechaPago(null);
      setSelectedDesc('');
      setSelectedNit('');
      setSelectedProveedor('');
      setSelectedTotal('');
      
    } else {
      setModalTitle('Editar Factura');
      // cargar los últimos campos agregados o editados
      setSelectedAutorizacion('Último no. autorizacion');
      setSelectedSerie('Última serie');
      setSelectedDte('Último dte');
      setSelectedCorrelativo('Último correlativo');
      setSelectedFecha(new Date());
      setSelectedFechaPago(new Date());
      setSelectedDesc('Última descripcion');
      setSelectedNit('Último nit');
      setSelectedProveedor('Último proveedor');
      setSelectedTotal('Último total');
    }
    setShowModal(true);
  };

  const handleFechaChange = (date) => {
    setSelectedFecha(date);
  };
  
  const handleFechaPagoChange = (date) => {
    setSelectedFechaPago(date);
  };

  const handleSave = () => {
    const errors = {};
    if (!selectedAutorizacion) {
      errors.autorizacion = 'Por favor, ingrese el numero de autorizacion';
    }
    if (!selectedSerie) {
        errors.serie = 'Por favor, ingrese la serie de la factura';
    }
    if (!selectedDte) {
        errors.dte = 'Por favor, ingrese la serie de la factura';
    }
    if (!selectedCorrelativo) {
        errors.correlativo = 'Por favor, ingrese la serie de la factura';
    }
    if (!selectedFecha) {
        errors.fecha = 'Por favor, ingrese la fecha de la factura';
    }
    if (!selectedFechaPago) {
        errors.fechaPago = 'Por favor, ingrese la fecha de pago';
    }
    if (!selectedDesc) {
        errors.desc = 'Por favor, ingrese la descripcion de la factura';
    }
    if (!selectedNit) {
        errors.nit = 'Por favor, ingrese un nit';
    }
    if (!selectedProveedor) {
        errors.proveedor = 'Por favor, seleccione un proveedor';
    }
    if (!selectedTotal) {
        errors.total = 'Por favor, ingrese el total de la factura';
    }
     
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Realiza la acción de guardar
      handleCloseModal();
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  //BUSCADOR DINAMICO ENTRE COLUMNAS
  const filteredData = tableData.filter((item) => {
    return (
      item.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.autorizacion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.serie.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.dte.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.correlativo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.fecha.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.fechaPago.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.proveedor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.total.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.saldo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.pago.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
  });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '2%', marginBottom: '10%', marginLeft: '2%' }}>
        <h1 style={{ marginRight: '10px' }}><b>Facturas</b></h1>
        <Button variant="success" onClick={() => handleOpenModal(0)} style={{ borderRadius: '50%', padding: '8px' }}>
          <BsPlus size={30} />
        </Button>
      </div>
      <div style={{ margin: '5%' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
          <Form.Control
            type="text"
            placeholder="Buscar"
            style={{ width: '20%', border: '2px solid blue', borderRadius: '20px', paddingRight: '30px' }}
            value={searchTerm}
            onChange={handleSearch}
          />
          <BsSearch
            style={{
              color: 'blue',
              marginLeft: '-25px',
              marginTop: '10px',
              marginRight: '20px',
            }}
          />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo</th>
              <th>No. Autorizacion</th>
              <th>Serie</th>
              <th>DTE</th>
              <th>Correlativo</th>
              <th>Fecha</th>
              <th style={{width:'9%'}}>Fecha de Pago</th>
              <th>Descripcion</th>
              <th>Nit</th>
              <th>Proveedor</th>
              <th>Total</th>
              <th>Saldo</th>
              <th>Pago</th>
              <th style={{textAlign:'center', width:'10%'}} >Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.tipo}</td>
                <td>{item.autorizacion}</td>
                <td>{item.serie}</td>
                <td>{item.dte}</td>
                <td>{item.correlativo}</td>
                <td style={{width:'7%'}}>{item.fecha}</td>
                <td>{item.fechaPago}</td>
                <td>{item.desc}</td>
                <td>{item.nit}</td>
                <td>{item.proveedor}</td>
                <td>{item.total}</td>
                <td>{item.saldo}</td>
                <td>{item.pago}</td>
                <td style={{textAlign:'center'}}>
                  <Button variant="warning" onClick={() => handleOpenModal(item.id)}>
                    <BsPencil />
                  </Button>{' '}
                  <Button variant="danger">
                    <BsTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'scroll' }}>
            <Form>
                <Form.Group className="mb-3" controlId="tipo">
                    <Form.Label>Tipo</Form.Label>
                    <Form.Select aria-label="Default select example" style={{ width: "50%" }}>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="autorizacion">
                    <Form.Label>No. Autorizacion</Form.Label>
                    <Form.Control
                    type="text"
                    className={`form-control ${formErrors.autorizacion ? 'is-invalid' : ''}`}
                    placeholder=""
                    style={{ width: "50%" }}
                    value={selectedAutorizacion}
                    onChange={(e) => {
                        setSelectedAutorizacion(e.target.value);
                        setFormErrors({ ...formErrors, autorizacion: '' }); // Limpiar el mensaje de error al cambiar el valor
                    }}
                    />
                    {formErrors.autorizacion && <span className="invalid-feedback">{formErrors.autorizacion}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="serie">
                    <Form.Label>Serie</Form.Label>
                    <Form.Control
                    type="text"
                    className={`form-control ${formErrors.serie ? 'is-invalid' : ''}`}
                    placeholder=""
                    style={{ width: "50%" }}
                    value={selectedSerie}
                    onChange={(e) => {
                        setSelectedSerie(e.target.value);
                        setFormErrors({ ...formErrors, serie: '' }); // Limpiar el mensaje de error al cambiar el valor
                    }}
                    />
                    {formErrors.serie && <span className="invalid-feedback">{formErrors.serie}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="dte">
                    <Form.Label>DTE</Form.Label>
                    <Form.Control
                    type="text"
                    className={`form-control ${formErrors.dte ? 'is-invalid' : ''}`}
                    placeholder=""
                    style={{ width: "50%" }}
                    value={selectedDte}
                    onChange={(e) => {
                        setSelectedDte(e.target.value);
                        setFormErrors({ ...formErrors, dte: '' }); // Limpiar el mensaje de error al cambiar el valor
                    }}
                    />
                    {formErrors.dte && <span className="invalid-feedback">{formErrors.dte}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="correlativo">
                    <Form.Label>Correlativo</Form.Label>
                    <Form.Control
                    type="text"
                    className={`form-control ${formErrors.correlativo ? 'is-invalid' : ''}`}
                    placeholder=""
                    style={{ width: "50%" }}
                    value={selectedCorrelativo}
                    onChange={(e) => {
                        setSelectedCorrelativo(e.target.value);
                        setFormErrors({ ...formErrors, correlativo: '' }); // Limpiar el mensaje de error al cambiar el valor
                    }}
                    />
                    {formErrors.correlativo && <span className="invalid-feedback">{formErrors.correlativo}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="fecha">
                    <Form.Label>Fecha</Form.Label>
                    <div style={{ position: 'relative' }}>
                        <DatePicker
                            selected={selectedFecha}
                            onChange={handleFechaChange}
                            dateFormat="dd/MM/yyyy"
                            className={`form-control ${formErrors.fecha ? 'is-invalid' : ''}`}
                        />
                        <BsCalendar
                            style={{
                            position: 'absolute',
                            top: '50%',
                            right: '58%',
                            transform: 'translateY(-50%)',
                            }}
                        />
                    </div>
                    {formErrors.fecha && <span className="invalid-feedback">{formErrors.fecha}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="fechaPago">
                    <Form.Label>Fecha de Pago</Form.Label>
                    <div style={{ position: 'relative' }}>
                        <DatePicker
                            selected={selectedFechaPago}
                            onChange={handleFechaPagoChange}
                            dateFormat="dd/MM/yyyy"
                            className={`form-control ${formErrors.fechaPago ? 'is-invalid' : ''}`}
                        />
                        <BsCalendar
                            style={{
                            position: 'absolute',
                            top: '50%',
                            right: '58%',
                            transform: 'translateY(-50%)',
                            }}
                        />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="desc">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control
                    type="text"
                    className={`form-control ${formErrors.desc ? 'is-invalid' : ''}`}
                    placeholder=""
                    style={{ width: "50%" }}
                    value={selectedDesc}
                    onChange={(e) => {
                        setSelectedDesc(e.target.value);
                        setFormErrors({ ...formErrors, desc: '' }); // Limpiar el mensaje de error al cambiar el valor
                    }}
                    />
                    {formErrors.desc && <span className="invalid-feedback">{formErrors.desc}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="nit">
                    <Form.Label>NIT</Form.Label>
                    <Form.Control
                    type="number"
                    className={`form-control ${formErrors.nit ? 'is-invalid' : ''}`}
                    placeholder=""
                    style={{ width: "50%" }}
                    value={selectedNit}
                    onChange={(e) => {
                        setSelectedNit(e.target.value);
                        setFormErrors({ ...formErrors, nit: '' }); // Limpiar el mensaje de error al cambiar el valor
                    }}
                    />
                    {formErrors.nit && <span className="invalid-feedback">{formErrors.nit}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="proveedor">
                <Form.Label>Proveedor</Form.Label>
                    <Form.Select aria-label="Default select example" style={{ width: "50%" }}>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="total">
                    <Form.Label>Total</Form.Label>
                    <Form.Control
                    type="number"
                    className={`form-control ${formErrors.total ? 'is-invalid' : ''}`}
                    placeholder=""
                    style={{ width: "50%" }}
                    value={selectedTotal}
                    onChange={(e) => {
                        setSelectedTotal(e.target.value);
                        setFormErrors({ ...formErrors, total: '' }); // Limpiar el mensaje de error al cambiar el valor
                    }}
                    />
                    {formErrors.total && <span className="invalid-feedback">{formErrors.total}</span>}
                </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleSave}>
              Guardar
            </Button>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Facturas;