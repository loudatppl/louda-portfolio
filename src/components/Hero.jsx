import React from 'react'

import whiteFerrari from '../assets/images/white-ferrari.jpg'
import testarossa from '../assets/images/testarossa.jpg'

const Hero = () => {
  return (
    <section
        id='home'
        className='w-full relative mt-2'
    >
        <div
            className='md:w-[50%] w-[80%]'
        >
            <img 
                src={whiteFerrari} 
                alt="White Ferrari" 
                className='w-full'
            />

        </div>
        <div
            className='md:absolute md:top-[30%] 
            md:left-[43.8%] mt-20'
        >
            <div
                className='flex flex-col items-start
                md:items-end px-10'
            >
                <h1
                    className='md:text-8xl text-6xl font-oswald
                    text-dblack'
                >
                    {/* Loudakris <span className='hidden md:block'>&nbsp;Tuppal</span> */}
                    Loudakris Tuppal
                </h1>
                {/* <h1
                    className='md:hidden text-6xl font-oswald
                    text-dblack mt-4'
                >
                    Tuppal
                </h1> */}
                <h2
                    className='text-dblack font-open
                    mr-20 md:text-xl text-base md:mt-10 mt-8'
                >
                    WEB DEVELOPER
                </h2>
            </div>
        </div>
    </section>
  )
}

export default Hero