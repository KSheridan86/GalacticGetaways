import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import emailjs from 'emailjs-com'

emailjs.init('YOUR_USER_ID')

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_o758nq8',
        'template_utsenxf',
        e.target,
        '8dbphUqwHbrkIwDFN'
      )
      .then(result => {
        console.log(result.text)
        setIsSubmitted(true)
      })
      .catch(error => {
        console.error('Error sending email:', error)
      })

    e.target.reset()
  }

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false)
      }, 2000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [isSubmitted])

  return (
    <>
      <footer className="footer">
        <div className="column">
          <h3 className="hide">Menu</h3>
          <ul className="footer-menu hide">
            <li className="footer-item">
              {' '}
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="footer-item">
              {' '}
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="footer-item">
              <NavLink to="/tours">Tours</NavLink>
            </li>
            <li className="footer-item">
              {' '}
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>Tours</h3>
          <ul className="footer-menu">
            <li className="footer-item">
              {' '}
              <Link to="/tours#basic">Basic</Link>
            </li>
            <li className="footer-item">
              {' '}
              <Link to="/tours#earth-orbit">Earth Orbit</Link>
            </li>
            <li className="footer-item">
              <Link to="/tours#moonlanding">Moon Landing</Link>
            </li>
            <li className="footer-item">
              {' '}
              <Link to="/tours#deluxe">Deluxe</Link>
            </li>
          </ul>
        </div>
        <div className="column hide">
          <h3>Information</h3>
          <ul className="footer-menu">
            <li className="footer-item">
              {' '}
              <NavLink to="/terms">Terms</NavLink>
            </li>
            <li className="footer-item">
              {' '}
              <NavLink to="/privacy">Privacy</NavLink>
            </li>
            <li className="footer-item">
              <NavLink
                target="blank"
                to="https://www.google.com/maps/place/Kennedy+Space+Center/@28.5728889,-80.6515803,17z/data=!4m12!1m5!3m4!2zMjjCsDM0JzIyLjQiTiA4MMKwMzgnNTYuNCJX!8m2!3d28.5728889!4d-80.649!3m5!1s0x88e74b95a365c6fd:0x8b7339f246f869dd!8m2!3d28.5728722!4d-80.6489808!16zL20vMDQ1ejg?entry=ttu"
              >
                Location
              </NavLink>
            </li>
            <li className="footer-item">
              {' '}
              <NavLink to="/newgrange">Deluxe</NavLink>
            </li>
          </ul>
        </div>
        <div className="column">
          {isSubmitted && (
            <div className="popupf">
              <h2>Sent Successfully</h2>
              <p>
                Thank you for reaching out!
                <br />
                We will get back to you shortly
              </p>
              <p></p>
            </div>
          )}
          <div className="footer-section news-sec">
            <h3 className="news-t">Newsletter</h3>
            <p className="news-p">
              Sign up for our newsletter to receive updates:
            </p>
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Enter your email" name="email" />
              <button className="foot-btn" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
      <div className="bottom-bar">
        <p>© 2023 Galactic Getaways | All rights reserved</p>
      </div>
    </>
  )
}

export default Footer
