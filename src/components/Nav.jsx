import React from 'react'

const Nav = () => {
  return (
    <nav
        className='fixed flex top-0 left-0 right-0
        md:px-6 text-dblack bg-dwhite
        bg-opacity-50 backdrop-blur-lg md:justify-start 
        px-2 z-[9999] justify-center py-4'
    >
        <h1
            className='md:text-lg font-blond
            text-base text-dgreen'
        >
            louda
        </h1>
    </nav>
  )
}

export default Nav