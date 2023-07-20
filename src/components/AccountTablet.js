import React from 'react';

const AccountTablet = () => {
  return (
    <div className="wireframe-container">
      <div className="main-content tablet-view">
        <div className="account-page-desktop">
          <h1 className="account-heading">Account Page</h1>
          <div className="user-info">
            <div className="avatar-container">
              <img
                src="https://via.placeholder.com/150"
                alt="Avatar"
                className="avatar"
              />
            </div>
            <div className="name-email">
              <p className="user-name">John Doe</p>
              <p className="user-email">john@example.com</p>
            </div>
          </div>
          <div className="input-container">
            <input type="text" value="John Doe" className="name-input" />
            <input type="email" value="john@example.com" className="email-input" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTablet;
