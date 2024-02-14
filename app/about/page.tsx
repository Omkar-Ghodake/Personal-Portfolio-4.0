import MaxWidthWrapper from '@/components/wrappers/MaxWidthWrapper'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import { GoNorthStar } from 'react-icons/go'

export const metadata: Metadata = {
  title: 'OG | About',
  description:
    "Omkar Ghodake's Personal Portfolio (Full Stack Web Developer, Blockchain App Developer)",
}

const About = () => {
  return (
    <MaxWidthWrapper className=''>
      {/* <div className='w-screen h-screen absolute inset-0 -z-50'>
        <Image
          src={
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100'
          }
          alt=''
          fill
        />
      </div> */}

      <div className='flex gap-14 mt-[20vh]'>
        <div className='bg-white border border-slate-100 rounded-xl p-6 w-1/3'>
          <div className='flex flex-col items-center justify-end bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-xl'>
            <Image
              src={'/my_full_pic_1.png'}
              alt='OG'
              width={170}
              height={400}
              className=''
            />
          </div>
        </div>

        <div className='flex flex-col w-2/3 rounded-xl'>
          <h1 className='flex justify-between items-center text-[4.2rem] font-bold font-raleway'>
            <GoNorthStar className='text-indigo-500' />
            SELF-SUMMARY
            <GoNorthStar className='text-indigo-500' />
          </h1>

          <div className='bg-white border border-slate-100 p-6 rounded-xl flex-1'>
            <h2 className='text-4xl font-semibold tracking-wide font-montserrat'>
              OMKAR ATUL GHODAKE
            </h2>

            <p className='mt-5 font-montserrat'>
              A{' '}
              <strong className='font-semibold'>
                Proficient Blockchain Developer
              </strong>{' '}
              interested in contributing expertise in{' '}
              <strong className='font-semibold'>Web</strong> and{' '}
              <strong className='font-semibold'>Blockchain Development</strong>.
              Passionate BE student with a good hands-on experience in{' '}
              <strong className='font-semibold'>
                Full Stack Web Development
              </strong>{' '}
              with various web frameworks and libraries. Deeply knowledgeable in{' '}
              <strong className='font-semibold'>
                Cryptocurrency, Decentralized Applications(DApps), Smart
                Contracts, Distributed Ledger
              </strong>{' '}
              along with slight knowledge of{' '}
              <strong className='font-semibold'>Blockchain Mining</strong> and{' '}
              <strong className='font-semibold'>Cryptography</strong>.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default About
