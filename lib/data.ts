import React from 'react'

import { BiSolidSchool } from 'react-icons/bi'
import { CgWorkAlt } from 'react-icons/cg'
import { LiaSchoolSolid } from 'react-icons/lia'
import { LuGraduationCap } from 'react-icons/lu'
import { MdOutlineWorkHistory } from 'react-icons/md'

// project images
// #1
import spryDEXsub3 from '@/public/projects/spryDEX/crypto_data_table.png'
import spryDEXsub14 from '@/public/projects/spryDEX/crypto_panel_sm.png'
import spryDEXsub4 from '@/public/projects/spryDEX/dex_buy.png'
import spryDEXsub5 from '@/public/projects/spryDEX/dex_sell.png'
import spryDEXsub6 from '@/public/projects/spryDEX/dex_txn_success.png'
import spryDEXMain from '@/public/projects/spryDEX/main.png'
import spryDEXsub1 from '@/public/projects/spryDEX/news_lg_1.png'
import spryDEXsub2 from '@/public/projects/spryDEX/news_lg_2.png'
import spryDEXsub15 from '@/public/projects/spryDEX/news_sm.png'
import spryDEXsub12 from '@/public/projects/spryDEX/profile_acc_settings.png'
import spryDEXsub11 from '@/public/projects/spryDEX/profile_personal.png'
import spryDEXsub13 from '@/public/projects/spryDEX/profile_social.png'
import spryDEXsub10 from '@/public/projects/spryDEX/txn_history.png'
import spryDEXsub8 from '@/public/projects/spryDEX/txn_inprocess_mm.png'
import spryDEXsub9 from '@/public/projects/spryDEX/txn_success.png'
import spryDEXsub7 from '@/public/projects/spryDEX/wallet-to-wallet.png'
// #2
import lotteryMain from '@/public/projects/LotteryContract/main.png'
// #3
import eComMain from '@/public/projects/Ecom/main.png'
import eComSub1 from '@/public/projects/Ecom/sub1.png'
import eComSub10 from '@/public/projects/Ecom/sub10.png'
import eComSub11 from '@/public/projects/Ecom/sub11.png'
import eComSub12 from '@/public/projects/Ecom/sub12.png'
import eComSub2 from '@/public/projects/Ecom/sub2.png'
import eComSub3 from '@/public/projects/Ecom/sub3.png'
import eComSub4 from '@/public/projects/Ecom/sub4.png'
import eComSub5 from '@/public/projects/Ecom/sub5.png'
import eComSub6 from '@/public/projects/Ecom/sub6.png'
import eComSub7 from '@/public/projects/Ecom/sub7.png'
import eComSub8 from '@/public/projects/Ecom/sub8.png'
import eComSub9 from '@/public/projects/Ecom/sub9.png'
// #4
import codeswearMain from '@/public/projects/Codeswear/main.png'
import codeswearSub1 from '@/public/projects/Codeswear/sub1.png'
import codeswearSub2 from '@/public/projects/Codeswear/sub2.png'
import codeswearSub3 from '@/public/projects/Codeswear/sub3.png'
// #5
import cryptoTrackerMain from '@/public/projects/CryptoTracker/main.png'
import cryptoTrackerSub1 from '@/public/projects/CryptoTracker/sub1.png'
// #6
import yourNotebookMain from '@/public/projects/yourNotebook/main.png'
import yourNotebookSub1 from '@/public/projects/yourNotebook/sub1.png'
import yourNotebookSub2 from '@/public/projects/yourNotebook/sub2.png'
import yourNotebookSub3 from '@/public/projects/yourNotebook/sub3.png'
import yourNotebookSub4 from '@/public/projects/yourNotebook/sub4.png'
// #7
import lostRealmsMain from '@/public/projects/LostRealms/main.png'
import lostRealmsSub1 from '@/public/projects/LostRealms/sub1.png'
import lostRealmsSub2 from '@/public/projects/LostRealms/sub2.png'
import lostRealmsSub3 from '@/public/projects/LostRealms/sub3.png'
// #8
import newsMonkeyMain from '@/public/projects/NewsMonkey/main.png'
import newsMonkeySub1 from '@/public/projects/NewsMonkey/sub1.png'
import newsMonkeySub2 from '@/public/projects/NewsMonkey/sub2.png'
import newsMonkeySub3 from '@/public/projects/NewsMonkey/sub3.png'
// #9
import textUtilitiesMain from '@/public/projects/TextUtilities/main.png'
import textUtilitiesSub1 from '@/public/projects/TextUtilities/sub1.png'
import textUtilitiesSub2 from '@/public/projects/TextUtilities/sub2.png'
import textUtilitiesSub3 from '@/public/projects/TextUtilities/sub3.png'
import textUtilitiesSub4 from '@/public/projects/TextUtilities/sub4.png'
import textUtilitiesSub5 from '@/public/projects/TextUtilities/sub5.png'
import textUtilitiesSub6 from '@/public/projects/TextUtilities/sub6.png'
import textUtilitiesSub7 from '@/public/projects/TextUtilities/sub7.png'
import textUtilitiesSub8 from '@/public/projects/TextUtilities/sub8.png'

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
    imageUrls: [
      spryDEXMain,
      spryDEXsub1,
      spryDEXsub2,
      spryDEXsub3,
      spryDEXsub4,
      spryDEXsub5,
      spryDEXsub6,
      spryDEXsub7,
      spryDEXsub8,
      spryDEXsub9,
      spryDEXsub10,
      spryDEXsub11,
      spryDEXsub12,
      spryDEXsub13,
      spryDEXsub14,
      spryDEXsub15,
    ],
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
    imageUrls: [lotteryMain],
  },
  {
    index: '2',
    title: 'e.Com',
    description:
      "\"e.Com\" is an Ecommerce website mainly focused on services offered and it functionalities such as 'Single Session Login', 'Role based Access Control', etc",
    tags: ['React', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    imageUrls: [
      eComMain,
      eComSub1,
      eComSub2,
      eComSub3,
      eComSub4,
      eComSub5,
      eComSub6,
      eComSub7,
      eComSub8,
      eComSub9,
      eComSub10,
      eComSub11,
      eComSub12,
    ],
  },
  {
    index: '3',
    title: 'Codeswear',
    description: '"Codeswear" is an Ecommerce website mainly focused on UI/UX',
    tags: ['React', 'Next.js', 'Context API', 'Tailwind'],
    imageUrls: [codeswearMain, codeswearSub1, codeswearSub2, codeswearSub3],
  },
  {
    index: '4',
    title: 'Crypto Tracker',
    description:
      'An API based web application which provides live cryptocurrencies data (using axios - react.js)',
    tags: ['React', 'Axios', 'API'],
    imageUrls: [cryptoTrackerMain, cryptoTrackerSub1],
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
    imageUrls: [
      yourNotebookMain,
      yourNotebookSub1,
      yourNotebookSub2,
      yourNotebookSub3,
      yourNotebookSub4,
    ],
  },
  {
    index: '6',
    title: 'Lost Realms',
    description: 'A Platform Game created using HTML Canvas',
    tags: ['React', 'HTML', 'CSS', 'TailwindCSS', 'HTML Canvas', 'JavaScript'],
    imageUrls: [lostRealmsMain, lostRealmsSub1, lostRealmsSub2, lostRealmsSub3],
  },
  {
    index: '7',
    title: 'News Monkey',
    description: 'API based news app which provides the latest real-time news.',
    tags: ['React', 'HTML', 'CSS', 'Bootstrap', 'API'],
    imageUrls: [newsMonkeyMain, newsMonkeySub1, newsMonkeySub2, newsMonkeySub3],
  },
  {
    index: '8',
    title: 'Text Utilities',
    description:
      'Text Utilities is an app which provides various utilities for your text. User can perform various operations such as convert text to lowercase or uppercase, count the number of characters and words and many more functions.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    imageUrls: [
      textUtilitiesMain,
      textUtilitiesSub1,
      textUtilitiesSub2,
      textUtilitiesSub3,
      textUtilitiesSub4,
      textUtilitiesSub5,
      textUtilitiesSub6,
      textUtilitiesSub7,
      textUtilitiesSub8,
    ],
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
