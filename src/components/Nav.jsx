import React from 'react'

const Nav = () => {
  return (
    <nav
        className='fixed flex top-0 left-0 right-0
        md:px-4 py-2 text-dblack bg-dwhite
        bg-opacity-50 backdrop-blur-lg justify-start 
        px-2 z-[9999]'
    >
        <h1
            className='md:text-lg font-blond
            text-base'
        >
            louda
        </h1>
    </nav>
  )
}

export default Nav