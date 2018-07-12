import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/vismap_logo.png';

const MainMenu = ({loggedIn=false}) => {
  return (
    <nav className="main">
      <div className="logo flex column justify-center">
        <img src={logo} />
      </div>
      <NavLink exact to="/" activeClassName="active">Dashboard</NavLink>
      <NavLink to="/examples" activeClassName="active">Examples</NavLink>
      {loggedIn == true &&
        <NavLink to="/login" className="logout">Logout</NavLink>
      }
    </nav>
  );
};

MainMenu.propTypes = {
  loggedIn: PropTypes.bool
};

export default MainMenu;
