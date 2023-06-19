import React, { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'


const MobileNav = () => {
    const [clicked, setClicked] = useState( false )

    const handleMenuClick = () => {
        setClicked( !clicked )
    }

    return (
        <>
            <AnimatePresence>
                <motion.button
                    className='flex items-center
                    cursor-pointer flex-col md:hidden
                    z-[9999]'
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
                    className='fixed w-full h-screen flex
                    flex-col justify-end bg-oxford
                    pb-6 bottom-0 left-0 px-6
                    inset-0 pt-20 md:hidden z-[999] bg-beige'
                >
                    <div 
                        className='mb-8'
                    >
                        <ul
                        className='text-off-white
                        font-ppbook text-2xl space-y-6'
                        >
                            <li>
                                <a href="#" onClick={handleMenuClick}>HOME</a>
                            </li>
                            <li>
                                <a href="#about" onClick={handleMenuClick}>ABOUT</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={handleMenuClick}>PROJECTS</a>
                            </li>
                        </ul>          
                    </div>
                    <motion.div
                        initial={{ scaleX: 0, transformOrigin: '0%' }} 
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8 }}
                        className='bg-dblack w-auto h-[1px]
                        relative'
                    >

                    </motion.div>
                    <footer
                        className='grid grid-cols-3 w-full mt-8'
                    >
                        <div
                        className='col-span-2'
                        >
                            <h3
                                className='text-xs text-off-white
                                font-ppbook'
                            >
                                WHERE I WORK
                            </h3>
                            <p
                                className='text-base text-off-white
                                font-ppbook mt-2'
                            >Manila, Philippines</p>
                        <div className=' mt-6'>
                        <h3
                            className='text-xs text-off-white
                            font-ppbook mt-4'
                        >
                            PHONE
                        </h3>
                            <p
                            className='text-base text-off-white
                            font-ppbook mt-2'
                            >
                            <u>+63 956 473 7776</u>
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h3
                            className='text-xs text-off-white
                            font-ppbook mt-4'
                            >
                            GET IN TOUCH
                            </h3>
                            <p
                                className='text-base text-off-white
                                font-ppbook mt-2'
                            >
                                <u>tuppalloudakrisa@gmail.com</u>
                            </p>
                        </div>
                        </div>
                        <div className='flex justify-center items-end'>
                            <ul 
                            className='text-off-white
                            font-ppbook text-sm space-y-2'
                            >
                            <li>
                                <a href="https://github.com/loudatppl">GitHub</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/loudakris-tuppal-79b333258/">LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/loudatppl">Twitter</a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </motion.div>
                )}
            </AnimatePresence>

        </>
    )
}

export default MobileNav