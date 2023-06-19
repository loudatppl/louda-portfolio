import React from 'react'

import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'

import { motion, AnimatePresence } from 'framer-motion'




const App = () => {
  return (
    <>
      <Nav />
      <MobileNav />
      <Hero />
      <About />
      <Footer />
    </>
  )
}

export default App