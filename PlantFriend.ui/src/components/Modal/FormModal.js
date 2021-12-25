import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody, ModalHeader
} from 'reactstrap';
import PlantForm from '../Forms/PlantForm';
import { addPlant, updatePlant } from '../../helpers/data/PlantData';
import { addUserInventory, updateUserInventory } from '../../helpers/data/UserInventoryData';
import InventoryForm from '../Forms/InventoryForm';

function FormModal({
  modalStatus,
  modalToggle,
  modalTitle,
  setPlants,
  setInventory,
  userId,
  ...rest
}) {
  const [plantObj, setPlantObj] = useState({
    id: rest.id || null,
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
  const [inventoryObj, setInventoryObj] = useState({
    id: rest.id || null,
    userId: userId || '',
    quantity: rest.quantity || '',
    name: rest.name || '',
    description: rest.description || '',
    imageUrl: rest.imageUrl || '',
  });

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
    case 'Update Inventory':
      formIdentifier = 4;
      break;
    default:
      console.warn('No such case for modal title');
  }

  const handleInputChange = (e) => {
    if (formIdentifier === 1 || formIdentifier === 2) {
      setPlantObj((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }));
    } else if (formIdentifier === 3 || formIdentifier === 4) {
      setInventoryObj((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }));
    } else {
      console.warn('handleInputChange function is not finding formIdentifier value 1, 2, 3 or 4');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIdentifier === 1) {
      console.warn('trying to add plant', plantObj);
      delete plantObj.id;
      addPlant(plantObj).then(setPlants);
    } else if (formIdentifier === 2) {
      console.warn('trying to update plant', plantObj);
      updatePlant(plantObj, plantObj.id).then(setPlants);
    } else if (formIdentifier === 3) {
      console.warn('trying to add inventory', inventoryObj);
      delete inventoryObj.id;
      addUserInventory(inventoryObj).then(setInventory);
    } else if (formIdentifier === 4) {
      console.warn('trying to update inventory', inventoryObj);
      updateUserInventory(inventoryObj, inventoryObj.id).then(setInventory);
    } else {
      console.warn('plantObj', plantObj);
      console.warn('inventoryObj', inventoryObj);
    }
    modalToggle();
  };

  return (
    <Modal
      id={rest.id}
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
            formIdentifier={formIdentifier}
          />
          : <InventoryForm
            formObj={inventoryObj}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            modalToggle={modalToggle}
            formIdentifier={formIdentifier}
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
  setPlants: PropTypes.func,
  setInventory: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  water: PropTypes.string,
  waterFrequency: PropTypes.string,
  nutrients: PropTypes.string,
  nutrientsFrequency: PropTypes.string,
  temperature: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  careNeeds: PropTypes.string,
  light: PropTypes.string,
  userId: PropTypes.string,
  quantity: PropTypes.number,
};
