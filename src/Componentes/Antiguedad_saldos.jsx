import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { BsPlus, BsPencil, BsTrash, BsSearch, BsCalendar,BsPrinter } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const ANT = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [modalId, setModalId] = useState(0);
  const [modalTitle, setModalTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // Declaración de searchTerm en el estado
  const [tableData, setTableData] = useState([
    { id: 1, proveedor: 'Proveedor A',saldo: 'Q10000.00'},
    { id: 2, proveedor: 'Proveedor B', saldo: 'Q40000.00' },
    { id: 3, proveedor: 'Proveedor C',saldo: 'Q40000.00'},
    { id: 4, proveedor: 'Proveedor C',saldo: 'Q40000.00'}
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
      item.proveedor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Nit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tipop.toLowerCase().includes(searchTerm.toLowerCase())||
      item.total.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Factura.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '2%', marginBottom: '1%', marginLeft: '2%' }}>
        <h1 style={{ marginRight: '10px' }}><b>Antiguiedad de saldos</b></h1>
        <Button variant="success" onClick={() => handleOpenModal(0)} style={{ borderRadius: '50%', padding: '8px' }}>
          <BsPrinter size={50} />
        </Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '1%', marginLeft: '2%' }}>
        <h5><b>Reporte General</b></h5>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '1%', marginLeft: '2%' }}>
        <h5><b>Fecha de referencia dd/mm/aaaa</b></h5>
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
        <Table bordered hover striped>
          <thead>
            <tr>
              <th>Saldo</th>
              <th>Proveedor</th>
              <th>Abonados</th>
              <th>1-30</th>
              <th>31-60</th>
              <th>61-90</th>
              <th>91 o más</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>Q 40,000.00</td>
            <td>Proveedor A</td>
             
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>
            <tr>
            <td>Q 40,000.00</td>
            <td>Proveedor B</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>
            <tr>
            <td>Q 40,000.00</td>
            <td>Proveedor C</td>
             
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>
            <tr>
            <td>Q 40,000.00</td>
            <td>Proveedor D</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
            </tr>
          </tbody>
          <tfoot class="table-active">
              <tr>
            <td colSpan={2}><b>Q 120,000.00</b></td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.00</td>
              </tr>
            </tfoot>
        </Table>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'scroll' }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Proveedor</Form.Label>
                <Form.Select aria-label="Default select example" style={{ width: "80%" }}>
                  <option value="true">Proveedor A</option>
                  <option value="false">Proveedor B</option>
                  <option value="true">Proveedor C</option>
                  <option value="false">Proveedor D</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Factura</Form.Label>
                <Form.Select aria-label="Default select example" style={{ width: "80%" }}>
                  <option value="true">1234567899</option>
                  <option value="false">9987654321</option>
                  <option value="true">00987654321</option>
                  <option value="false">01018765321</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Total</Form.Label>
                <Form.Control
                  type="text"
                  className={`form-control ${formErrors.nombre ? 'is-invalid' : ''}`}
                  placeholder="Total"
                  style={{ width: "50%" }}
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

export default ANT;