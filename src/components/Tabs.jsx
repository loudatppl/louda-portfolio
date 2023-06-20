import React from 'react'

import { Link, useLocation } from 'react-router-dom'

const Tabs = () => {
    const location = useLocation();

  return (
    <section
        className='w-full flex justify-center mt-4'
        
    >
        <div
            className='w-[768px]'
        >
            <ul
                className='flex text-dgray font-rroboto'
            >
                <li
                    className='w-1/4 text-center
                    py-4 hover:bg-lgray transition-colors
                    duration-300'
                    
                >
                    <Link 
                        to='/'
                        className={`${ 
                            location.pathname === '/' 
                            ? 'border-b-4 border-dgreen px-2 py-1' : ''
                        }`}
                    >
                        Posts
                    </Link>
                </li>
                <li
                    className='w-1/4 text-center
                    py-4 hover:bg-lgray transition-colors
                    duration-300'
                >
                    <Link 
                        to='/about'
                        className={`${ 
                            location.pathname === '/about' 
                            ? 'border-b-4 border-dgreen px-2 py-1' : ''
                        }`}
                    >
                        About
                    </Link>
                </li>
                <li
                    className='w-1/4 text-center
                    py-4 hover:bg-lgray transition-colors
                    duration-300'
                >
                    <Link 
                        to='/projects'
                        className={`${ 
                            location.pathname === '/projects' 
                            ? 'border-b-4 border-dgreen px-2 py-1' : ''
                        }`}
                    >
                        Projects
                    </Link>
                </li>
                <li
                    className='w-1/4 text-center
                    py-4 hover:bg-lgray transition-colors
                    duration-100'
                >
                    <Link 
                        to='/contact'
                        className={`${ 
                            location.pathname === '/contact' 
                            ? 'border-b-4 border-dgreen px-2 py-1' : ''
                        }`}
                    >
                        Contact
                    </Link>
                </li>
            </ul>  
        </div>
    </section>
  )
}

export default Tabs