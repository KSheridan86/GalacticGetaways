import React from 'react';
import logo from '../media/gg312.png'
import vid from '../media/vidReport.mp4'

const Login = () => {

  return (
    <div className='login-container pg-wrap'>
      <img src="//unpkg.com/three-globe/example/img/night-sky.png" alt="star pic" className="bg-image account-bg-img" />
      <div className="logo-container">
        <img src={logo} alt="logo Image" className="logo" />
      </div>
     
      <div className="video-wrap">
      <video controls width="640" height="360" >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
};

export default Login;