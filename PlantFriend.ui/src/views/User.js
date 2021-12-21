import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlantCard from '../components/Cards/PlantCard';
import getUserPlantsByUserId from '../helpers/data/UserPlantData';

function User({
  user
}) {
  console.warn('hello from the user page', user);
  console.warn('also from the user page', user.id);
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
        {userPlants.map((userPlant, i) => (
          <PlantCard
            key={i}
            id={userPlant.plant.id}
            name={userPlant.plant.name}
            light={userPlant.plant.light}
            water={userPlant.plant.water}
            waterFrequency={userPlant.plant.waterFrequency}
            temperature={userPlant.plant.temperature}
            nutrients={userPlant.plant.nutrients}
            nutrientsFrequency={userPlant.plant.nutrientsFrequency}
            description={userPlant.plant.description}
            careNeeds={userPlant.plant.careNeeds}
            imageUrl={userPlant.plant.imageUrl}
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
