import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getUserInventoryByUserId = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/usersInventory/user/${uid}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addUserInventory = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/usersInventory`, obj)
    .then(() => getUserInventoryByUserId(obj.userId).then(resolve))
    .catch((error) => reject(error));
});

export {
  getUserInventoryByUserId,
  addUserInventory
};
