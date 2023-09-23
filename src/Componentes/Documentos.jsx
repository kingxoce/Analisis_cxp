import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { BsPlus, BsPencil, BsTrash, BsSearch, BsCalendar } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const Documentos = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [modalId, setModalId] = useState(0);
  const [modalTitle, setModalTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // Declaración de searchTerm en el estado
  const [tableData, setTableData] = useState([
    { id: 1, nombre: 'Documento 1', tipo: 'Tipo 1', activo: 'Activo' },
    { id: 2, nombre: 'Documento 2', tipo: 'Tipo 2', activo: 'Activo' },
    { id: 3, nombre: 'Documento 3', tipo: 'Tipo 3', activo: 'Inactivo' },
  ]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (id) => {
    setModalId(id);
    if (id === 0) {
      setModalTitle('Nuevo Documento');
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
      item.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.activo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '2%', marginBottom: '10%', marginLeft: '2%' }}>
        <h1 style={{ marginRight: '10px' }}><b>Tipo de Documentos</b></h1>
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
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Activo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.tipo}</td>
                <td>{item.activo}</td>
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
          <Modal.Body style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'scroll' }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tipo</Form.Label>
                <Form.Select aria-label="Default select example" style={{ width: "50%" }}>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
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
                <Form.Label>Contabiliza</Form.Label>
                <Form.Select aria-label="Default select example" style={{ width: "20%" }}>
                  <option value="true">Sí</option>
                  <option value="false">No</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Fecha de Cotización</Form.Label>
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
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tipo de Partida</Form.Label>
                <Form.Select aria-label="Default select example" style={{ width: "50%" }}>
                  <option value="true">Sí</option>
                  <option value="false">No</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>¿Se encuentra activo?</Form.Label>
                <Form.Select aria-label="Default select example" style={{ width: "20%" }}>
                  <option value="true">Sí</option>
                  <option value="false">No</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Proveedor</Form.Label>
                <Form.Select aria-label="Default select example" style={{ width: "50%" }}>
                  <option value="true">Sí</option>
                  <option value="false">No</option>
                </Form.Select>
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

export default Documentos;