import { ButtonStyle } from '../../styles/ButtonStyle';
import Modal from 'react-bootstrap/Modal';

export default function ModalComp({
  title,
  children,
  handleShow,
  handleClose,
  showModal,
  trigger: Trigger
}) {
  return (
    <>
      <ButtonStyle className='d-flex justify-content-center'>
        <Trigger handleShow={handleShow} />
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
