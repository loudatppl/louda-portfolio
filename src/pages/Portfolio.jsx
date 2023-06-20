import React from 'react'

import Nav from '../components/Nav'
import Profile from '../components/Profile'
import Tabs from '../components/Tabs'

const Portfolio = () => {
  return (
    <>
        <header>
            <Nav />
            <Profile />
        </header>
        <main>
            <Tabs />
        </main>
    </>
  )
}

export default Portfolio