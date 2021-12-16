import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, ButtonGroup
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

function Home({ user }) {
  const authButtons = () => (
    <div>
      {
        user !== null
        && <ButtonGroup>
          {
            user
              ? <Button outline color = 'danger' onClick={signOutUser}>Logout</Button>
              : <Button outline color='success' onClick={signInUser}>Login</Button>
          }
        </ButtonGroup>
      }
    </div>
  )
  return (
    <div>
      Home
    </div>
  );
}

export default Home;
