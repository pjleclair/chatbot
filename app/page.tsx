"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Home = () => {

  const [userText, setUserText] = useState('')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Welcome! Speak to the Oracle using the text box below.
      </div>
      <div></div>
      <div>
        {'> '}
        <input 
          value={userText}
          name='userText'
          className='bg-transparent border-solid border-white border-2'
          onChange={(e) => setUserText(e.target.value)}
        />
      </div>
      <Link href='/pages/'>New Page</Link>
    </main>
  )
}

export default Home
