import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Background from '@/components/background/Background'

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
      <body
        className={`${inter.className} bg-slate-50 font-montserrat overflow-x-hidden`}
      >
        {/* <Background /> */}

        <Navbar />

        <div className='mt-28 z-10'>{children}</div>
      </body>
    </html>
  )
}
