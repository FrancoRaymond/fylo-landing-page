import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Productivity from './components/Productivity'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Productivity />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
