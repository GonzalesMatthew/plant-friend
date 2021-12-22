import React from 'react';
import {
  Form, FormGroup, Label, Input, Button
} from 'reactstrap';

function PlantForm({}) {
  return (
    <Form
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <Label for="mood">I&apos;m feeling... </Label>
        <Input
          id='moodId'
          type='select'
          name='id'
          placeholder=''
          value={tempUserMood.id}
          onChange={handleInputChange}
        >
        </Input>
      </FormGroup>
      <Button type='submit'>Let&apos;s get snackin&apos;</Button>
      <Button onClick={postpone}>Postpone</Button>
    </Form>
  );
}

export default PlantForm
