import React, { useState, useEffect } from 'react';
import getPlants from '../helpers/data/PlantData';

function Plants() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    getPlants().then(setPlants);
  }, []);
  return (
    <>
      <div>
        Plants
      </div>
      {plants.map((plant, i) => (
        <div key={i}>
          {plant.name}
        </div>
      ))}
    </>
  );
}

export default Plants;
