// HomePageWireframe.js

import React from 'react'

const AboutWF = ({ viewType }) => {
  return (
    <div className="wireframe-container">
      <div className={`main-content ${viewType}-view`}>
        <div className="hero-wireframe">
          <div className="logo-placeholder">
            <h3 className="wf-head">Logo</h3>
            <h4 className="wf-nav">Link1 Link2 Link3 Link4<span className='wf-btn'>Button</span></h4>
          </div>
          {/* <div className="hero-image-placeholder"></div> */}
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
        <div className="wf-foot">
          <div className="col-wf-foot wf-hide">
          <h2>head</h2>
          <div className="nav-item">Link 1</div>
          <div className="nav-item">Link 2</div>
          <div className="nav-item">Link 3</div>
          <div className="nav-item">Link 4</div>
          </div>
          <div className="col-wf-foot">
          <h2>head</h2>
          <div className="nav-item">Link 1</div>
          <div className="nav-item">Link 2</div>
          <div className="nav-item">Link 3</div>
          <div className="nav-item">Link 4</div>
          </div>
          <div className="col-wf-foot">
          <h2>head</h2>
          <div className="nav-item">Link 1</div>
          <div className="nav-item">Link 2</div>
          <div className="nav-item">Link 3</div>
          <div className="nav-item">Link 4</div>
          </div>
          <div className="col-wf-foot wf-news">
          <h2>newsletter</h2>
          <div className="nav-item">subscribe</div>
          <input type="text" name="myInput" value="Some value" disabled />
          <button className="wf-btn news-btn">button</button>
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
  )
}

export default AboutWF
