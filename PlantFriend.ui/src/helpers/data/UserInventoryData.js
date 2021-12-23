import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getUserInventorybyUserId = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/usersInventory/user/${uid}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getUserInventorybyUserId;
