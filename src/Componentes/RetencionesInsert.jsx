import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { BsPlus, BsPencil, BsTrash, BsSearch, BsCalendar } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const RetencionesInsert = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedNombreRazon, setSelectedNombreRazon] = useState(null);
  const [SelectedConcepto, setSelectedConcepto] = useState(null);
  const [SelectedNit, setSelectedNit] = useState(null);
  const [SelectedSerie, setSelectedSerie] = useState(null);
  const [SelectedNumFactura, setSelectedNumFactura] = useState(null);
  const [SelectedRentImponible, setSelectedRentImponible] = useState(null);

  const [formErrors, setFormErrors] = useState({});
  const [modalId, setModalId] = useState(0);
  const [modalTitle, setModalTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // Declaración de searchTerm en el estado
  const [tableData, setTableData] = useState([
    { id: 4964646, nit: '55455', nombreRazon: 'Saco S.A', serie: 'a45dsa', numFactura: '4578963', concepto:'Instalacion Camaras', rentImponible: '500', retencion:'7',fecha:'10/05/23' },
    { id: 2944944, nit: '55465', nombreRazon: 'Hidro S.A', serie: 'dsfa44', numFactura: '24698775' , concepto:'Compra UPS 3Kva', rentImponible: '500', retencion:'7',fecha:'10/05/23' },
    { id: 3451477, nit: '55435', nombreRazon: 'Print S.A', serie: '44855a', numFactura: '3245855',   concepto:'Escritorios', rentImponible: '300', retencion:'7',fecha:'10/05/23'},
  ]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (id) => {
    setModalId(id);
    if (id === 0) {
      setModalTitle('Nueva Retencion');
      setSelectedNombreRazon('');
      setSelectedDate(null);
    } else {
      setModalTitle('Editar Retencion');
      // cargar los últimos campos agregados o editados
      setSelectedNombreRazon('Último nombre');
      setSelectedDate(new Date());
    }
    setShowModal(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSave = () => {
    const errors = {};

    if (!selectedDate) {
      errors.fecha = 'Por favor, selecciona una fecha';
    }

    if (!selectedNombreRazon) {
      errors.nombreRazon = 'Por favor, ingresa un nombre o razon social';
    }
    if (!SelectedNit) {
      errors.nit = 'Por favor, ingresa un NIT';
    }
    if (!SelectedNumFactura) {
      errors.numFactura = 'Por favor, ingresa un numero de factura';
    }
    if (!SelectedSerie) {
      errors.serie = 'Por favor, ingresa serie';
    }
    if (!SelectedConcepto) {
      errors.concepto = 'Por favor, ingresa un nombre';
    }
    if (!SelectedRentImponible) {
      errors.rentImponible = 'Por favor, ingresa un nombre';
    }
    
    // Agregar validaciones para los otros campos
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Realiza la acción de guardar
      handleCloseModal();
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = tableData.filter((item) => {
    return (
      item.nombreRazon.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.serie.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.numFactura.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.concepto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.rentImponible.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '2%', marginBottom: '10%', marginLeft: '2%' }}>
        <h1 style={{ marginRight: '10px' }}><b>Nueva Retencion</b></h1>
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
              <th>Id</th>
            <th>NIT Contribuyente</th>
              <th>Nombre o razon</th>
              <th>Serie</th>
              <th>Numero Factura</th>
              <th>Concepto</th>
              <th>Renta Imponible</th>
              <th>Retencion</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nit}</td>
                <td>{item.nombreRazon}</td>
                <td>{item.serie}</td>
                <td>{item.numFactura}</td>
                <td>{item.concepto}</td>
                <td>{item.rentImponible}</td>
                <td>{item.retencion}</td>
                <td>{item.fecha}</td>

                <td>
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
          <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>NIT</Form.Label>
                <Form.Control
                  type="number"
                  className={`form-control ${formErrors.nit ? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "50%" }}
                  value={SelectedNit}
                  onChange={(e) => setSelectedNit(e.target.value)}
                />
                {formErrors.nombre && <span className="invalid-feedback">{formErrors.nombre}</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre, Razon o denominacion social del contribuyente</Form.Label>
                <Form.Control
                  type="text"
                  className={`form-control ${formErrors.nombreRazon ? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "50%" }}
                  value={selectedNombreRazon}
                  onChange={(e) => setSelectedNombreRazon(e.target.value)}
                />
                {formErrors.nombre && <span className="invalid-feedback">{formErrors.nombre}</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Serie</Form.Label>
                <Form.Control
                  type="text"
                  className={`form-control ${formErrors.serie ? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "50%" }}
                  value={SelectedSerie}
                  onChange={(e) => setSelectedSerie(e.target.value)}
                />
                {formErrors.nombre && <span className="invalid-feedback">{formErrors.nombre}</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Numero de Factura</Form.Label>
                <Form.Control
                  type="number"
                  className={`form-control ${formErrors.numFactura? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "50%" }}
                  value={SelectedNumFactura}
                  onChange={(e) => setSelectedNumFactura(e.target.value)}
                />
                {formErrors.nombre && <span className="invalid-feedback">{formErrors.nombre}</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Concepto</Form.Label>
                <Form.Control
                  type="text"
                  className={`form-control ${formErrors.concepto ? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "50%" }}
                  value={SelectedConcepto}
                  onChange={(e) => setSelectedConcepto(e.target.value)}
                />
                {formErrors.nombre && <span className="invalid-feedback">{formErrors.nombre}</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Renta imponible</Form.Label>
                <Form.Control
                  type="number"
                  className={`form-control ${formErrors.rentImponible ? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "50%" }}
                  value={SelectedRentImponible}
                  onChange={(e) => setSelectedRentImponible(e.target.value)}
                />
                {formErrors.nombre && <span className="invalid-feedback">{formErrors.nombre}</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Fecha de retencion</Form.Label>
                <div style={{ position: 'relative' }}>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    className={`form-control ${formErrors.fechaCotizacion ? 'is-invalid' : ''}`}
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

export default RetencionesInsert;