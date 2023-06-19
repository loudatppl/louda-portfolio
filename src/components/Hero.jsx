import React from 'react'

import whiteFerrari from '../assets/images/white-ferrari.jpg'
import testarossa from '../assets/images/testarossa.jpg'

const Hero = () => {
  return (
    <section
        id='home'
        className='w-full relative mt-0 text-dblack
        mb-20'
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
            className='absolute md:top-[30%] 
            md:left-[43.8%] mt-20 top-[50%]'
        >
            <div
                className='flex flex-col items-start
                md:items-end px-10'
            >
                <h1
                    className='md:text-8xl text-6xl font-oswald'
                >
                    Loudakris Tuppal
                </h1>

                <h2
                    className='font-open mr-20 md:text-xl 
                    text-base md:mt-10 mt-8'
                >
                    WEB DEVELOPER
                </h2>
            </div>
        </div>
    </section>
  )
}

export default Hero