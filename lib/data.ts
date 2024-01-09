import React from 'react'

import { MdOutlineWorkHistory } from 'react-icons/md'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LiaSchoolSolid } from 'react-icons/lia'
import { BiSolidSchool } from 'react-icons/bi'
import { LuGraduationCap } from 'react-icons/lu'

import spryDEXImg from '@/public/spryDEX/spryDEXImg.png'
import rmtdevImg from '@/public/rmtdev.png'
import wordanalyticsImg from '@/public/wordanalytics.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Works',
    hash: '#works',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Education',
    hash: '#education',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const educationData = [
  {
    title: 'Parner Public School, Parner',
    label: 'SSC',
    location: 'Parner, Ahmednagar, Maharashtra',
    description: '1st std - 10th std',
    icon: React.createElement(LiaSchoolSolid),
    date: '2007 - 2017',
  },
  {
    title: 'Abasaheb Garware College of Science and Commerce',
    label: 'HSC',
    location: 'Erandwane, Pune, Maharashtra',
    description: '11th std - 12th std',
    icon: React.createElement(BiSolidSchool),
    date: '2017 - 2019',
  },
  {
    title: 'NBN Sinhgad Technical Institutes Campus',
    label: 'Graduation',
    location: 'Ambegaon-BK, Pune, Maharashtra',
    description: 'Bachelor of Engineering',
    icon: React.createElement(LuGraduationCap),
    date: '2019 - 2023',
  },
] as const

export const experiencesData = [
  {
    title: 'Always Sahi Consultancy',
    location: 'Pune',
    description: 'Full Stack Web Developer Intern',
    icon: React.createElement(MdOutlineWorkHistory),
    date: '08 Feb, 2022 - 08 Mar, 2022',
  },
  {
    title: 'Twowaits Technologies Pvt. Ltd',
    location: 'Pune',
    description: 'Full Stack Web Developer Intern',
    icon: React.createElement(MdOutlineWorkHistory),
    date: '15 Mar, 2022 - 15 Apr, 2022',
  },
  {
    title: 'Jio Platforms Ltd.',
    location: 'Houston, TX',
    description: 'Assistant Manager',
    icon: React.createElement(CgWorkAlt),
    date: '9 Jan, 2024 - Present',
  },
] as const

export const projectsData = [
  {
    index: '0',
    title: 'spryDEX',
    description:
      'spryDEX is a web based decentralized exchange of cryptocurrency. It works with ethereum and "spryBucks" (experimental ERC20 token). spryDEX also provides live data on cryptocurrencies, such as "value," "24-hour (hourly) change," "Total Market Cap," etc. Also, it delivers the latest news about the crypto world along with a good community support and NFT promotions. spryDEX is built on the Ethereum blockchain.',
    tags: [
      'React',
      'Next.js',
      'MongoDB',
      'Tailwind',
      'Solidity',
      'Blockchain',
      'Smart Contracts',
      'Web3',
      'Ethers.js',
      'Truffle Suite',
      'Metamask',
      'Ganache',
    ],
    imageUrls: [spryDEXImg],
  },
  {
    index: '1',
    title: 'Lottery Contract',
    description:
      'A smart contract built on top of the ethereum network. Participants can participate in the lottery contest and the manager chooses the winner randomly. Funds are automatically transferred to the winners account.',
    tags: [
      'React',
      'MongoDB',
      'Solidity',
      'Blockchain',
      'Smart Contracts',
      'Truffle HD Wallet Provider',
      'Web3',
      'Mocha',
      'Ganache',
    ],
    imageUrls: [spryDEXImg],
  },
  {
    index: '2',
    title: 'Buy It',
    description:
      "\"Buy It\" is an Ecommerce website mainly focused on services offered and it functionalities such as 'Single Session Login', 'Role based Access Control', etc",
    tags: ['React', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    imageUrls: [spryDEXImg],
  },
  {
    index: '3',
    title: 'Codeswear',
    description: '"Codeswear" is an Ecommerce website mainly focused on UI/UX',
    tags: ['React', 'Next.js', 'Context API', 'Tailwind'],
    imageUrls: [spryDEXImg],
  },
  {
    index: '4',
    title: 'Crypto Tracker',
    description:
      'An API based web application which provides live cryptocurrencies data (using axios - react.js)',
    tags: ['React', 'Axios', 'API'],
    imageUrls: [rmtdevImg],
  },
  {
    index: '5',
    title: 'yourNotebook',
    description:
      'yourNotebook is a web application which provides users to create notes. At first, user have to create their account, and then they can create notes. Users also can log in back to their account and can get their notes back. Also, iNotebook provides functions for editing and deleting the notes.',
    tags: [
      'React',
      'HTML',
      'CSS',
      'Bootstrap',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
    ],
    imageUrls: [wordanalyticsImg],
  },
  {
    index: '6',
    title: 'In the Bleak Midwinter',
    description: 'A Platform Game created using HTML Canvas',
    tags: ['React', 'HTML', 'CSS', 'TailwindCSS', 'HTML Canvas', 'JavaScript'],
    imageUrls: [wordanalyticsImg],
  },
  {
    index: '7',
    title: 'News Monkey',
    description: 'API based news app which provides the latest real-time news.',
    tags: ['React', 'HTML', 'CSS', 'Bootstrap', 'API'],
    imageUrls: [wordanalyticsImg],
  },
  {
    index: '8',
    title: 'Text Utilities',
    description:
      'Text Utilities is an app which provides various utilities for your text. User can perform various operations such as convert text to lowercase or uppercase, count the number of characters and words and many more functions.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    imageUrls: [wordanalyticsImg],
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'Git',
  'GitHub',
  'Tailwind',
  'Bootstrap',
  'Framer Motion',
  'Blockchain',
  'Solidity',
  'Smart Contracts',
  'Web3.js',
  'Java',
  'Java Servlet',
] as const
