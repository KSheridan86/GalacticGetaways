import React from 'react';

const HomeTablet = () => {
  return (
    <div className="wireframe-container">
      <div className="main-content tablet-view">
        <div className="hero-wireframe">
          <div className="logo-placeholder">
            <h3 className="wf-head">Logo</h3>
          </div>
          <div className="hero-image-placeholder"></div>
          <h2 className="wf-head vid">Video</h2>
        </div>
        <div className="content-wireframe">
          <div className="content-item">
            <h3 className="wf-head">Content Section 1 Header</h3>
            <div className="content-image-placeholder"></div>
            <p className="wf-txt">Content Section 1 Text</p>
            <button className="wf-btn">button</button>
          </div>
          <div className="content-item">
            <h3 className="wf-head">Content Section 2 Header</h3>
            <div className="content-image-placeholder"></div>
            <p className="wf-txt">Content Section 2 Text</p>
            <button className="wf-btn">button</button>
          </div>
          <div className="content-item">
            <h3 className="wf-head">Content Section 3 Header</h3>
            <div className="content-image-placeholder"></div>
            <p className="wf-txt">Content Section 3 Text</p>
            <button className="wf-btn">button</button>
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

export default HomeTablet;
