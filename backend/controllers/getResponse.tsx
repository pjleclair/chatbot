const responseRouter = require('express').Router()
require('dotenv').config()

//OpenAI Configuration
const {ChatCompletionRequestMessage, Configuration, OpenAIApi} = require('openai')
const configuration = new Configuration({
    apiKey: process.env.API_KEY,
})
const openai = new OpenAIApi(configuration);

const getResponse = async (userMsg) => {

    const msg = [{role: "user", content: 
        userMsg
    }]

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: msg,
    })

    return completion.data.choices[0].message
}

responseRouter.post('/', async (req, res) => {
    const msg = req.body.userText
    const reply = await getResponse(msg)
    res.json(reply)
})

module.exports = responseRouter;

