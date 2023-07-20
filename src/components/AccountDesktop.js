import React from 'react';

const AccountDesktop = () => {
  return (
    <div className="wireframe-container">
      <div className="main-content desktop-view">
        <div className="account-page-desktop">
          <h1 className="intro-head">Account Page</h1>
          <div className="user-info">
            <div className="avatar-container">
              <img src="avatar-placeholder.png" alt="Avatar" className="avatar" />
            </div>
            <div className="name-email">
              <p className="user-name">John Doe</p>
              <p className="user-email">john@example.com</p>
            </div>
            <div className="edit-button">
              <button>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDesktop;
