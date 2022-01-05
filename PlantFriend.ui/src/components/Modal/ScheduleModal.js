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
      id='scheduleModal'
      className="modal-xl"
      isOpen={modalStatus}
      toggle={modalToggle}
      animation='true'
    >
      <ModalHeader toggle={modalToggle}>{modalTitle}</ModalHeader>
      <ModalBody>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Plant</th>
              <th scope="col">Water</th>
              <th scope="col">Nutrients</th>
              <th scope="col">Light</th>
              <th scope="col">Temperature</th>
              <th scope="col">Soil</th>
            </tr>
          </thead>
          <tbody>
            {userPlants.map((plant, i) => (
              <ScheduleCard
                key={i}
                plant={plant}
                row={i}
              />
            ))}
          </tbody>
        </table>
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
