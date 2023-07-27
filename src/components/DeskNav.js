import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { HiChevronDown } from 'react-icons/hi'
import logo from '../media/gg312.png'
import { getAuth } from 'firebase/auth'

const DeskNav = () => {
  // const location = useLocation();
  const auth = getAuth()
  const isLoggedIn = auth.currentUser !== null

  return (
    <nav className={`navbar`}>
      <div className="navbar-logo">
        <NavLink to="/">
          {' '}
          <img src={logo} alt="Logo" className="logo-image" />
        </NavLink>
      </div>
      <ul className={`navbar-Navlinks navbar-menu`}>
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
          <a href="/tours" className=" drop-arrow">
            {/* Tours <HiChevronDown /> */} Tours
          </a>
          {/* <ul className="dropdown-menu">
            <li className="drop-item">
              <a href="/tours#basic">Basic</a>
            </li>
            <li className="drop-item">
              <a href="/tours#earth-orbit">Earth Orbit</a>
            </li>
            <li className="drop-item">
              <a href="/tours#moon-landing">Moon Landing</a>
            </li>
            <li className="drop-item">
              <a href="/tours#deluxe">Deluxe</a>
            </li>
            <li className="drop-item">
              <a href="/tours#all-in-one">All in One</a>
            </li>
          </ul> */}
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
