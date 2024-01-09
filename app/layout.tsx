import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OG | Personal Portfolio',
  description:
    "Omkar Ghodake's Personal Portfolio (Full Stack Web Developer, Blockchain App Developer)",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-gray-50`}>
        <div className='bg-[#fbe2e3] h-[32rem] md:h-[50rem] lg:h-[32rem] w-[15rem] md:w-[18rem] lg:w-[27rem] absolute top-[10rem] lg:top-[5rem] right-[15rem] md:right-[5rem] lg:right-[12rem] blur-[10rem] rounded-full text-green-500 lg:text-red-500'></div>

        <div className='bg-[#dbd7fb] h-[32rem] md:h-[50rem] lg:h-[32rem] w-[15rem] md:w-[18rem] lg:w-[27rem] absolute top-[10rem] lg:top-[5rem] left-[15rem] md:left-[5rem] lg:left-[12rem] blur-[10rem] rounded-full text-green-500 lg:text-red-500'></div>

        {children}
      </body>
    </html>
  )
}
