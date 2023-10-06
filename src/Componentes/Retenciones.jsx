import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { BsPlus, BsPencil, BsTrash, BsSearch, BsCalendar,BsGearFill, BsFillPrinterFill } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
import { BlobProvider } from '@react-pdf/renderer';
import FacturaPdf from './FacturaPdf';

const Retenciones = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);
  const [newAmount, setNewAmount] = useState('');
  //impresion de facturas
  const [selectedFactura, setSelectedFactura] = useState(null);
  //campos del modal
  const [selectedSerie, setSelectedSerie] = useState(null);
  const [selectedFecha, setSelectedFecha] = useState(null);
  const [selectedNit, setSelectedNit] = useState(null);
  const [selectedNombreRazon, setSelectedNombreRazon] = useState(null);
  const [selectedNumeroFactura, setSelectedNumeroFactura] = useState(null);
  const [selectedConcepto, setSelectedConcepto] = useState(null);
  const [selectedRentaImponible, setSelectedRentaImponible] = useState(null);
  const [selectedRetencion, setSelectedRetencionb] = useState(null);
 
  //
  const [formErrors, setFormErrors] = useState({});
  const [modalId, setModalId] = useState(0);
  const [modalTitle, setModalTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // Declaración de searchTerm en el estado
  const [tableData, setTableData] = useState([
    { id: 1, nit: '1234585', nombrerazon: 'Centro Americana S.A', serie: 'SDAF516DF1', 
        numerofactura: '123456789', concepto: 'Instalacion de camaras', rentaimponible: 'Q 5,000.00', retencion: 'Q 350.00', fecha: '18/10/23' },
    { id: 2, nit: '1234585', nombrerazon: 'Centro Americana S.A', serie: 'SDAF516DF1', 
    numerofactura: '123456789', concepto: 'Instalacion de camaras', rentaimponible: 'Q 5,000.00', retencion: 'Q 350.00', fecha: '18/10/23' },
    { id: 3, nit: '1234585', nombrerazon: 'Centro Americana S.A', serie: 'SDAF516DF1', 
        numerofactura: '123456789', concepto: 'Instalacion de camaras', rentaimponible: 'Q 5,000.00', retencion: 'Q 350.00', fecha: '18/10/23' },
  ]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFacturaData = (item) => {
    // Aquí asigna los datos de la fila a la variable facturaData
    setSelectedFactura(item);
  };


  const handleOpenModal = (id) => {
    setModalId(id);
    if (id === 0) {
      setModalTitle('Nueva Retencion');
      setSelectedNit('');
      setSelectedNombreRazon('');
      setSelectedSerie('');
      setSelectedNumeroFactura('');
      setSelectedConcepto('');
      setSelectedRentaImponible('');
      setSelectedRetencionb('');
      setSelectedFecha(null);
    
      
    } else {
      setModalTitle('Editar Retencion');
      // cargar los últimos campos agregados o editado
      setSelectedNit('Ultimo NIT');
      setSelectedNombreRazon('Ultimo Nombre o Razon ');
      setSelectedSerie('Ultima Serie');
      setSelectedNumeroFactura('Ultimo Numero de Factura');
      setSelectedConcepto('Ultimo Concepto');
      setSelectedRentaImponible('Ultima Renta Imponible');
      setSelectedRetencionb('Ultima Retencion');
      setSelectedFecha(new Date());
      
    
    }
    setShowModal(true);
  };

  const handleOpenNewModal = () => {
    setShowNewModal(true);
  };
  
  const handleCloseNewModal = () => {
    setShowNewModal(false);
  };
  
  const handleSaveNewModal = () => {
    // Aquí puedes realizar cualquier acción que necesites con el nuevo monto ingresado
    handleCloseNewModal();
  };

  const handleFechaChange = (date) => {
    setSelectedFecha(date);
  };
  

  const handleSave = () => {
    const errors = {};
    if (!selectedNit) {
      errors.nit = 'Por favor, ingrese el numero de NIT';
    }
    if (!selectedNombreRazon) {
        errors.nombrerazon = 'Por favor, ingrese Nombre o razon social';
    }
    if (!selectedSerie) {
        errors.serie = 'Por favor, ingrese Serie';
    }
    if (!selectedNumeroFactura) {
      errors.numerofactura = 'Por favor, ingrese el numero de factura';
    }
    if (!selectedConcepto) {
        errors.concepto = 'Por favor, ingrese el concepto';
    }
    if (!selectedRentaImponible) {
        errors.rentaimponible = 'Por favor, ingrese la renta imponible';
    }
    if (!selectedFecha) {
        errors.fecha = 'Por favor, ingrese la fecha';
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
        item.nit.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.nombrerazon.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.serie.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.numerofactura.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.concepto.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.rentaimponible.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.retencion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.fecha.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
  });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '2%', marginBottom: '10%', marginLeft: '2%' }}>
        <h1 style={{ marginRight: '10px' }}><b>Retenciones</b></h1>
        <Button variant="success" onClick={() => handleOpenModal(0)} style={{ borderRadius: '50%', padding: '8px' }}>
          <BsPlus size={30} />
        </Button>
      </div>
      <div style={{ margin: '3%' }}>
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
        <Table bordered hover striped>
            <thead>
                <tr>
                <th>ID</th>
                <th>NIT Contribuyente</th>
                <th>Nombre o razon</th>
                <th>Serie</th>
                <th>Numero de factura</th>
                <th>Concepto</th>
                <th>Renta imponible</th>
                <th>Retencion</th>
                <th>Fecha</th>
                <th style={{textAlign:'center', width:'11%'}} >Acciones</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((item) => {
                    const saldoRestante = item.total - item.pago;
                    return (
                        <tr key={item.id} rowData={item} onSelectRow={handleFacturaData}>
                        <td>{item.id}</td>
                        <td>{item.nit}</td>
                        <td>{item.nombrerazon}</td>
                        <td>{item.serie}</td>
                        <td>{item.numerofactura}</td>
                        <td>{item.concepto}</td>
                        <td>{item.rentaimponible}</td>
                        <td>{item.retencion}</td>
                        <td>{item.fecha}</td>
                        <td style={{ textAlign: 'center' }}>
                  <Button variant="warning" onClick={() => handleOpenModal(item.id)}>
                    <BsPencil />
                  </Button>{' '}
                  <Button variant="danger">
                    <BsTrash />
                  </Button>
                </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'scroll' }}>
            <Form>
            <Form.Group className="mb-3" controlId="nit">
                    <Form.Label>Nit</Form.Label>
                    <Form.Control
                    type="text"
                    className={`form-control ${formErrors.nit ? 'is-invalid' : ''}`}
                    placeholder=""
                    style={{ width: "33%" }}
                    value={selectedNit}
                    onChange={(e) => {
                        setSelectedNit(e.target.value);
                        setFormErrors({ ...formErrors, nit: '' }); // Limpiar el mensaje de error al cambiar el valor
                    }}
                    />
                    {formErrors.nit && <span className="invalid-feedback">{formErrors.nit}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="nombrerazon">
                    <Form.Label>Nombre o razon social</Form.Label>
                    <Form.Control
                    type="text"
                    className={`form-control ${formErrors.nombrerazon ? 'is-invalid' : ''}`}
                    placeholder=""
                    style={{ width: "100%" }}
                    value={selectedNombreRazon}
                    onChange={(e) => {
                        setSelectedNombreRazon(e.target.value);
                        setFormErrors({ ...formErrors, nombrerazon: '' }); // Limpiar el mensaje de error al cambiar el valor
                    }}
                    />
                    {formErrors.nombrerazon && <span className="invalid-feedback">{formErrors.nombrerazon}</span>}
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
                <Form.Group className="mb-3" controlId="numerofactura">
                    <Form.Label>Numero de factura</Form.Label>
                    <Form.Control
                    type="text"
                    className={`form-control ${formErrors.numerofactura ? 'is-invalid' : ''}`}
                    placeholder=""
                    style={{ width: "30%" }}
                    value={selectedNumeroFactura}
                    onChange={(e) => {
                        setSelectedNumeroFactura(e.target.value);
                        setFormErrors({ ...formErrors, numerofactura: '' }); // Limpiar el mensaje de error al cambiar el valor
                    }}
                    />
                    {formErrors.numerofactura && <span className="invalid-feedback">{formErrors.numerofactura}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="correlativo">
                    <Form.Label>Concepto</Form.Label>
                    <Form.Control
                    type="text"
                    className={`form-control ${formErrors.concepto ? 'is-invalid' : ''}`}
                    placeholder=""
                    style={{ width: "80%" }}
                    value={selectedConcepto}
                    onChange={(e) => {
                        setSelectedConcepto(e.target.value);
                        setFormErrors({ ...formErrors, concepto: '' }); // Limpiar el mensaje de error al cambiar el valor
                    }}
                    />
                    {formErrors.concepto && <span className="invalid-feedback">{formErrors.concepto}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="rentaimponible">
                    <Form.Label>Renta imponible</Form.Label>
                    <Form.Control
                    type="text"
                    className={`form-control ${formErrors.rentaimponible ? 'is-invalid' : ''}`}
                    placeholder=""
                    style={{ width: "30%" }}
                    value={selectedRentaImponible}
                    onChange={(e) => {
                        setSelectedRentaImponible(e.target.value);
                        setFormErrors({ ...formErrors, rentaimponible: '' }); // Limpiar el mensaje de error al cambiar el valor
                    }}
                    />
                    {formErrors.rentaimponible && <span className="invalid-feedback">{formErrors.rentaimponible}</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="fecha">
                    <Form.Label>Fecha</Form.Label>
                    <div style={{ position: 'relative', width:'28%'}}>
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
                            right: '10%',
                            transform: 'translateY(-50%)',
                            }}
                        />
                    </div>
                    {formErrors.fecha && <span className="invalid-feedback">{formErrors.fecha}</span>}
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
        <Modal show={showNewModal} onHide={handleCloseNewModal} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Monto a Pagar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId="newAmount">
                    <Form.Label>Monto</Form.Label>
                    <Form.Control
                    type="number"
                    placeholder="Ingrese la cantidad"
                    value={newAmount}
                    onChange={(e) => setNewAmount(e.target.value)}
                    />
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleSaveNewModal}>
                    Aplicar
                </Button>
                <Button variant="secondary" onClick={handleCloseNewModal}>
                    Cancelar
                </Button>
            </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Retenciones;