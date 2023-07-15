import React from 'react'
import Nav from './components/Nav'
import Home from './views/Home'
import Contact from './views/Contact'
import Login from './views/Login'
import Tours from './views/Tours'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import About from './views/About'

const App = () => {
  
  return (
    <Router>
    <div>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/tours' element={<Tours />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </div>
    </Router>
  )
}

export default App