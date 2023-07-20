import React, { useState } from 'react';
import HomeWF from './HomeWF';
import HomeTablet from './HomeTablet';
import HomeDesktop from './HomeDesktop';
import ContactWF from './ContactWF';
import ContactTablet from './ContactTablet';
import ContactDesktop from './ContactDesktop';
import AccountWF from './AccountWF';
import AccountTablet from './AccountTablet';
import AccountDesktop from './AccountDesktop';
import LoginWF from './LoginWF';
import LoginTablet from './LoginTablet';

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
        <button className='view-btn' onClick={toggleView}>
          {viewType === 'desktop' ? 'Switch to Desktop View' : viewType === 'tablet' ? 'Switch to Tablet View' : 'Switch to Mobile View'}
        </button>
        <HomeWF viewType={viewType} />
  
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
