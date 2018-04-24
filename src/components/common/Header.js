import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="main">
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/examples" activeClassName="active">Examples</NavLink>
    </nav>
  );
};

export default Header;
