import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  NavbarBrand
} from 'reactstrap';
import { signInUser, signOutUser } from '../../helpers/auth';
// import brandLogo from '../../assets/PlantFriendLogo.png';
// import { Logo } from './NavBarElements';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/plants/">Plants</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/user">Profile</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href='/'>PlantFriend</NavbarBrand>
        {/* <a href="/">
          <div className='logo-image'>
            <img src='../../assets/PlantFriendLogo.png'/>
          </div>
        </a> */}
        <NavbarToggler onClick={toggle} />
        <Collapse className='d-flex' isOpen={isOpen} navbar>
          <Nav navbar>
            {user && authenticated()}
            {
              user !== null
              && <NavItem className='ml-auto'>
                {
                  user
                    ? <Button color='danger' onClick={signOutUser}>Log Out</Button>
                    : <Button color='info' onClick={signInUser}>Log In</Button>
                }
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
