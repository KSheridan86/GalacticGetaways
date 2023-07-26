import React, { useEffect, useState, useLayoutEffect } from 'react';
import {  Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import Contact from './views/Contact';
import Login from './views/Login';
import Tours from './views/Tours';
import About from './views/About';
import Account from './views/Account';
// import Wireframe from './components/Wireframe';
import { auth } from './firebase';
import WireframeDisplay from './components/WireframeDisplay';
import ScrollToTop from './components/ScrollToTop';
import ScrollUp from './components/ScrollUp';
import './styles/app.scss'
import DeskNav from './components/DeskNav';
import Footer from './components/Footer';
import Terms from './views/Terms';
import Privacy from './views/Privacy';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useLayoutEffect(() => {
    if (!isLoading) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      console.log("scrolling")
    }
  }, [location.pathname, isLoading]);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsLoggedIn(user !== null);
      setIsLoading(false); // Data loading is complete
    });

    return () => unsubscribe();
  }, []);

  return (
      <div className='app'>
        <ScrollToTop>
          <ScrollUp />
        <DeskNav isLoggedIn={isLoggedIn} />
        <Nav isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wfd" element={<WireframeDisplay />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
        </ScrollToTop>
      </div>
  );
};

export default App;
