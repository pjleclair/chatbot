import { NextResponse } from "next/server";

//OpenAI Configuration
const { OpenAI } = require('openai');

const openai = new OpenAI({
    apiKey: process.env.API_KEY,
});

const getResponse = async (userMsg: String) => {

    const msg = [{role: "user", content: 
        `${userMsg}`
    }]

    console.log(msg)

    const completion = await openai.chat.completions.create({
        model: "gpt-4-1106-preview",
        messages: msg,
    })

    return completion.choices[0].message
}

export async function POST(request: Request) {
    const msg = await request.json()
    const reply = await getResponse(msg.userText)
    return NextResponse.json(reply)
}


