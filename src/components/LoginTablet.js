import React from 'react';

const LoginTablet = () => {
  return (
    <div className="wireframe-container">
      <div className="main-content tablet-view">
        <div className="hero-wireframe">
          <div className="logo-placeholder">
            <h3 className="wf-head">Logo</h3>
          </div>
        </div>
        <div className="content-wireframe">
          <div className="content-item">
            <h3 className="wf-head">Login Icon</h3>
            <div className="content-image-placeholder"></div>
            <p className="wf-txt">Login form goes here</p>
            <button className="wf-btn">Login</button>
          </div>
        </div>
        <div className="navigation">
          <div className="nav-item">Icon 1</div>
          <div className="nav-item">Icon 2</div>
          <div className="nav-item">Icon 3</div>
          <div className="nav-item">Icon 4</div>
        </div>
      </div>
    </div>
  );
};

export default LoginTablet;
