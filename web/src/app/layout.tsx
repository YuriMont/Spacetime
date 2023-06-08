import { ReactNode } from 'react'
import './globals.css'
import { Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

import { Copyright } from './components/Copyright'

import { Hero } from './components/Hero'
import { SignIn } from './components/Signin'
import { Profile } from './components/Profile'
import { cookies } from 'next/headers'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo construida com React, Next.js, TailwindCSS e TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAutenticated = cookies().has('token')

  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="flex flex-col sm:grid sm:h-screen sm:grid-cols-2">
          {/* Left */}
          <div className="relative flex flex-col items-start justify-between gap-4 border-r-2 border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-14 py-8 sm:overflow-hidden sm:px-28 sm:py-16">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[586px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
            {/* Stripes */}
            <div className="absolute right-2 top-0 h-full w-2 bg-stripes" />

            {isAutenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>
          {/* Right */}
          <div className="flex- flex bg-[url(../assets/bg-stars.svg)] bg-cover sm:max-h-screen sm:overflow-y-scroll">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
