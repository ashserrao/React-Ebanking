 import React from 'react';
import { NavLink } from 'react-router-dom';
//import PrivateRoutes from './PrivateRoutes';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="https://www.vhv.rs/dpng/d/427-4273719_random-logo-transparent-background-hd-png-download.png" alt="xyz" height="60px" />
        <h1>Omega Banking</h1>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeClassName="active-link">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="active-link">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/accounts" activeClassName="active-link">
                Accounts
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
