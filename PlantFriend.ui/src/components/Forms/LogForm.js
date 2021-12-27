import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormGroup, Input, Button, Label
} from 'reactstrap';

function LogForm({
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
        <Label for='entryDate'>Date</Label>
        <Input
          id='entryDate'
          type='date'
          name='entryDate'
          placeholder='Enter date'
          value={formObj.entryDate}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='entryNumber'>Entry#</Label>
        <Input
          id='entryNumber'
          type='number'
          name='entryNumber'
          placeholder='0'
          value={formObj.entryNumber}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='entry'>Entry</Label>
        <Input
          id='entry'
          type='text'
          name='entry'
          placeholder= '0'
          value={formObj.entry}
          onChange={handleInputChange}
          required
        >
        </Input>
      </FormGroup>

      <Button type='submit'>{formIdentifier === 7 ? 'Add A New Entry' : 'Update Your Entry'}</Button>
      <Button onClick={ () => modalToggle()}>Cancel</Button>
    </Form>
  );
}

LogForm.propTypes = {
  formObj: PropTypes.object,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  modalToggle: PropTypes.func,
  formIdentifier: PropTypes.number
};

export default LogForm;
