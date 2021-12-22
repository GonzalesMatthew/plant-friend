import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody, ModalHeader
} from 'reactstrap';
const FormModal = ({
  modalStatus,
  modalToggle,
  modalTitle,
}) => {
  return (
    <Modal
      id={id}
      size='md'
      isOpen={modalStatus}
      toggle={modalToggle}
    >
      <ModalHeader toggle={modalToggle}>{modalTitle}</ModalHeader>
      <ModalBody>
        {/* form goes here */}
      </ModalBody>
    </Modal>
  );
};

export default FormModal;

FormModal.propTypes = {
  modalStatus: PropTypes.bool,
  modalToggle: PropTypes.func,
  user: PropTypes.any,
  modalTitle: PropTypes.string
};