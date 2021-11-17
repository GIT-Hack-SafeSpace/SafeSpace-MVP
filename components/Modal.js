import Button from 'react-bootstrap/Button';
import { ButtonStyle } from '../styles/ButtonStyle';
import Modal from 'react-bootstrap/Modal';

export default function ModalComp({
  title,
  children,
  handleShow,
  handleClose,
  showModal,
}) {
  return (
    <>
      <ButtonStyle className='d-flex justify-content-center'>
        <Button className='create' onClick={handleShow}>
          <span>&#43;</span> CREATE
        </Button>
      </ButtonStyle>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}
