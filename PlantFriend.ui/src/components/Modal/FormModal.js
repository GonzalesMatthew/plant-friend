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
  const [plantObj, setPlantObj] = useState({
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
  const [inventoryObj, setInventoryObj] = useState({});

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
    if (formIdentifier === true) {
      setPlantObj((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }));
    } else {
      setInventoryObj((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIdentifier === true) {
      addPlant(plantObj).then(setPlants);
    } else {
      addUserInventory(inventoryObj).then(setInventory);
    }
    modalToggle();
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
        {formIdentifier
          ? <PlantForm
            formObj={plantObj}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            modalToggle={modalToggle}
          />
          : <PlantForm
            formObj={inventoryObj}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            modalToggle={modalToggle}
          />
        }
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
