import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getUserPlantsByUserId = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/usersPlants/user/${uid}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addUserPlant = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/usersPlants`, obj)
    .then(() => getUserPlantsByUserId(obj.userId).then(resolve))
    .catch((error) => reject(error));
});

const updateUserPlant = (obj) => new Promise ((resolve, reject) => {
  axios.put(`${dbUrl}/usersPlants/${obj.id}`, obj)
    .then(() => getUserPlantsByUserId(obj.userId).then(resolve))
    .catch((error) => reject(error));
});

const deleteUserPlant = (id) => new Promise ((resolve, reject) => {
  axios.delete(`${dbUrl}/usersPlants/${id}`)
  .then(() => getUserPlantsByUserId(obj.userId).then(resolve))
  .catch((error) => reject(error));
});

export {
  getUserPlantsByUserId,
  addUserPlant,
  updateUserPlant,
  deleteUserPlant
};
