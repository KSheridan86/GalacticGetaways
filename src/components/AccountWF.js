import React from 'react';

const AccountWF = ({viewType}) => {
  return (
    <div className="wireframe-container">
       <div className={`main-content ${viewType}-view`}>
        <div className="hero-wireframe">
          <div className="logo-placeholder">
            <h3 className="wf-head">Logo</h3>
          </div>
        </div>
        <div className="content-wireframe">
          <div className="content-item">
            <h3 className="wf-head">Account Information</h3>
            <div className="content-image-placeholder"></div>
            <p className="wf-txt">User account details go here</p>
          </div>
          <div className="content-item">
            <h3 className="wf-head">Booking Information</h3>
            <div className="content-image-placeholder"></div>
            <p className="wf-txt">User booking details go here</p>
            <button className="wf-btn">Logout</button>
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
}

export default AccountWF;
