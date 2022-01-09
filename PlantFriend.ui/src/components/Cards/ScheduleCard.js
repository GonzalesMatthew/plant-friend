import React from 'react';
import PropTypes from 'prop-types';

function ScheduleCard({
  plant,
  row
}) {
  return (
    <>
      <tr>
        <th scope="row">{row}</th>
        <td>{plant.petName}, {plant.plant.name}</td>
        <td>{plant.plant.water} {plant.plant.waterFrequency}</td>
        <td>{plant.plant.nutrients} {plant.plant.nutrientsFrequency}</td>
        <td>{plant.plant.light}</td>
        <td>{plant.plant.temperature}</td>
        <td>{plant.plant.careNeeds}</td>
      </tr>
    </>
  );
}

export default ScheduleCard;

ScheduleCard.propTypes = {
  plant: PropTypes.object,
  row: PropTypes.number
};
