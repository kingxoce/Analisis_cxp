import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { BsPlus, BsPencil, BsTrash, BsSearch, BsCalendar } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const NotaCredito = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedDocumento, setSelectedDocumento] = useState(0);
  const [selectedMonto, setSelectedMonto] = useState(0);


  const [formErrors, setFormErrors] = useState({});
  const [modalId, setModalId] = useState(0);
  const [modalTitle, setModalTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); 
  const [tableData, setTableData] = useState([
    { id: 1, nombre: 'Ferromax', fechaEmision: '10-08-2023', documento: '45789653' },
    { id: 2, nombre: 'Stack', fechaEmision: '22-09-2023', documento: '785421365' },
    { id: 3, nombre: 'Truper', fechaEmision: '09-09-2023', documento: '245632864' },
  ]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (id) => {
    setModalId(id);
    if (id === 0) {
      setModalTitle('Nueva Nota de Crédito');
      setSelectedName('');
      setSelectedDate(null);
    

    } else {
      setModalTitle('Editar Documento');
      // cargar los últimos campos agregados o editados
      setSelectedName('Ingrese Nombre');
      setSelectedDocumento('Ingrese número de documento extendido');
        setSelectedMonto('Ingrese monto');
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
      errors.fechaPromesa = 'Selecciona una fecha';
    }

    if (!selectedName) {
      errors.nombre = 'Ingrese un nombre';
    }
    if (!selectedDocumento) {
        errors.documento = 'Ingrese un número de documento';
        }
    if (!selectedMonto) {
        errors.monto = 'Ingrese un monto';
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
      item.fechaEmision.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.documento.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
  });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '2%', marginBottom: '10%', marginLeft: '2%' }}>
        <h1 style={{ marginRight: '10px' }}><b>Nota de Credito</b></h1>
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
              <th>Proveedor</th>
              <th>Fecha Emsion</th>
              <th>N0. Documento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.fechaEmision}</td>
                <td>{item.documento}</td>   
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
          <Modal.Body style={{maxHeight: 'calc(100vh-200px)', overflowY:'scroll'}}>
            <Form>

            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Id</Form.Label>
                <Form.Control
                  type="text"
                  className={`form-control ${formErrors.documento ? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "50%" }}
                  value={selectedId}
                  onChange={(e) => setSelectedDocumento(e.target.value)}
                />
                {formErrors.id && <span className="invalid-feedback">{formErrors.id}</span>}
              </Form.Group> */}


              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Fecha de Promesa</Form.Label>
                <Form.Select aria-label="Default select example" style={{ width: "50%" }}>
                  <option value="1">12-08-2023</option>
                  <option value="2">21-08-2023</option>
                  <option value="3">09-09-2023</option>
                </Form.Select>
              </Form.Group> */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Proveedor</Form.Label>
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
                <Form.Label>N0. Documento</Form.Label>
                <Form.Control
                  type="text"
                  className={`form-control ${formErrors.documento ? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "50%" }}
                  value={selectedDocumento}
                  onChange={(e) => setSelectedDocumento(e.target.value)}
                />
                {formErrors.documento && <span className="invalid-feedback">{formErrors.documento}</span>}
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Monto</Form.Label>
                <Form.Control
                  type="text"
                  className={`form-control ${formErrors.monto ? 'is-invalid' : ''}`}
                  placeholder=""
                  style={{ width: "50%" }}
                  value={selectedMonto}
                  onChange={(e) => setSelectedMonto(e.target.value)}
                />
                {formErrors.monto && <span className="invalid-feedback">{formErrors.monto}</span>}
              </Form.Group>


              {/* <Form.Group className="mb-3" controlId="formBasicEmail"> */}
                {/* <Form.Label>Contabiliza</Form.Label>
                <Form.Select aria-label="Default select example" style={{ width: "20%" }}>
                  <option value="true">Sí</option>
                  <option value="false">No</option> */}
                {/* </Form.Select> */}
              {/* </Form.Group> */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Fecha</Form.Label>
                <div style={{ position: 'relative' }}>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    className={`form-control ${formErrors.fechaEmision ? 'is-invalid' : ''}`}
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
              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tipo de Partida</Form.Label>
                <Form.Select aria-label="Default select example" style={{ width: "50%" }}>
                  <option value="true">Sí</option>
                  <option value="false">No</option>
                </Form.Select>
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
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
              </Form.Group> */}
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

export default NotaCredito;