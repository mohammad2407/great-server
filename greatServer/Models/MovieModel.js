const mongoose = require("mongoose");


const Movie_Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    rating:{type:Number, required:true},
    cast:{type:Array, required:true},
    genre:{type:String, required:true},
    releaseDate:{type:Date,required:true}
})


const Movie  = mongoose.model("movies", Movie_Schema)
module.exports = Movie