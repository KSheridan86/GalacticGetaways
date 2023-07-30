import React, { useState, useEffect } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; 
import { RiGoogleFill } from 'react-icons/ri'; 
import logo from '../media/gg312.png'
import Popup from '../components/Popup';

const Login = () => {
  const navigate = useNavigate();
  const [slideLeft, setSlideLeft] = useState(false);
  const [showLoginText, setShowLoginText] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setShowPopup(true);
        console.log('Logged in:', result.user);
        setTimeout(() => {
          navigate('/'); // Navigate after showing the popup for a while
        }, 1000);
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };
  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const toggleSlide = () => {
    setSlideLeft(!slideLeft);
      setTimeout(() => {
        handleSignIn()
      }, 1500); 

  };

  return (
    <div className='login-container pg-wrap'>
        <img
       src="https://i.ibb.co/MGQQKpg/night-sky.webp" 
          alt="night-sky"
          className="bg-image"
        />
      <div className="logo-container">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/galacticgetaways-8c0b1.appspot.com/o/images%2Fgg312.webp?alt=media&token=4cfb3dc6-eaf0-4f88-8d17-0e965d599e8f"
          alt="company logo"
          className="logo"
        />
      </div>
      <div
        className={`google-icon-container ${slideLeft ? 'slide-left' : ''}`}
        onClick={toggleSlide}
      >
        <div className="icon">
          <RiGoogleFill className={`google-icon ${slideLeft ? '' : ''}`} />
        </div>
      </div>
      {showLoginText && (
        <h2 className={`login-text ${slideLeft ? '' : 'fade-out'}`}>ALACTIC GETAWAYS</h2>
      )}
             {showPopup && <Popup message="Logged in successfully!" />}

    </div>
  );
};

export default Login;
