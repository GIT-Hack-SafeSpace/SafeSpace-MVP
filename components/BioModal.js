import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

import { allBioData } from '../data/bioData';

export default function BioModal() {

	// Modal open state
	const [modal, setModal] = React.useState(false);

	// Toggle for Modal
	const toggle = () => setModal(!modal);

	return (
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader
					toggle={toggle}>Sample Modal Title</ModalHeader>
				<ModalBody>
					Sample Modal Body Text to display...
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}>Okay</Button>
				</ModalFooter>
			</Modal>
	);
}

