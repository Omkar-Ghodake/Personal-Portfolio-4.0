'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ProfilePic = () => {
  return (
    <motion.div
      className='flex justify-center p-2 bg-slate-100 w-fit mx-auto rounded-full -z-30'
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'tween', duration: 0.2 }}
    >
      <div className='relative h-36 w-36 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500'>
        <Image
          src={'/my_ppsize_0.png'}
          alt='OG'
          fill
          className='rounded-full'
        />
      </div>
    </motion.div>
  )
}

export default ProfilePic
