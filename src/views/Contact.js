import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
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
          <h1>Contact Us</h1>
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
      </div>
    </div>
  )
}

export default Contact