import firebase from 'firebase/';
import axios from 'axios';
import { addUser } from './data/UserData';

axios.interceptors.request.use((request) => {
  // eslint-disable-next-line no-undef
  const token = sessionStorage.getItem('token');

  if (token != null) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
}, (err) => Promise.reject(err));

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((user) => {
    if (user.additionalUserInfo?.isNewUser) {
      const userObj = {
        firebaseId: user.user?.uid,
        admin: false,
        firstName: user.user?.displayName.split(' ')[0],
        lastName: user.user?.displayName.split(' ')[1],
        email: user.user?.email,
        imageUrl: user.user?.photoURL,
      };
      addUser(userObj);
    }
  });
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { signInUser, signOutUser };
