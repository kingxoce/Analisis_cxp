import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { BsPlus, BsPencil, BsTrash, BsSearch, BsCalendar } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const FacturaEspecial = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedName, setSelectedName] = useState(null);
  const [selectedNombre, setSelectedNombre] = useState(null);
  const [selectedCantidad, setSelectedCantidad] = useState(null);
  const [selectedDescripcion, setSelectedDescripcion] = useState(null);
  const [selectedTotal, setSelectedTotal] = useState(null);

  const [formErrors, setFormErrors] = useState({});
  const [modalId, setModalId] = useState(0);
  const [modalTitle, setModalTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // Declaración de searchTerm en el estado
  const [tableData, setTableData] = useState([
    { id: 1, nombre: 'Documento 1', nombr: 'Tipo 1', cantidad: 'Activo', descripcion: 'Activo', total: 'total' },
    { id: 2, nombre: 'Documento 2', nombr: 'Tipo 2', cantidad: 'Activo', descripcion: 'Activo', total: 'total' },
    { id: 3, nombre: 'Documento 3', nombr: 'Tipo 3', cantidad: 'Inactivo', descripcion: 'Activo', total: 'total' },
  ]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (id) => {
    setModalId(id);
    if (id === 0) {
      setModalTitle('Factura especial');
      setSelectedName('');
      setSelectedDate(null);
    } else {
      setModalTitle('Editar Documento');
      // cargar los últimos campos agregados o editados
      setSelectedName('Último nombre');
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
      errors.fechaCotizacion = 'Por favor, selecciona una fecha';
    }
    if (!selectedName) {
        errors.nombre = 'Por favor, ingresa un nombre';
      }

    if (!selectedNombre) {
      errors.nombr = 'Por favor, ingresa un nombre';
    }
    if (!selectedName) {
      errors.nombre = 'Por favor, ingresa un nombre';
    }
    if (!selectedCantidad) {
        errors.cantidad = 'Por favor, ingresa un nombre';
      } 
      if (!selectedTotal) {
        errors.total = 'Por favor, ingresa un nombre';
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
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nombr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.cantidad.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.total.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '2%', marginBottom: '10%', marginLeft: '2%' }}>
        <h1 style={{ marginRight: '10px' }}><b>Factura Especial</b></h1>
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
              <th>NIT o DPI</th>
              <th>Nombre</th>
              <th>Bien/Servicio</th>
              <th>Cantidad</th>
              <th>Descripcion</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.nombr}</td>
                <td>{item.cantidad}</td>
                <td>{item.descripcion}</td>
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
                <Form.Label>Bien o Servicio</Form.Label>
                <Form.Select aria-label="Default select example" style={{ width: "50%" }}>
                  <option value="1">Bien</option>
                  <option value="2">Servicio</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nit o DPI</Form.Label>
                <Form.Control
                  type="text"
                  className={`form-control ${formErrors.nombre ? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "50%" }}
                  value={selectedName}
                  onChange={(e) => setSelectedName(e.target.value)}
                />
                {formErrors.nombre && <span className="invalid-feedback">{formErrors.nombre}</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  className={`form-control ${formErrors.nombr ? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "50%" }}
                  value={selectedNombre}
                  onChange={(e) => setSelectedNombre(e.target.value)}
                />
                {formErrors.nombre && <span className="invalid-feedback">{formErrors.nombre}</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                  type="numb"
                  className={`form-control ${formErrors.nombre ? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "50%" }}
                  value={selectedCantidad}
                  onChange={(e) => setSelectedCantidad(e.target.value)}
                />
                {formErrors.nombre && <span className="invalid-feedback">{formErrors.nombre}</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Fecha de Factura</Form.Label>
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

export default FacturaEspecial;