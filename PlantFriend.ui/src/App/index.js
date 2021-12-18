import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/auth';
import NavBar from '../components/NavBar/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';
import { getUserByFirebaseId } from '../helpers/data/UserData';

function App() {
  const [user, setUser] = useState({});
  // fullName: 'Matthew',
  // profileImage: 'currentlyNone',
  // uid: 'alsoNone',
  // user: 'gonzalesmattg'

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // eslint-disable-next-line no-undef
        authUser.getIdToken().then((token) => sessionStorage.setItem('token', token))
          .then(getUserByFirebaseId(authUser.uid)
            .then((resp) => {
              setUser(resp);
            }));
        console.warn(user, 'hello authed user');
      } else {
        setUser(false);
        console.warn(user, 'hello not authed user');
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar user={user} />
        <Routes
          user={user}
        />
      </Router>
    </div>
  );
}

export default App;
