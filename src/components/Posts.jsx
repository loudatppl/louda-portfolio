import React from 'react'

import { MdVerified } from 'react-icons/md'

import profile from '../assets/images/profile.jpg'
import thankYou from '../assets/images/giphy.gif'

const Posts = () => {
  return (
    <section
        className='w-full flex justify-center
        mt-10'
    >
        <div
            className='flex flex-col w-[768px]
            px-4'
        >
            <div
                className='flex font-rroboto text-dblack
                flex-row'
            >
                <div
                    className='mr-2 items-center'
                >
                    <img 
                        src={profile} 
                        alt="profile"
                        className='md:w-20 w-32 rounded-[50%]' 
                    />
                </div>
                <div
                    className='flex flex-col'
                >
                    <div
                        className='flex space-x-1 mb-2'
                    >
                        <h2
                            className='font-robotob flex text-lg'
                        >
                            Loudakris Tuppal
                            <span
                                className='ml-1 text-dgreen'
                            >
                                <MdVerified className='md:block hidden' size={24} />
                                <MdVerified className='md:hidden' size={20} />  
                            </span>
                        </h2>
                        <p>@loudatuppal</p>
                        <p>·</p>
                        <p>6/20/23</p>
                    </div>
                    <div>
                        <p
                            className='mb-4 text-base font-rroboto'
                        >
                            Thank you for visiting my portfolio, and i hope
                            you enjoy exploring my work. If you have any questions
                            or would like to discuss potential collaborations,
                            please don't hesitate to get in touch.
                        </p>
                        <div
                            className='border rounded-lg border-lgray'
                        >
                            <img 
                                src={thankYou} 
                                alt="Thank You" 
                                className='w-full h-full rounded-lg'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Posts