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
  setInventory,
  ...rest
}) {
  const [plantObj, setPlantObj] = useState({
    name: rest.name || '',
    water: rest.water || '',
    waterFrequency: rest.waterFrequency || '',
    nutrients: rest.nutrients || '',
    nutrientsFrequency: rest.nutrientsFrequency || '',
    temperature: rest.temperature || '',
    description: rest.description || '',
    imageUrl: rest.imageUrl || '',
    careNeeds: rest.careNeeds || '',
    light: rest.light || '',
  });
  const [inventoryObj, setInventoryObj] = useState({});

  let formIdentifier = 0;
  switch (modalTitle) {
    case 'Add Plant':
      formIdentifier = 1;
      break;
    case 'Update Plant':
      formIdentifier = 2;
      break;
    case 'Add Inventory':
      formIdentifier = 3;
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
    if (formIdentifier === 1) {
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
        {formIdentifier === 1 || formIdentifier === 2
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
  setInventory: PropTypes.func,
  name: PropTypes.string,
  water: PropTypes.string,
  waterFrequency: PropTypes.string,
  nutrients: PropTypes.string,
  nutrientsFrequency: PropTypes.string,
  temperature: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  careNeeds: PropTypes.string,
  light: PropTypes.string
};
