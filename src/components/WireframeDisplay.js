import React, { useState } from 'react';
import HomeWF from './HomeWF';
import ContactWF from './ContactWF';
import AccountWF from './AccountWF';
import LoginWF from './LoginWF';
import AboutWF from './AboutWF'
import ToursWF from './ToursWF'


const WireframeDisplay = () => {
    const [viewType, setViewType] = useState('mobile');
  
    const toggleView = () => {
      if (viewType === 'mobile') {
        setViewType('tablet');
      } else if (viewType === 'tablet') {
        setViewType('desktop');
      } else {
        setViewType('mobile');
      }
    };
  
    return (
      <div>
        <div className="wf-title">
          Home {viewType === 'desktop' ? '(Desktop View)' : viewType === 'tablet' ? '(Tablet View)' : '(Mobile View)'}
        </div>
        <button className='view-btn wf-tog' onClick={toggleView}>
          {viewType === 'desktop' ? 'Switch to Desktop View' : viewType === 'tablet' ? 'Switch to Tablet View' : 'Switch to Mobile View'}
        </button>
        <HomeWF viewType={viewType} />

        <div className="wf-title">
          About {viewType === 'desktop' ? '(Desktop View)' : viewType === 'tablet' ? '(Tablet View)' : '(Mobile View)'}
        </div>
        <AboutWF viewType={viewType} />

        <div className="wf-title">
          Tours {viewType === 'desktop' ? '(Desktop View)' : viewType === 'tablet' ? '(Tablet View)' : '(Mobile View)'}
        </div>
        <ToursWF viewType={viewType} />
  
        <div className="wf-title">
          Contact {viewType === 'desktop' ? '(Desktop View)' : viewType === 'tablet' ? '(Tablet View)' : '(Mobile View)'}
        </div>
        <ContactWF viewType={viewType} />
  
        <div className="wf-title">
          Account {viewType === 'desktop' ? '(Desktop View)' : viewType === 'tablet' ? '(Tablet View)' : '(Mobile View)'}
        </div>
        <AccountWF viewType={viewType} />
  
        <div className="wf-title">
          Login {viewType === 'desktop' ? '(Desktop View)' : viewType === 'tablet' ? '(Tablet View)' : '(Mobile View)'}
        </div>
        <LoginWF viewType={viewType} />
      </div>
    );
  };

export default WireframeDisplay;
