const mongoose = require('mongoose');

const connect = () =>{
    return mongoose.connect("mongodb+srv://Mohammadali:Mohammadali123@Movies.g4tqhqr.mongodb.net/MoviesData")
}

module.exports = connect;