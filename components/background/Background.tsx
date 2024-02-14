'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Background = () => {
  return (
    <motion.div
      className=''
      initial={{
        scaleY: 0,
      }}
      animate={{
        scaleY: 1,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <div className='bg-[#facbcc] h-[32rem] md:h-[50rem] lg:h-[32rem] w-[15rem] md:w-[18rem] lg:w-[27rem] absolute top-[10rem] lg:top-[5rem] right-[15rem] md:right-[5rem] lg:right-[22rem] blur-[10rem] rounded-full text-green-500 lg:text-red-500 -z-50'></div>

      <div className='bg-[#c6bffa] h-[32rem] md:h-[50rem] lg:h-[32rem] w-[15rem] md:w-[18rem] lg:w-[27rem] absolute top-[10rem] lg:top-[5rem] left-[15rem] md:left-[5rem] lg:left-[22rem] blur-[10rem] rounded-full text-green-500 lg:text-red-500 -z-50'></div>
    </motion.div>
  )
}

export default Background
