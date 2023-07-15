import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaMap, FaPhone } from 'react-icons/fa';
import '../App.css'

const Nav = () => {
  return (
    <nav className="bottom-nav">
      <NavLink exact to="/" activeClassName="active">
        <FaHome />
        <span>Home</span>
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        <FaInfoCircle />
        <span>About</span>
      </NavLink>
      <NavLink to="/tours" activeClassName="active">
        <FaMap />
        <span>Tours</span>
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        <FaPhone />
        <span>Contact</span>
      </NavLink>
    </nav>
  );
};

export default Nav;
