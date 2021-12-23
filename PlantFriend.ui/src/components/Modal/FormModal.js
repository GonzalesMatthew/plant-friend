import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody, ModalHeader
} from 'reactstrap';

function FormModal({
  modalStatus,
  modalToggle,
  modalTitle
}) {
  let formIdentifier = true;
  switch (modalTitle) {
    case 'Add Plant':
      formIdentifier = true;
      break;
    case 'Add Inventory':
      formIdentifier = false;
      break;
    default:
      console.warn('No such case for modal title');
  }

  return (
    <Modal
      id={modalTitle}
      size='md'
      isOpen={modalStatus}
      toggle={modalToggle}
    >
      <ModalHeader toggle={modalToggle}>{modalTitle}</ModalHeader>
      <ModalBody>
        { formIdentifier ? console.warn('Plant Form') : console.warn('Inventory Form')}
      </ModalBody>
    </Modal>
  );
}

export default FormModal;

FormModal.propTypes = {
  modalStatus: PropTypes.bool,
  modalToggle: PropTypes.func,
  user: PropTypes.any,
  modalTitle: PropTypes.string
};
