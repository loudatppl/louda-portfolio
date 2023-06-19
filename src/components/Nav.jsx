import React from 'react'

const Nav = () => {
  return (
    <nav
      className='flex top-0
      left-0 right-0 md:px-20 md:py-6
      justify-between items-center px-10
      py-4'
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
          className='md:flex space-x-8 text-sm
          font-ppbook text-dblack hidden'
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
    </nav>
  )
}

export default Nav