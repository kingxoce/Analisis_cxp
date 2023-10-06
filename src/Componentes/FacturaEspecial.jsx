import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { BsPlus, BsPencil, BsTrash, BsSearch, BsCalendar } from 'react-icons/bs';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const FacturaEspecial = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedDpiNit, setSelectedDpiNit] = useState(null);
  const [selectedNombre, setSelectedNombre] = useState(null);
  const [selectedBienServicio, setSelectedBienServico] = useState(null);
  const [selectedCantidad, setSelectedCantidad] = useState(null);
  const [selectedDescripcion, setSelectedDescipcion] = useState(null);
  const [selectedTotal, setSelectedTotal] = useState(null);

  const [formErrors, setFormErrors] = useState({});
  const [modalId, setModalId] = useState(0);
  const [modalTitle, setModalTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // Declaración de searchTerm en el estado
  const [tableData, setTableData] = useState([
    { id: 1, dpinit: '2468943184576', nombre: 'Jose Luis', bienservicio: 'Servicio', cantidad: '1', descripcion: 'Servicio de Jardineria', total: 'Q 100.00' },
    { id: 2, dpinit: '2468943655576', nombre: 'Pedro Suarez', bienservicio: 'Bien', cantidad: '10', descripcion: 'Cabo de Martillo', total: 'Q 50.00' },
    { id: 1, dpinit: '2468943189316', nombre: 'Esteban Lopez', bienservicio: 'Servicio', cantidad: '1', descripcion: 'Servicio de Albañileria', total: 'Q 150.00' }
    
  ]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (id) => {
    setModalId(id);
    if (id === 0) {
      setModalTitle('Nueva factura especial');
      setSelectedDpiNit('');
      setSelectedNombre('');
      setSelectedBienServico('');
      setSelectedCantidad('');
      setSelectedDescipcion('');
      setSelectedTotal('');

      setSelectedDate(null);
    } else {
      setModalTitle('Editar Tipo de Pago');
      // cargar los últimos campos agregados o editados
      setSelectedDpiNit('Ultimo Nit');
      setSelectedNombre('Ultimo Nombre');
      setSelectedBienServico('Ultimo Bien o Servicio');
      setSelectedCantidad('Ultima Cantidad');
      setSelectedDescipcion('Ultima Descripcion');
      setSelectedTotal('Ultimo Total');
      setSelectedDate(new Date());
    }
    setShowModal(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSave = () => {
    const errors = {};

    if (!selectedDpiNit) {
      errors.dpinit = 'Por favor, ingrese numero de DPI o NIT';
    }
    
    if (!selectedNombre) {
      errors.nombre = 'Por favor, ingrese un nombre';
    }
    
    if (!selectedBienServicio) {
      errors.bienservicio = 'Por favor, ingrese un bien o un servicio';
    }
    
    if (!selectedCantidad) {
      errors.cantidad = 'Por favor, ingrese una cantidad';
    }
    
    if (!selectedDescripcion) {
      errors.descripcion = 'Por favor, ingrese una descripcion';
    }
    
    if (!selectedTotal) {
      errors.total = 'Por favor, ingrese numero de DPI o NIT';
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
      item.dpinit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.bienservicio.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>DPI o NIT</th>
              <th>Nombre</th>
              <th>Bien/Servicio</th>
              <th>Cantidad</th>
              <th>Descripcion</th>
              <th>Total </th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.dpinit}</td>
                <td>{item.nombre}</td>
                <td>{item.bienservicio}</td>
                <td>{item.cantidad}</td>
                <td>{item.descripcion}</td>
                <td>{item.total}</td>
                <td style={{ textAlign: 'center' }}>
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
            <Form.Group className="mb-3" controlId="dpinit">
                <Form.Label>DPI o NIT</Form.Label>
                <Form.Control
                  type="text"
                  className={`form-control ${formErrors.dpinit ? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "33%" }}
                  value={selectedDpiNit}
                  onChange={(e) => setSelectedDpiNit(e.target.value)}
                />
                {formErrors.dpinit && <span className="invalid-feedback">{formErrors.dpinit}</span>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  className={`form-control ${formErrors.nombre ? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "100%" }}
                  value={selectedNombre}
                  onChange={(e) => setSelectedNombre(e.target.value)}
                />
                {formErrors.nombre && <span className="invalid-feedback">{formErrors.nombre}</span>}
              </Form.Group>

             < Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Bien o Servicio</Form.Label>
                <Form.Select aria-label="Default select example" style={{ width: "25%" }}>
                  <option value="1">Bien </option>
                  <option value="2">Servicio</option>
                  
                </Form.Select>
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="cantidad">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                  type="text"
                  className={`form-control ${formErrors.cantidad ? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "25%" }}
                  value={selectedCantidad}
                  onChange={(e) => setSelectedCantidad(e.target.value)}
                />
                {formErrors.cantidad && <span className="invalid-feedback">{formErrors.cantidad}</span>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="descripcion">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                  type="text"
                  className={`form-control ${formErrors.descripcion ? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "100%" }}
                  value={selectedDescripcion}
                  onChange={(e) => setSelectedDescipcion(e.target.value)}
                />
                {formErrors.descripcion && <span className="invalid-feedback">{formErrors.descripcion}</span>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="total">
                <Form.Label>Total</Form.Label>
                <Form.Control
                  type="text"
                  className={`form-control ${formErrors.total ? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "27%" }}
                  value={selectedTotal}
                  onChange={(e) => setSelectedTotal(e.target.value)}
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

export default FacturaEspecial;