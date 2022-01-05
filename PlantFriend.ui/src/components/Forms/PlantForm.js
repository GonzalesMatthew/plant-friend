import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormGroup, Input, Button, Label
} from 'reactstrap';

function PlantForm({
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
          placeholder='Enter the plant&apos;s official name'
          value={formObj.name}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='light'>Light</Label>
        <Input
          id='light'
          type='text'
          name='light'
          placeholder='What light requirements are needed?'
          value={formObj.light}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='water'>Water</Label>
        <Input
          id='water'
          type='text'
          name='water'
          placeholder='How much water is needed per watering?'
          value={formObj.water}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='waterFrequency'>Water Frequency</Label>
        <Input
          id='waterFrequency'
          type='text'
          name='waterFrequency'
          placeholder='How often should the plant be watered?'
          value={formObj.waterFrequency}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='temperature'>Temperature</Label>
        <Input
          id='temperature'
          type='text'
          name='temperature'
          placeholder='What temperature does the the plant thrive in?'
          value={formObj.temperature}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='nutrients'>Nutrients</Label>
        <Input
          id='nutrients'
          type='text'
          name='nutrients'
          placeholder='What nutrients does the plant require?'
          value={formObj.nutrients}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='nutrientsFrequency'>Nutrients Frequency</Label>
        <Input
          id='nutrientsFrequency'
          type='text'
          name='nutrientsFrequency'
          placeholder='How often should the plant be fed?'
          value={formObj.nutrientsFrequency}
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
          placeholder='Plant description.'
          value={formObj.description}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='careNeeds'>Soil</Label>
        <Input
          id='careNeeds'
          type='text'
          name='careNeeds'
          placeholder='Other care requirements.'
          value={formObj.careNeeds}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='imageUrl'>Image</Label>
        <Input
          id='imageUrl'
          type='text'
          name='imageUrl'
          placeholder='Enter URL'
          value={formObj.imageUrl}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>

      <Button type='submit'>{formIdentifier === 1 ? 'New Plant Research' : 'Update Plant Research'}</Button>
      <Button onClick={ () => modalToggle()}>Cancel</Button>
    </Form>
  );
}

PlantForm.propTypes = {
  formObj: PropTypes.object,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  modalToggle: PropTypes.func,
  formIdentifier: PropTypes.number
};

export default PlantForm;
