import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaMap, FaPhone, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { getAuth } from 'firebase/auth';

const Nav = () => {
  const location = useLocation();
  const auth = getAuth();
  const isLoggedIn = auth.currentUser !== null;

  const isActiveLink = (match, location) => {
    if (match) {
      return true;
    } else if (location.pathname === '/' && match === null) {
      return true;
    }
    return false;
  };

  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={isActiveLink('/') ? 'activeBtn' : ''}>
        <FaHome />
        <span>Home</span>
      </NavLink>
      <NavLink to="/about" className={isActiveLink('/about') ? 'activeBtn' : ''}>
        <FaInfoCircle />
        <span>About</span>
      </NavLink>
      <NavLink to="/tours" className={isActiveLink('/tours') ? 'activeBtn' : ''}>
        <FaMap />
        <span>Tours</span>
      </NavLink>
      <NavLink to="/contact" className={isActiveLink('/contact') ? 'activeBtn' : ''}>
        <FaPhone />
        <span>Contact</span>
      </NavLink>
      {isLoggedIn ? (
        <NavLink to="/account" className={isActiveLink('/account') ? 'activeBtn' : ''}>
          <FaUser />
          <span>Account</span>
        </NavLink>
       ) : (
        <NavLink to="/login" className={isActiveLink('/login') ? 'activeBtn' : ''}>
          <FaSignOutAlt />
          <span>Login</span>
        </NavLink>
      )}
    </nav>
  );
};

export default Nav;
