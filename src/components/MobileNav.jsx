import React, { useState, useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { AiOutlineGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'


const MobileNav = () => {
    const [clicked, setClicked] = useState( false )

    useEffect( () => {
      if ( clicked ) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    }, [clicked])
  
    const handleMenuClick = () => {
        setClicked( !clicked )
    }

    return (
        <>
            <AnimatePresence>
                <motion.button
                    className='flex items-center
                    cursor-pointer flex-col md:hidden
                    z-[9999] fixed top-0 right-0 mr-10
                    mt-6'
                    onClick={ handleMenuClick }
                    >
                    {clicked ? (
                        <motion.div
                            key="combinedDiv"
                            animate={{ opacity: 1, y: 10 }}
                            exit={{ opacity: 0, y: 20 }}
                            className='h-[2px] w-[25px] bg-dblack'
                        ></motion.div>
                        ) : (
                        <>
                            <motion.div
                            key="div1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 10 }}
                            exit={{ opacity: 0, y: 20 }}
                            className='h-[1px] w-[25px] bg-dblack'
                            ></motion.div>
                            <motion.div
                            key="div2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className='h-[1px] w-[25px] bg-dblack'
                            ></motion.div>
                            <motion.div
                            key="div3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 18 }}
                            exit={{ opacity: 0, y: 10 }}
                            className='h-[1px] w-[25px] bg-dblack'
                            ></motion.div>
                        </>
                        )}
                </motion.button>
            </AnimatePresence>
            <AnimatePresence>
                {clicked && (
                <motion.div
                    initial={{ opacity: 0, y: 1000 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 1000}}
                    transition={{ ease: 'easeIn', duration: 0.3 }} 
                    className='fixed top-0 left-0 bottom-0 right-0
                    bg-beige z-[999] md:hidden text-dblack'
                >
                    <div
                        className='flex items-start justify-center
                        px-10 flex-col space-y-10 h-screen'
                    >
                        <ul
                            className='font-oswald space-y-4
                            text-4xl'
                        >
                            <li>
                                <a href="/">HOME</a>
                            </li>
                            <li>
                                <a href="#about">ABOUT</a>
                            </li>
                            <li>
                                <a href="#project">PROJECT</a>
                            </li>
                            <li>
                                <a href="#contact">CONTACT</a>
                            </li>
                        </ul>

                        <div className='h-[1px] w-full bg-dblack'></div>

                        <div
                            className='flex flex-col space-y-4'
                        >
                            <div
                                className='flex flex-col font-open
                                space-y-2'
                            >
                                <h3
                                    className='text-lg'
                                >
                                    PHONE
                                </h3>
                                <p
                                    className='text-base'
                                >   
                                    <u>+63 956 473 7776</u>
                                </p>
                            </div>
                            <div
                                className='flex flex-col font-open
                                space-y-2'
                            >
                                <h3
                                    className='text-lg'
                                >
                                    EMAIL
                                </h3>
                                <p
                                    className='text-base'
                                >   
                                    <u>tuppalloudakrisa@gmail.com</u>
                                </p>
                            </div>
                            <div
                                className='flex flex-col font-open
                                space-y-2'
                            >
                                <h3
                                    className='text-lg'
                                >
                                    WHERE I WORK
                                </h3>
                                <p
                                    className='text-base'
                                >   
                                    MANILA, PHILIPPINES
                                </p>
                            </div>
                        </div>

                        <div className='h-[1px] w-full bg-dblack'></div>
                        
                        <div
                            className='space-x-4
                            justify-center flex w-full'
                        >
                            <a href="">
                                <AiOutlineGithub size={28} />
                            </a>
                            <a href="">
                                <FaLinkedinIn size={28} />
                            </a>
                        </div>
                    </div>
                  
                </motion.div>
                )}
            </AnimatePresence>

        </>
    )
}

export default MobileNav