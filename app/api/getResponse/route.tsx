import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server";

require('dotenv').config()

//OpenAI Configuration
const {ChatCompletionRequestMessage, Configuration, OpenAIApi} = require('openai')
const configuration = new Configuration({
    apiKey: process.env.API_KEY,
})

const openai = new OpenAIApi(configuration);

const getResponse = async (userMsg: String) => {

    const msg = [{role: "user", content: 
        userMsg
    }]

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: msg,
    })

    return completion.data.choices[0].message
}

export async function POST(request: Request) {
    const msg = await request.json()
    const reply = await getResponse(msg.userText)
    return NextResponse.json(reply)
}


