import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getUserById = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users/${userId}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addUser = (userObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/users`, userObj)
    .then(getUserById(userObj.id))
    .catch((error) => reject(error));
});

export {
  addUser,
  getUserById
};
