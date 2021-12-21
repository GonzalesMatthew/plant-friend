import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlantCard from '../components/Cards/PlantCard';
import getUserPlantsByUserId from '../helpers/data/UserPlant';

function User({
  user
}) {
  const [userPlants, setUserPlants] = useState([]);
  useEffect(() => {
    getUserPlantsByUserId(user.id).then(setUserPlants);
  }, []);
  return (
    <>
      <div>
        User
        {/* // search bar for plants */}
        {/* add plants button */}
        {/* search bar for inventory
        add inventory button */}
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center' >
        {userPlants.map((plant, i) => (
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

User.propTypes = {
  user: PropTypes.any
};

export default User;
