import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getUserPlantsByUserId = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/userPlants/user/${uid}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// const getPlantById
// const addPlant
// const updatePlant
// const deletePlant

export default getUserPlantsByUserId;
