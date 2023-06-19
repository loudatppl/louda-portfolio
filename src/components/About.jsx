import React from 'react'

const About = () => {
  return (
    <section
        id='about'
        className='md:px-20 md:py-20
        px-10 py-20 flex flex-col space-y-20'
    >
        <div
            className='flex justify-between'
        >
            <div
                className='space-y-10 md:w-[50%]
                w-full'
            >
                <h2
                    className='md:text-4xl font-oswald
                    text-dblack text-2xl'
                >
                    about me
                </h2>
                <div
                    className='pl-10 font-open'
                >
                    <p
                        
                    >
                        I've been captivated by the tech world, nurturing a deep passion for all things tech-related. 
                        <br />
                        My journey into web development began as a self-taught adventure, where I eagerly taught myself how to code.

                        <br />
                        <br />

                        As my skills grew, I sought opportunities to further enhance my development prowess,  
                        <br />
                        That's when I found Uplift Code Camp, a coding bootcamp that provided an immersive environment for aspiring developers like me. 
                        Surrounded by like-minded individuals and 
                        <br />
                        guided by experienced instructors.
                        

                        <br />
                        <br />

                        One of my greatest strengths is adaptability, a quality i hold dear in the fast-paced world of 
                        <br />
                        technology. The digital landscape is constantly evolving, with new languages, frameworks, and tools emerging at a
                        rapid pace. Embracing this reality, I thrive on adapting to change, eagerly    
                        <br />
                        seizing opportunities to learn and grow alongside the ever-changing tech scene.
                        
                    </p>
                </div>
            </div>
            <div className='hidden md:block'></div>
        </div>
        <div
            className='flex justify-between'
        >
            <div className='hidden md:block'></div>
            <div
                className='space-y-10 md:w-[50%] w-full'
            >
                <h2
                    className='md:text-4xl font-oswald
                    text-dblack text-2xl'
                >
                    my skills
                </h2>
                <div
                    className='pl-10 font-open flex justify-between'
                >
                    <div>
                        <h3 className='text-xl mb-6'>FRONT-END</h3>
                        <ul className=' space-y-2 text-base'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>REACT</li>
                            <li>TAILWIND</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl mb-6'>BACK-END</h3>
                        <ul className='space-y-2 text-base'>
                            <li>NODE.JS</li>
                            <li>EXPRESS.JS</li>
                            <li>MONGODB</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About