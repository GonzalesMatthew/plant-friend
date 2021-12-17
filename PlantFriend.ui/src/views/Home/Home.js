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
      <HomeTitle>Welcome to SweetTooth!</HomeTitle>
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
                You can update your payment method and address on your profile.
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
            src: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PIL5MJA3YUYYPBJWET7DS2UPQA.jpg'
          },
          {
            altText: '',
            caption: '',
            key: 2,
            src: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&ixlib=rb-1.2.1&w=1000&q=80'
          },
          {
            altText: '',
            caption: '',
            key: 3,
            src: 'https://images.unsplash.com/photo-1588756264692-d396bca41fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbmR5fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
          }
        ]}
      />
    </HomeContainer>
  );
}

Home.protoTypes = {
  user: PropTypes.any
};

export default Home;
