import React from 'react';

const LoginWF = ({viewType}) => {
  return (
    <div className="wireframe-container">
       <div className={`main-content ${viewType}-view`}>
        <div className="hero-wireframe">
        <div className="logo-placeholder">
            <h3 className="wf-head">Logo</h3>
            <h4 className="wf-nav">Link1 Link2 Link3 Link4<span className='wf-btn'>Button</span></h4>
          </div>
        </div>
        <div className="content-wireframe log-wf">
          <div className="content-item  log-wf">
            <h3 className="wf-head">Login Icon</h3>
            <div className="circle"></div>
            {/* <div className="content-image-placeholder"></div> */}
            {/* <p className="wf-txt">Login form goes here</p> */}
            {/* <button className="wf-btn">Login</button> */}
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
  );
}

export default LoginWF;
