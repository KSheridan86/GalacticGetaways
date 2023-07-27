import React, { useState, useEffect } from 'react';
import upArrowImage from '../media/back-to-top.png';

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
        <div className={`back-to-top-button ${isVisible ? 'visible' : ''}`}>
            <img src={upArrowImage} className="img-shadow" alt="up arrow" onClick={scrollUp} />
        </div>
    );
};


export default ScrollUp;