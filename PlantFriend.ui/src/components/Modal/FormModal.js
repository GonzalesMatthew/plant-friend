import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody, ModalHeader
} from 'reactstrap';
import PlantForm from '../Forms/PlantForm';
import { addPlant } from '../../helpers/data/PlantData';
import { addUserInventory } from '../../helpers/data/UserInventoryData';

function FormModal({
  modalStatus,
  modalToggle,
  modalTitle,
  setPlants,
  setInventory
}) {
  const [formObj, setFormObj] = useState({
    name: '',
    water: '',
    waterFrequency: '',
    nutrients: '',
    nutrientsFrequency: '',
    temperature: '',
    description: '',
    imageUrl: '',
    careNeeds: '',
    light: ''
  });

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

  const handleInputChange = (e) => {
    setFormObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // set err logic if necessary field is needed here
    // create logic to choose which method to use:
    if (formIdentifier === true) {
      addPlant(formObj).then(setPlants);
    } else {
      addUserInventory(formObj).then(setInventory);
    }
  };

  return (
    <Modal
      id={modalTitle}
      size='md'
      isOpen={modalStatus}
      toggle={modalToggle}
    >
      <ModalHeader toggle={modalToggle}>{modalTitle}</ModalHeader>
      <ModalBody>
        { formIdentifier
          ? <PlantForm
              formObj={formObj}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          : console.warn('Inventory Form')}
      </ModalBody>
    </Modal>
  );
}

export default FormModal;

FormModal.propTypes = {
  modalStatus: PropTypes.bool,
  modalToggle: PropTypes.func,
  modalTitle: PropTypes.string,
  user: PropTypes.any,
  setPlants: PropTypes.func,
  setInventory: PropTypes.func
};
