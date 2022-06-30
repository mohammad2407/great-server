const express = require("express");
const connect = require('./configs/db')
const movieRouter = require("./Controllers/movie.controller")
const app = express()

const PORT = process.env.PORT || 3005;

//middlewares;
app.use(express.json());

//routes
app.use('/movies', movieRouter)
// connect to mongo db;


//connecting to the port
app.listen(PORT,async() =>{

    try {
        await connect()
        console.log("listening on", PORT)
    } catch (error) {
        console.log(error.message)
    }
})