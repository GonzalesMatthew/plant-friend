import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getUserByFirebaseId = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users/firebase/${uid}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getUserById = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users/${userId}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addUser = (userObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/users`, userObj)
    .then(() => resolve(getUserById(userObj.id)))
    .catch((error) => reject(error));
});

export {
  getUserByFirebaseId,
  getUserById,
  addUser
};
