import React, { useState, useEffect } from 'react';
import PlantCard from '../components/Cards/PlantCard';
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
        {/* // search bar */}
        {/* add plants button */}
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center' >
        {plants.map((plant, i) => (
          <PlantCard
            key={i}
            id={plant.id}
            name={plant.name}
            light={plant.light}
            water={plant.water}
            waterFrequency={plant.waterFrequency}
            temperature={plant.temperature}
            nutrients={plant.nutrients}
            nutrientsFrequency={plant.nutrientsFrequency}
            description={plant.description}
            careNeeds={plant.careNeeds}
            imageUrl={plant.imageUrl}
          />
        ))}
      </div>
    </>
  );
}

export default Plants;
