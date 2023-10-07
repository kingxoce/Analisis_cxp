import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { BsFileEarmarkSpreadsheet, BsPlus, BsPencil, BsTrash, BsSearch, BsCalendar, BsPrinter, BsSave, BsFillFileRuledFill, BsFillCalendarEventFill } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa';
import { FaMoneyBill1Wave } from 'react-icons/fa6';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const NotaCredito = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedName, setSelectedName] = useState('');
  const [selectedNames, setSelectedNames] = useState('');
  const [selectedProveedor, setSelectedProveedor] = useState('');
  const [selectedDoc, setSelectedDoc] = useState('');
  const [modalId, setModalId] = useState(0);
  const [modalTitle, setModalTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [tableData, setTableData] = useState([
    { id: 1, proveedor: 'Cemento Stack', Nit: '784564231', total: 'Q 20,000.00', Factura: '123131312', fecha: 'dd/mm/aaaa' },
    { id: 2, proveedor: 'Cementos Progreso', Nit: '654654321', total: 'Q 7,000.00', Factura: '123131223', fecha: 'dd/mm/aaaa' },
    { id: 3, proveedor: 'Ferromax', Nit: '0978765432', total: 'Q 4,000.00', Factura: '634345345', fecha: 'dd/mm/aaaa' },
  ]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (id) => {
    setModalId(id);
    if (id === 0) {
      setModalTitle('Nueva Nota de crédito');
      setSelectedName('');
      setSelectedDate(null);
      setSelectedNames('');
      setSelectedProveedor('');
      setSelectedDoc('');
    } else {
      setModalTitle('Editar Nota de crédito');
      setSelectedName('Ingrese Monto');
      setSelectedDate(new Date());
      setSelectedNames('Ingrese Detalle');
      setSelectedProveedor('Ingrese Proveedor');
      setSelectedDoc('Ingrese N° Documento');
    }
    setShowModal(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSave = () => {

    if (!selectedProveedor) {
      window.alert('Seleccione Proveedor');
      return;
    }

    if (!selectedDoc) {
      window.alert('Seleccione N° Documento');
      return;
    }

    if (!selectedDate) {
      window.alert('Seleccione fecha');
      return;
    }



    if (!selectedNames) {
      window.alert('Ingrese Detalle');
      return;
    }


    if (!selectedName) {
      window.alert('Ingrese monto');
      return;
    }

    // Agregar validaciones para los otros campos y mostrar alertas

    // Realiza la acción de guardar
    handleCloseModal();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = tableData.filter((item) => {
    return (
      item.proveedor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Nit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.total.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Factura.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '2%', marginBottom: '10%', marginLeft: '2%' }}>
        <h1 style={{ marginRight: '10px' }}><b>Notas de Crédito</b></h1>
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
                <Form.Select aria-label="Default select example" style={{ width: "45%" }}>
                  <option value=""> </option>
                  <option value="Cemento Stack">Cemento Stack</option>
                  <option value="Cementos Progreso">Cementos Progreso</option>
                  <option value="Ferromax">Ferromax</option>
                  <option value="EPA">EPA</option>
                  <Form.Control
                  type="text"
                  placeholder="Ingrese detalle Documento"
                  style={{ width: "80%" }}
                  value={selectedDoc}
                  onChange={(e) => setSelectedDoc(e.target.value)}
                />



                </Form.Select>
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>N° Documento</b></Form.Label>
                <Form.Select aria-label="Default select example" style={{ width: "30%" }}>
                  <option value=""> </option>
                  <option value="7834567899">7834567899</option>
                  <option value="6987654321">6987654321</option>
                  <option value="20987654321">20987654321</option>
                  <option value="781018765321">781018765321</option>

                  <Form.Control
                  type="text"
                  placeholder="Ingrese detalle Documento"
                  style={{ width: "80%" }}
                  value={selectedProveedor}
                  onChange={(e) => setSelectedProveedor(e.target.value)}
                />

                </Form.Select>
              </Form.Group>
            

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Fecha</b></Form.Label>
                <div style={{ position: 'relative', width: "28%" }}>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    className="form-control"

                    
                  
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

              <Form.Group className="mb-12" controlId="formBasicEmail">
                <Form.Label><b>Detalle</b></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese detalle Documento"
                  style={{ width: "80%" }}
                  value={selectedNames}
                  onChange={(e) => setSelectedNames(e.target.value)}
                />
                {/* No se muestra mensaje de error aquí */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Monto</b></Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Total"
                  style={{ width: "30%" }}
                  value={selectedName}
                  onChange={(e) => setSelectedName(e.target.value)}
                />
                {/* No se muestra mensaje de error aquí */}
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

export default NotaCredito;
