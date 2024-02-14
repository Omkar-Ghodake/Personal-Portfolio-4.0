'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Tooltip from '../others/Tooltip'
import MaxWidthWrapper from '../wrappers/MaxWidthWrapper'
import useOnClickOutside from '@/hooks/useOnClickOutside'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const navRef = useRef(null)

  const pathname = usePathname()

  const toggleNavbar = () => {
    navbarOpen ? setNavbarOpen(false) : setNavbarOpen(true)
  }

  useOnClickOutside(navRef, () => {
    setNavbarOpen(false)
  })

  useEffect(() => {
    setNavbarOpen(false)
  }, [pathname])

  return (
    <MaxWidthWrapper>
      <div className='flex justify-center md:my-5' ref={navRef}>
        <motion.nav
          className={`flex items-center justify-between w-full md:w-[80vw] lg:w-[50vw] md:rounded-full md:shadow-2xl fixed p-2 ${
            navbarOpen ? 'sm:border-0 md:border' : 'border'
          }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div
            className='navToggle absolute md:static right-5 z-10 md:hidden'
            onClick={toggleNavbar}
          >
            <div
              className={`flex flex-col items-center justify-center gap-[.4rem] cursor-pointer border border-gray-400 p-2 rounded-md hover:bg-[#d7d1ff] duration-150`}
            >
              <div
                className={`${
                  navbarOpen
                    ? 'w-6 h-[3px] rotate-45 origin-top-left translate-x-[4px]'
                    : 'w-4 mr-1 h-[3px]'
                } bg-black rounded-full duration-200`}
              ></div>
              <div
                className={`${
                  navbarOpen ? 'scale-0' : 'w-[1.7rem] h-[3px]'
                } bg-black rounded-full duration-200`}
              ></div>
              <div
                className={`${
                  navbarOpen
                    ? 'w-6 h-[3px] -rotate-45 origin-bottom-left translate-x-[4px]'
                    : 'w-4 ml-1 h-[3px]'
                } bg-black rounded-full duration-200`}
              ></div>
            </div>
          </div>

          <motion.div
            className='relative group w-14 h-14'
            initial={{
              scale: 0,
            }}
            animate={{
              rotate: 360 * 2,
              scale: 1,
            }}
            transition={{
              type: 'spring',
              delay: 0.4,
              duration: 0.7,
            }}
          >
            <Link href={'/'} className='navImg w-fit cursor-pointer z-10'>
              <Image
                src={'/obito_kakashi_sharingan.png'}
                alt='Sharingan'
                fill
              />
            </Link>
            <Tooltip
              content="Obito's and Kakashi's Mangekyou Sharingan"
              position='bottom'
            />
          </motion.div>

          <div
            className={`navLinks absolute md:static left-0 top-0 ${
              !navbarOpen && 'translate-y-[-100%] md:translate-y-0'
            } py-10 md:px-2 md:py-3 w-full md:w-[80%] md:rounded-full duration-200  bg-gradient-to-r from-[#ffeded] to-[#e6e2ff] opacity-95 sm:bg-inherit sm:bg-none sm:backdrop-blur-0`}
          >
            <ul className='navList flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-5 -z-10 text-lg'>
              <li className='navItem duration-200'>
                <Link
                  href={'/'}
                  className={`${
                    pathname === '/' ? 'text-black' : 'text-gray-600'
                  } rounded-full px-3 py-2`}
                >
                  <button
                    className={`hover:text-black hover:scale-110 duration-150 ${
                      pathname === '/' && 'scale-110 hover:scale-95'
                    }`}
                  >
                    Home
                  </button>
                </Link>
              </li>
              <li className='navItem'>
                <Link
                  href={'/about'}
                  className={`${
                    pathname === '/about' ? 'text-black' : 'text-gray-600'
                  } rounded-full px-3 py-2`}
                >
                  <button
                    className={`hover:text-black hover:scale-110 duration-150 ${
                      pathname === '/about' && 'scale-110 hover:scale-95'
                    }`}
                  >
                    About
                  </button>
                </Link>
              </li>
              <li className='navItem'>
                <Link
                  href={'/projects'}
                  className={`${
                    pathname === '/projects' ? 'text-black' : 'text-gray-600'
                  } rounded-full px-3 py-2`}
                >
                  <button
                    className={`hover:text-black hover:scale-110 duration-150 ${
                      pathname === '/projects' && 'scale-110 hover:scale-95'
                    }`}
                  >
                    Projects
                  </button>
                </Link>
              </li>
              <li className='navItem'>
                <Link
                  href={'/contact'}
                  className={`${
                    pathname === '/contact' ? 'text-black' : 'text-gray-600'
                  } rounded-full px-3 py-2`}
                >
                  <button
                    className={`hover:text-black hover:scale-110 duration-150 ${
                      pathname === '/contact' && 'scale-110 hover:scale-95'
                    }`}
                  >
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </motion.nav>
      </div>
    </MaxWidthWrapper>
  )
}

export default Navbar
