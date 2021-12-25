import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormGroup, Input, Button, Label
} from 'reactstrap';

function InventoryForm({
  formObj,
  handleInputChange,
  handleSubmit,
  modalToggle,
  formIdentifier
}) {
  return (
    <Form
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <Label for='name'>Name</Label>
        <Input
          id='name'
          type='text'
          name='name'
          placeholder='Enter the name of the item or tool.'
          value={formObj.name}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='description'>Description</Label>
        <Input
          id='description'
          type='text'
          name='description'
          placeholder='Describe this item here.'
          value={formObj.description}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='quantity'>Quantity</Label>
        <Input
          id='quantity'
          type='number'
          name='quantity'
          placeholder= '0'
          value={formObj.quantity}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='imageUrl'>Image URL</Label>
        <Input
          id='imageUrl'
          type='text'
          name='imageUrl'
          placeholder='Enter image URL here.'
          value={formObj.imageUrl}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>

      <Button type='submit'>{formIdentifier === 3 ? 'Add Inventory' : 'Update Inventory'}</Button>
      <Button onClick={ () => modalToggle()}>Cancel</Button>
    </Form>
  );
}

InventoryForm.propTypes = {
  formObj: PropTypes.object,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  modalToggle: PropTypes.func,
  formIdentifier: PropTypes.number
};

export default InventoryForm;
