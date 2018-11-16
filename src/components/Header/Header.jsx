import React from 'react';
import { NavLink } from 'react-router-dom';

// - Styles
import './Header.css';

const Header = () => (
  <header className="app-header">
    <NavLink exact to="/" activeClassName="active">
      Home
    </NavLink>
    <NavLink to="/about" activeClassName="active">
      About
    </NavLink>
    <NavLink to="/settings" activeClassName="active">
      Settings
    </NavLink>
    <NavLink to="/example" activeClassName="active">
      Example
    </NavLink>
    <NavLink to="/auth" activeClassName="active">
      Auth
    </NavLink>
  </header>
)

export default Header;
