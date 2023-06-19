import React from 'react'

import { AiOutlineGithub } from 'react-icons/ai'

import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer
        className='flex flex-col bg-dgreen
        md:px-20 px-10 py-6 text-beige space-y-10
        md:space-y-0    '
    >
        <div>
            <a
                href="/"
                className='font-blond text-xl md:hidden'
            >
                louda
            </a>
        </div>
        <div
            className='flex justify-between
            items-center mt-0 md:space-y-0'
        >
            <a 
                href="/"
                className='font-blond hidden md:block'
            >
                louda
            </a>
            <ul
                className='space-y-4 font-oswald
                text-base md:flex md:space-y-0
                md:space-x-8 items-center'
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
            <div
                className='md:flex space-x-4
                justify-center hidden'
            >
                <a href="">
                    <AiOutlineGithub size={28} />
                </a>
                <a href="">
                    <FaLinkedinIn size={28} />
                </a>
            </div>
        </div>
        <div
            className='flex space-x-4
            justify-center  md:hidden'
        >
            <a href="">
                <AiOutlineGithub size={20} />
            </a>
            <a href="">
                <FaLinkedinIn size={20} />
            </a>
        </div>
        <div
            className='flex justify-center'
        >
            <p
                className='text-sm font-oswald md:mt-10'
            >&copy; 2023 LOUDAKRIS TUPPAL</p>
        </div>
    </footer>
  )
}

export default Footer