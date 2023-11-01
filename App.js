require('dotenv').config()
const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const LinkRouter = require('./routes/link')

//routes
app.get('/', (req, res) =>{
    res.send("suraj ka project")
})

app.use('/api/v1/links', LinkRouter)

const port = 3000;

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log("working on the port no 3000 ... "))
    } catch (error) {
        console.log(error)
    }
}

start()

