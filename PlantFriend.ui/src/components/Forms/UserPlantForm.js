import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormGroup, Input, Button, Label
} from 'reactstrap';

function UserPlantForm({
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
        <Label for='petName'>Pet Name</Label>
        <Input
          id='petName'
          type='text'
          name='petName'
          placeholder='What will you call your plant?'
          value={formObj.petName}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='status'>Status</Label>
        <Input
          id='status'
          type='text'
          name='status'
          placeholder='E.g. Alive, Dead, Gifted, etc.'
          value={formObj.status}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='initialAgeDays'>Initial Age (Days)</Label>
        <Input
          id='initialAgeDays'
          type='text'
          name='initialAgeDays'
          placeholder='How old is your plant in days?'
          value={formObj.initialAgeDays}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='ageStage'>Age Stage</Label>
        <Input
          id='ageStage'
          type='text'
          name='ageStage'
          placeholder='E.g. Current stage of the plant&apos;s life cycle'
          value={formObj.ageStage}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>

      <Button type='submit'>{formIdentifier === 5 ? 'Add Plant to Profile' : 'Update Your Plant'}</Button>
      <Button onClick={ () => modalToggle()}>Cancel</Button>
    </Form>
  );
}

UserPlantForm.propTypes = {
  formObj: PropTypes.object,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  modalToggle: PropTypes.func,
  formIdentifier: PropTypes.number
};

export default UserPlantForm;
