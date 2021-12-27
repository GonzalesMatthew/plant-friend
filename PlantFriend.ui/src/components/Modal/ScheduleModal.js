import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody, ModalHeader
} from 'reactstrap';
import ScheduleCard from '../Cards/ScheduleCard';

function ScheduleModal({
  modalStatus,
  modalToggle,
  modalTitle,
  userPlants
}) {
  return (
    <Modal
      id={rest.id}
      size='md'
      isOpen={modalStatus}
      toggle={modalToggle}
    >
      <ModalHeader toggle={modalToggle}>{modalTitle}</ModalHeader>
      <ModalBody>
        {userPlants.map((plant, i) => (
          <ScheduleCard
            key={i}
            plant={plant}
          />
        ))}
      </ModalBody>
    </Modal>
  );
}

export default ScheduleModal;

ScheduleModal.propTypes = {
  modalStatus: PropTypes.bool,
  modalToggle: PropTypes.func,
  modalTitle: PropTypes.string,
  userPlants: PropTypes.array
};
