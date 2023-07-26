import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiChevronDown } from 'react-icons/hi'
import logo from '../media/gg312.png'
import { getAuth } from 'firebase/auth';
 

const DeskNav = () => {
  // const location = useLocation();
  const auth = getAuth();
  const isLoggedIn = auth.currentUser !== null;

  return (
    <nav className={`navbar`}>
      <div className="navbar-logo">
        <NavLink to="/">
          {' '}
          <img src={logo} alt="Logo" className="logo-image" />
        </NavLink>
      </div>
      <ul
        className={`navbar-Navlinks navbar-menu`}
      >

        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li className="navbar-dropdown">
          <a href="#" className=" drop-arrow">
            Tours <HiChevronDown />
          </a>
          <ul className="dropdown-menu">
            <li className="drop-item">
              {' '}
              <NavLink to="/tours#basic">Basic</NavLink>
            </li>
            <li className="drop-item">
              {' '}
              <NavLink to="/tours#earth-orbit">Earth Orbit</NavLink>
            </li>
            <li className="drop-item">
              <NavLink to="/tours#moon-landing">Moon Landing</NavLink>
            </li>
            <li className="drop-item">
              {' '}
              <NavLink to="/tours#deluxe">Deluxe</NavLink>
            </li>
            <li className="drop-item">
              {' '}
              <NavLink to="/tours#all-in-one">All in One</NavLink>
            </li>
          </ul>
        </li>
        <li>
        {isLoggedIn ? (
          <NavLink className="nov" to="/account">
            <button className="nav-btn">Account</button>
          </NavLink>
        ) : (
          <NavLink className="nov" to="/login">
          <button className="nav-btn">Login</button>
        </NavLink>
        )}
        </li>
      </ul>
    </nav>
  )
}

export default DeskNav
