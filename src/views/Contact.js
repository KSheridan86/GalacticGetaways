import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import logo from '../media/gg312.png'
import bg from '../media/shut.png'
import '../index.css'

const Contact = () => {
  const [tourPlace, setTourPlace] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleTourPlaceChange = e => {
    setTourPlace(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const firstName = e.target.elements.fname.value
    const lastName = e.target.elements.lname.value
    const email = e.target.elements.email.value
    const tourPlace = e.target.elements.tourPlace.value
    const message = e.target.elements.message.value

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      to_name: 'Recipient Name',
      subject: 'Contact Form Submission',
      email: email,
      message: message,
      tour_place: tourPlace,
    }

    emailjs
      .send(
        'service_o758nq8',
        'template_8o51m2f',
        templateParams,
        '8dbphUqwHbrkIwDFN'
      )
      .then(response => {
        console.log('Email sent successfully!', response.status, response.text)
        setIsSubmitted(true)
        e.target.reset()
      })
      .catch(error => {
        console.error('Email sending failed:', error)
      })
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
    <div className="contact-container pg-wrap">
      <img src={bg} alt="Background Image" className="background-image" />
      <div className="logo-container">
        <img src={logo} alt="logo Image" className="logo" />
      </div>
      {isSubmitted && (
        <div className="popup">
          <h2>Sent Successfully</h2>
          <p>
            Thank you for reaching out!
            <br />
            We will get back to you shortly
          </p>
          <p></p>
        </div>
      )}
      <div className="form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1 className="intro-head">Contact Us</h1>
          <div className="form-group name">
            <div className="name-group">
              <label htmlFor="fname">First Name</label>
              <input
                className="name-in f"
                type="text"
                id="fname"
                name="fname"
                placeholder="First Name"
                required
              />
            </div>
            <div className="name-group">
              <label className="l" htmlFor="lname">
                Last Name
              </label>
              <input
                className="name-in l"
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tourPlace">Tour Package</label>
            <select
              id="tourPlace"
              name="tourPlace"
              value={tourPlace}
              onChange={handleTourPlaceChange}
              required
            >
              <option value="">Select a space tour</option>
              <option value="Basic">Basic</option>
              <option value="Orbit">Earth Orbit</option>
              <option value="MoonLanding">Moon Landing</option>
              <option value="Interstellar">Interstellar</option>
              <option value="Deluxe">Deluxe</option>
              <option value="All">All-in-one</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              rows="5"
              id="message"
              name="message"
              placeholder="Message..."
              required
            />
          </div>
          <div className="form-btn-wrap">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="contact-details">
          <h2 className="intro-head">Contact Details</h2>
          <p>
            <span className="oswald">Email: </span>{' '}
            <a
              className="con-link"
              href="mailto:info@galacticgetaways.com"
              target="_blank"
            >
              {' '}
              info@galacticgetaways.com
            </a>
          </p>
          <p>
            <span className="oswald"> Phone: </span>{' '}
            <a
              className="con-link"
              href="tel:+1 (123) 456-7890"
              target="_blank"
            >
              {' '}
              +1 (123) 456-7890
            </a>
          </p>
          <p>
            <span className="oswald"> Address: </span>
            <a
              className="con-link"
              href="https://www.google.com/maps/search/?api=1&query=28.5729,-80.6490"
              target="_blank"
            >
              {' '}
              1234 Space Street, Galaxy
            </a>
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.585941671949!2d-80.66743470060287!3d28.572870951752932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e74b95a365c6fd%3A0x8b7339f246f869dd!2sGalactic%20Getaways!5e0!3m2!1sen!2sie!4v1690376409690!5m2!1sen!2sie"
            width="300"
            height="200"
            icon="none"
            style={{ border: '0', borderRadius: '5px', boxShadow: ' 4px 4px 10px rgba(0,0,0,0.6)', marginTop: '20px' }}
            allowFullScreen=""
            loading="lazy"
            // referrerPolicy="no-referrer-when-downgrade"
            title="Galactic Getaways"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
