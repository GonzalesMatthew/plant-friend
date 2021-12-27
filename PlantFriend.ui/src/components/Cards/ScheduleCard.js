import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

function ScheduleCard({
  plant
}) {
  return (
    <>
      <Container>
        <div className='d-flex flex-row'>
          <div>{plant.status} {plant.petName} {plant.plant.name}</div>
          <div>{plant.plant.water} {plant.plant.waterFrequency}</div>
          <div>{plant.plant.nutrients} {plant.plant.nutrientsFrequency}</div>
          <div>{plant.plant.light}</div>
          <div>{plant.plant.temperature}</div>
          <div>{plant.plant.careNeeds}</div>
        </div>
      </Container>
    </>
  );
}

export default ScheduleCard;

ScheduleCard.propTypes = {
  plant: PropTypes.object
};
