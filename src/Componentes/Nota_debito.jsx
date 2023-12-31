import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { BsFileEarmarkSpreadsheet,BsPlus, BsPencil, BsTrash, BsSearch, BsCalendar,BsPrinter,BsSave,BsFillFileRuledFill,BsFillCalendarEventFill } from 'react-icons/bs';
import {FaUserTie } from 'react-icons/fa';
import { FaMoneyBill1Wave} from 'react-icons/fa6';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const NotaD = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [modalId, setModalId] = useState(0);
  const [modalTitle, setModalTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // Declaración de searchTerm en el estado
  const [tableData, setTableData] = useState([
    { id: 1, proveedor: 'Proveedor A', Nit: '123456789',total: 'Q 1,000.00', Factura: '123131312', fecha: 'dd/mm/aaaa' },
    { id: 2, proveedor: 'Proveedor B', Nit: '987654321', total: 'Q 2,000.00', Factura: '123131223',fecha: 'dd/mm/aaaa' },
    { id: 3, proveedor: 'Proveedor C', Nit: '098765432', total: 'Q 4,000.00', Factura: '634345345',fecha: 'dd/mm/aaaa' },
  ]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (id) => {
    setModalId(id);
    if (id === 0) {
      setModalTitle('Nueva Nota de débito');
      setSelectedName('');
      setSelectedDate(null);
    } else {
      setModalTitle('Editar Nota de débito');
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
      errors.nombre = 'Por favor, ingresa un Monto en Quetzales';
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
      item.proveedor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Nit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tipop.toLowerCase().includes(searchTerm.toLowerCase())||
      item.total.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Factura.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '2%', marginBottom: '10%', marginLeft: '2%' }}>
        <h1 style={{ marginRight: '10px' }}><b>Notas de débito</b></h1>
        <Button variant="success" onClick={() => handleOpenModal(0)} style={{ borderRadius: '50%', padding: '8px' }}>
          <BsPlus size={50} />
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
              <th>Proveedor</th>
              <th>Nit</th>
              <th>Factura</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.proveedor}</td>
                <td>{item.Nit}</td>
                <td>{item.Factura}</td>
                <td>{item.fecha}</td>
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
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Proveedor</b></Form.Label>
                <Form.Select aria-label="Default select example" style={{ width: "33%" }}>
                  <option value="true">Proveedor A</option>
                  <option value="false">Proveedor B</option>
                  <option value="true">Proveedor C</option>
                  <option value="false">Proveedor D</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Factura</b></Form.Label>
            
                <Form.Select aria-label="Default select example" style={{ width: "35%" }}>
                  <option value="true">1234567899</option>
                  <option value="false">9987654321</option>
                  <option value="true">00987654321</option>
                  <option value="false">01018765321</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Fecha de recibido</b></Form.Label>
       
                <div style={{ position: 'relative', width: "28%" }}>
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
                      right: '10%',
                      transform: 'translateY(-50%)',
                    }}
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Monto en Quetzales</b></Form.Label>
                <Form.Control
                  type="number"
                  className={`form-control ${formErrors.nombre ? 'is-invalid' : ''}`}
                  placeholder="Total"
                  style={{ width: "30%" }}
                  value={selectedName}
                  onChange={(e) => setSelectedName(e.target.value)}
                />
                {formErrors.nombre && <span className="invalid-feedback">{formErrors.nombre}</span>}
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

export default NotaD;