import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/vismap_logo.png';

const MainMenu = () => {
  return (
    <nav className="main">
      <div className="logo flex column justify-center">
        <img src={logo} />
      </div>
      <NavLink exact to="/" activeClassName="active">Dashboard</NavLink>
      <NavLink to="/examples" activeClassName="active">Examples</NavLink>
    </nav>
  );
};

export default MainMenu;
