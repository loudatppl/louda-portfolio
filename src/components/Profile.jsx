import React from 'react'

import { FiMail } from 'react-icons/fi'
import { 
  MdVerified, 
  MdWorkOutline, 
  MdOutlineLocationOn,
  MdCalendarMonth
} from 'react-icons/md'

import whiteFerrari from '../assets/images/ferrari.jpg'
import profile from '../assets/images/profile.jpg'


const Profile = () => {
  return (
    <section
      className='w-full flex justify-center
      mt-[44px] text-chirp text-dblack'
    >
      <div
        className='flex flex-col
        justify-center'
      >
        <div
          className='w-auto'
        >
          <img 
            src={whiteFerrari} 
            alt="White Ferrari" 
            className='w-[768px]'
          />
        </div>
        <div
          className='flex flex-col px-4 space-y-2'
        >
          <div
            className='relative w-full min-h-[72px]
            flex justify-end items-center space-x-4'
          >
            <div
              className='w-36 absolute top-0 left-0
              rounded-[50%] p-1 transform -translate-y-1/2
              bg-dwhite'
            >
              <img 
                src={profile} 
                alt="default profile" 
                className='rounded-[50%]'
              />
            </div>
            <div
              className='rounded-[50%] p-2 border
              border-lgray cursor-pointer'
            >
              <FiMail size={20} />
            </div>
            <div
              className='bg-dgreen px-4
              rounded-2xl py-1'
            >
              <a 
                href="/"
                className='text-base font-broboto
                text-dwhite'
              >
                Follow
              </a>
            </div>
          </div>
          <div>
            <h2
              className='text-xl font-robotob
              font-black cursor-pointer flex 
              items-center'
            >
              Loudakris Tuppal
              <span
                className='ml-1'
              >
                <MdVerified size={20} /> 
              </span>
            </h2>
            <p
              className='font-rroboto text-dgray
              text-base cursor-pointer'
            >
              @loudatuppal
            </p>
          </div>
          <div
            className='flex text-base font-rroboto
            md:space-x-4 text-dgray flex-wrap'
          >
            <div
              className='flex items-center
              space-x-1 cursor-pointer'
            >
              <MdWorkOutline size={20} /> 
              <p>Web Developer</p>
            </div>
            <div
              className='flex items-center
              space-x-1 cursor-pointer'
            >
              < MdOutlineLocationOn size={20} />
              <p>Manila, Philippines</p>
            </div>
            <div
              className='flex items-center
              space-x-1 cursor-pointer'
            >
              < MdCalendarMonth size={20} />
              <p>Joined June 2023</p>
            </div>
          </div>
          <div
            className='flex space-x-4 text-base
            text-dblack font-rroboto'
          >
            <p
              className='font-bold'
            >
              2 <span className='text-dgray font-normal'>Following</span>
            </p>
            <p
              className='font-bold'
            >
              0 <span className='text-dgray font-normal'>Followers</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile