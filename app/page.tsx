"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { NextPage } from 'next'
import axios from 'axios'
import useSWR from 'swr'

type BotReply = ReactNode | null

const Home: NextPage = () => {

  const [userText, setUserText] = useState('')
  const [userPrompt, setUserPrompt] = useState('')
  const [botReply, setBotReply] = useState<BotReply>(null)

  const handleChat = async () => {
    setUserPrompt(userText)
    const response = await axios.post('/api/getResponse', {userText}) as {data: {content: string}}
    console.log(response)
    const responseJsx = <p
        className='border-solid border-white border-2 rounded-md p-2 whitespace-pre-wrap m-4'
      >{response.data.content}</p>
    setBotReply(
      responseJsx
    )
    setUserText('')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className='p-2'>
        Welcome! Speak to the AI using the text box below.
      </h1>
      <div>
        <div>{userPrompt}</div>
        {(botReply) && botReply}
      </div>
      <div className='flex gap-2 items-center'>
        {'> '}
        <textarea 
          value={userText}
          name='userText'
          className='flex flex-wrap overflow-visible bg-transparent border-solid border-white border-2'
          onChange={(e) => setUserText(e.target.value)}
        />
        <button onClick={handleChat}
        className='border-solid border-green-400 border-2 rounded-md p-1'
        >chat</button>
      </div>
      <Link className='m-4' href='/info/'>Info</Link>
    </main>
  )
}

export default Home
