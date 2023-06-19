const express = require('express')
const bodyParser = require('body-parser')

//import routes
const replyRouter = require('./controllers/getResponse.tsx')

//config server
const PORT = 3030
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/response',replyRouter)

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`)
})