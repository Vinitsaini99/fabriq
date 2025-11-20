import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Company from './components/Company'


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
