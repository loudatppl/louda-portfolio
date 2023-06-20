import React from 'react'

import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer
        className='w-full flex justify-center py-20 text-dblack'
    >
        <div
            className='flex flex-col w-[768px] px-4 space-y-4'
        >
            <div
                className='flex space-x-4 justify-center
                cursor-pointer'
            >
                <BsGithub size={26} />
                <BsLinkedin size={26} />
            </div>
            <div
                className='flex justify-center'
            >
                <p
                    className='text-sm cursor-pointer'
                >LOUDAKRIS TUPPAL &copy; 2023</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer