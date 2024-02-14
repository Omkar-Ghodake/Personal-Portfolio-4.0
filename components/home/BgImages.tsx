'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const BgImages = () => {
  const isSmallDevice = useMediaQuery(600)

  useEffect(() => {}, [isSmallDevice])

  return (
    <>
      <div>
        <div className='left'>
          <div className='top'></div>

          <div className='bottom'></div>
        </div>

        <div className='right'>
          <div className='top'></div>

          <div className='bottom'></div>
        </div>
      </div>
    </>
  )
}

export default BgImages
