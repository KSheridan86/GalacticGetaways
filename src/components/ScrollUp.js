import React, { useState, useEffect } from 'react';
import upArrowImage from '../media/back-to-top.png';
import { PiCaretCircleDoubleUpFill } from "react-icons/pi";
import { RiArrowUpDoubleFill } from 'react-icons/ri'

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        setIsVisible(scrollTop > 300);
    };

    const scrollUp = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    };

    return (
        <>
  
      <div className={`back-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollUp}>
        <PiCaretCircleDoubleUpFill   />
      </div>
        </>
      
    );
};


export default ScrollUp;