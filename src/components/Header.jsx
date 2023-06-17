import React from 'react'

const Header = () => {
  return (
    <header
        className='flex fixed justify-center
        top-0 left-0 right-0 py-8'
    >
        <h1
            className='font-igor
            cursor-pointer text-dblack
            flex items-start text-4xl'
        >
            <a 
                href="/"
                className='flex'
            >
                LOUDA <span className='text-base'>&copy;</span>
            </a>
        </h1>
    </header>
  )
}

export default Header