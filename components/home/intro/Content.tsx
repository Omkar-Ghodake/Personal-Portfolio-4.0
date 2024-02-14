'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Tooltip from '@/components/others/Tooltip'

const Content = () => {
  return (
    <div className='text-center flex flex-col gap-4 md:gap-10'>
      <div className='text-4xl md:text-4xl flex justify-center gap-2'>
        <motion.div
          className=''
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <b>Hello</b>
        </motion.div>
        <motion.span
          className='relative h-10 w-10'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
        >
          <Image src={'/wave_animated.gif'} alt='' fill />
        </motion.span>
      </div>

      <motion.div
        className='text-center flex flex-col gap-4 md:gap-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className='text-5xl md:text-6xl'>
          <span className='font-medium'>{"I'm"}</span>
          <strong> Omkar Ghodake</strong>
        </p>

        <div className='text-2xl'>
          <p>
            Currently working as <strong>Graduate Engineer Trainee</strong> in{' '}
            <br />
          </p>
          <div className='relative group w-fit mx-auto'>
            <Link
              href={'https://www.jio.com/platforms/'}
              target='_blank'
              className='next-link-ex relative'
            >
              <strong className='group-hover:text-red-500'>
                Jio Platforms Ltd.
              </strong>
            </Link>
            <Tooltip
              content='Jio Platforms Limited'
              position='bottom'
              className=''
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Content
