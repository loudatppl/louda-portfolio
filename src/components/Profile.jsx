import React, { useState } from 'react'

import { FiMail } from 'react-icons/fi'
import { 
  MdVerified, 
  MdWorkOutline, 
  MdOutlineLocationOn,
  MdCalendarMonth,
} from 'react-icons/md'

import whiteFerrari from '../assets/images/white-ferrari.jpg'
import profile from '../assets/images/profile.jpg'


const Profile = () => {
  const [following, setFollowing] = useState( 'Follow' )
  const [followerCount, setFollowerCount] = useState( 7.9 )

  const handleFollow = () => {
    if (following === 'Follow') {
      setFollowing( 'Unfollow' )
      setFollowerCount(followerCount + 0.1)
    } else {
      setFollowing( 'Follow' )
      setFollowerCount( followerCount - 0.1 )
    }
    
  }

  return (
    <section
      className='w-full flex justify-center
      mt-[60px] text-chirp text-dblack'
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
          className='flex flex-col px-4 space-y-4'
        >
          <div
            className='relative w-full md:h-[72px] h-[36px]
            flex justify-end items-center space-x-4'
          >
            <div
              className='md:w-36 absolute top-0 left-0
              rounded-[50%] md:p-1 transform -translate-y-1/2
              bg-dwhite w-24 p-[2px]'
            >
              <img 
                src={profile} 
                alt="default profile" 
                className='rounded-[50%]'
              />
            </div>
            <div
              className='rounded-[50%] p-2 border
              border-lgray cursor-pointer md:mt-0
              mt-4'
            >
              <FiMail size={18} />
            </div>
            <div
              className='bg-dgreen px-4
              rounded-2xl py-1 md:mt-0 mt-4'
            >
              <p 
                className='text-base font-broboto
                text-dwhite cursor-pointer'
                onClick={handleFollow}
              >
                {following}
              </p>
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
                className='ml-1 text-dgreen'
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
            text-dgray flex-wrap'
          >
            <div
              className='flex items-center
              space-x-1 cursor-pointer mr-4 mb-0'
            >
              <MdWorkOutline size={20} /> 
              <p>Web Developer</p>
            </div>
            <div
              className='flex items-center
              space-x-1 cursor-pointer mr-4 mb-1
              md:mb-0'
            >
              < MdOutlineLocationOn size={20} />
              <p>Manila, Philippines</p>
            </div>
            <div
              className='flex items-center
              space-x-1 cursor-pointer mr-4'
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
              0 <span className='text-dgray font-normal'> Following</span>
            </p>
            <p
              className='font-bold'
            >
              {`${followerCount}B`}
              <span className='text-dgray font-normal'> Followers</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile