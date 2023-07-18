import React, { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; 
import { RiGoogleFill } from 'react-icons/ri'; 

const Login = () => {
  const navigate = useNavigate();
  const [slideLeft, setSlideLeft] = useState(false);
  const [showLoginText, setShowLoginText] = useState(true);

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('Logged in:', result.user);
        navigate('/');
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };

  const toggleSlide = () => {
    setSlideLeft(!slideLeft);
      setTimeout(() => {
        handleSignIn()
      }, 1500); 

  };

  return (
    <div className='login-container pg-wrap'>
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
    </div>
  );
};

export default Login;
