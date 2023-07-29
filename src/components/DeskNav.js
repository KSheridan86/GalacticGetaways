import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../media/gg312.png'
import { getAuth } from 'firebase/auth'

const DeskNav = () => {
  const auth = getAuth()
  const isLoggedIn = auth.currentUser !== null

  return (
    <nav className={`navbar`}>
      <div className="navbar-logo">
        <NavLink to="/">
          {' '}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fgg312.webp?alt=media&token=4cfb3dc6-eaf0-4f88-8d17-0e965d599e8f"
            alt="Logo"
            className="logo-image"
          />
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
            Tours
          </a>
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
