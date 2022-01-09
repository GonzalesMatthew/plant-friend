import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button
} from 'reactstrap';
import { signInUser } from '../../helpers/auth';
import {
  HomeContainer, HomeTitle, ProfileInfo
} from './HomeStyled';
import PlantFriendLogo from '../../assets/PlantFriendLogo.png';

function Home({ user }) {
  return (
    <HomeContainer>
      <HomeTitle>Welcome to PlantFriend</HomeTitle>
      <h4>Your Personal House Plant Journal</h4>
      <img src={PlantFriendLogo} alt='Image of PlantFriend Logo'></img>
      <div>
        {user ? '' : <h5>New to PlantFriend?</h5>}
        {user
          ? <div>
            <ProfileInfo>
              View your house plants, inventory, and caretaker&apos;s schedule.
            </ProfileInfo>
            <Button outline color='info' tag={Link} to={'/user'}
              style={{ marginLeft: '4px' }}>
              View Your Profile</Button>
          </div>
          : <Button outline color='info' style={{ marginLeft: '4px' }}
            onClick={signInUser}>
            Create an Account</Button>
        }
      </div>
    </HomeContainer>
  );
}

Home.propTypes = {
  user: PropTypes.any
};

export default Home;
