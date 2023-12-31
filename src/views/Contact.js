import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import logo from '../media/gg312.png'
import bg from '../media/shut.png'
import '../index.css'

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from '../firebase';
import Popup from '../components/Popup'


const Contact = () => {
  const [tourPlace, setTourPlace] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [popmsg, setPopmsg] = useState('') 
  const [showPopup, setShowPopup] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState(false);


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
  
        setIsSignedIn(true);
      } else {

        setIsSignedIn(false);
      }
    });
  }, []);
    
  const handleTourPlaceChange = e => {
    setTourPlace(e.target.value)
  }
  const mapOptions = {
    mapId: 'c115b3afa6cb63f6', 
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isSignedIn) {
      setPopmsg('You need to sign in first');
      setShowPopup(true); 
      setTimeout(() => {
        setShowPopup(false); 
        setPopmsg(''); 
      }, 3000);
      return;
    }
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
    const auth = getAuth();
    const currentUser = auth.currentUser;

    
    const userCollection = collection(db, 'bookings');
    await addDoc(userCollection, {
        date: serverTimestamp(),
        package: tourPlace,
        message: message,
        status: 'pending',
      userId: currentUser.uid
    });
    

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

      setIsSubmitted(false)
      setPopmsg('Sent Successfully'); 
        setShowPopup(true); 
        setTimeout(() => {
          setShowPopup(false); 
          setPopmsg(''); 
        }, 3000);
        setTourPlace('');
  }
  useEffect(() => {
    if (isSubmitted) {
        setIsSubmitted(false)
    }
  }, [isSubmitted])
  return (
    <div className="contact-container pg-wrap">
      <img src={bg} alt="Pic of stars" className="background-image" />
      <div className="logo-container">
        <img src={logo} alt="company logo" className="logo" />
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
        {showPopup && <Popup message={popmsg} />} 
        <div className="contact-details">
          <h2 className="intro-head">Contact Details</h2>
          <p>
            <span className="oswald">Email: </span>{' '}
            <a
              className="con-link"
              href="mailto:info@galacticgetaways.com"
              target="_blank"
              rel="noreferrer"
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
              rel="noreferrer"
            >
              {' '}
              +1 (123) 456-7890
            </a>
          </p>
          <p>
            <span className="oswald"> Address: </span>
            <a
              className="con-link"
              // href="https://www.google.com/maps/search/?api=1&query=28.5729,-80.6490"
              target="_blank"
            >
              {' '}
              1234 Space Street, Galaxy
            </a>
          </p>
          <div>
          {/* <MapContainer /> */}
          <div className="mapper">
          <gmp-map center="37.4220656,-122.0840897" zoom="10" map-id="c115b3afa6cb63f6"></gmp-map>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
