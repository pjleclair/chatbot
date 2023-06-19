"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import axios from 'axios'

type BotReply = ReactNode | null

const Home = () => {

  const [userText, setUserText] = useState('')
  const [botReply, setBotReply] = useState<BotReply>(null)

  const handleChat = async () => {
    const response = await axios.post('/api/response', {userText}) as {data: {content: string}}
    console.log(response)
    const responseJsx = <p className='border-solid border-white border-2 rounded-md p-2'>{response.data.content}</p>
    setBotReply(
      responseJsx
    )
    setUserText('')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Welcome! Speak to the Oracle using the text box below.
      </h1>
      <div>
        {(botReply) && botReply}
      </div>
      <div className='flex gap-2 items-center'>
        {'> '}
        <input 
          value={userText}
          name='userText'
          className='flex flex-wrap overflow-visible bg-transparent border-solid border-white border-2'
          onChange={(e) => setUserText(e.target.value)}
        />
        <button onClick={handleChat}
        className='border-solid border-green-400 border-2 rounded-md p-1'
        >chat</button>
      </div>
      <Link href='/pages/'>New Page</Link>
    </main>
  )
}

export default Home
