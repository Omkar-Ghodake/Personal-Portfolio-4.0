'use client'
import React, { useState } from 'react'

const NavbarToggle = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const toggleNavbar = () => {
    navbarOpen ? setNavbarOpen(false) : setNavbarOpen(true)
  }

  return (
    <div className='absolute right-5' onClick={toggleNavbar}>
      <div
        className={`flex flex-col items-center justify-center gap-[.4rem] cursor-pointer border border-gray-400 p-2 rounded-md hover:bg-gray-200 duration-150`}
      >
        <div className='w-4 ml-auto mr-1 h-[3px] bg-black rounded-full'></div>
        <div className='w-[1.6rem] h-[3px] bg-black rounded-full'></div>
        <div className='w-4 mr-auto ml-1 h-[3px] bg-black rounded-full'></div>
      </div>
    </div>
  )
}

export default NavbarToggle
