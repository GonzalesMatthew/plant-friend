import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getLogsByUserPlantId = (userPlantId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/logs/userPlant/${userPlantId}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getLogsByUserPlantId;
