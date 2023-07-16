import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; 

const Login = () => {
  const navigate = useNavigate();

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

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default Login;
