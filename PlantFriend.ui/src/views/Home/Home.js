import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button, ButtonGroup
} from 'reactstrap';
import { signInUser, signOutUser } from '../../helpers/auth';
import {
  HomeContainer, HomeInfoContainer, HomeTitle, ProfileInfo, HomeButtonContainer, HomeCarousel
} from './HomeStyled';

function Home({ user }) {
  const authButtons = () => (
    <div>
      {
        user !== null
        && <ButtonGroup>
          {
            user
              ? <Button outline color='danger' onClick={signOutUser}>Logout</Button>
              : <Button outline color='success' onClick={signInUser}>Login</Button>
          }
        </ButtonGroup>
      }
    </div>
  );

  return (
    <HomeContainer>
      <HomeTitle>Welcome to PlantFriend</HomeTitle>
      <HomeInfoContainer>
        <HomeButtonContainer>
          <div>
            {user ? <h4>Your personal house plant journal...</h4> : <h4>Already have an Account?</h4>}
            {authButtons()}
          </div>
        </HomeButtonContainer>
        <HomeButtonContainer>
          {user ? '' : <h4>New to PlantFriend?</h4>}

          {user
            ? <div>
              <ProfileInfo>
                View your house plants, inventory, and caretaker schedule.
              </ProfileInfo>
              <Button outline color='info' tag={Link} to={'/user'}
                style={{ marginLeft: '4px' }}>
                View Your Profile</Button>
            </div>

            : <Button outline color='info' style={{ marginLeft: '4px' }}
              onClick={signInUser}>
              Create an Account</Button>
          }
        </HomeButtonContainer>
      </HomeInfoContainer>
      <HomeCarousel
        slide={true}
        items={[
          {
            altText: '',
            caption: '',
            key: 1,
            src: '../../assets/PlantFriendLogo.png'
          },
          {
            altText: '',
            caption: '',
            key: 2,
            src: '../../assets/PlantFriendLogo.png'
          },
          {
            altText: '',
            caption: '',
            key: 3,
            src: '../../assets/PlantFriendLogo.png'
          }
        ]}
      />
    </HomeContainer>
  );
}

Home.propTypes = {
  user: PropTypes.any
};

export default Home;
