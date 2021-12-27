import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getLogsByUserPlantId = (userPlantId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/logs/userPlant/${userPlantId}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addLog = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/logs`, obj)
    .then(() => getLogsByUserPlantId(obj.userPlantId).then(resolve))
    .catch((error) => reject(error));
});

const updateLog = (obj) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/logs/${obj.id}`, obj)
    .then(() => getLogsByUserPlantId(obj.userPlantId).then(resolve))
    .catch((error) => reject(error));
});

const deleteLog = (id, userPlantId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/logs/${id}`)
    .then(() => getLogsByUserPlantId(userPlantId).then(resolve))
    .catch((error) => reject(error));
});

export {
  getLogsByUserPlantId,
  addLog,
  updateLog,
  deleteLog
};
