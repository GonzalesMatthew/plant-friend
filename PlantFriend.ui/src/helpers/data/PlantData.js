import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPlants = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/plants`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// const getPlantById
// const addPlant
// const updatePlant
// const deletePlant

export default getPlants;
