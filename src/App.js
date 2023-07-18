import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import Contact from './views/Contact';
import Login from './views/Login';
import Tours from './views/Tours';
import About from './views/About';
import Account from './views/Account';
import { auth } from './firebase';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsLoggedIn(user !== null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className='app'>
        <Nav isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
