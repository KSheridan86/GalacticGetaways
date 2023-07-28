import React, { useEffect, useState } from 'react';

const Popup = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      console.log('popped up')
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isVisible ? (
    <div className="popup-wrapper">
      <div className="popup-slide-in">
        <p>{message}</p>
      </div>
    </div>
  ) : null;
};

export default Popup;
