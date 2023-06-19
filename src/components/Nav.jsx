import React from 'react'
import MobileNav from './MobileNav'

const Nav = () => {
  return (
    <nav
      className='flex top-0
      left-0 right-0 md:px-20 md:py-6
      justify-between items-center px-10
      py-4 md:mb-20 mb-40'
    >
      <a 
        href="/"
        className='font-blond text-dblack
        text-xl'
      >
        louda
      </a>
      <div>
        <ul
          className='md:flex space-x-8 text-base
          font-oswald text-dblack hidden'
        >
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#work">WORK</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <MobileNav />
    </nav>
  )
}

export default Nav