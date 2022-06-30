const express = require('express');

const Movie =  require("../Models/MovieModel");

const route = express();

// posting Data;

route.post("", async(req,res) =>{

    try {
        const movie = await Movie.create(req.body);
        res.status(200).send(movie);
    } catch (error) {
        res.status(500).send("Some error Occured",error.message)
    }
})

// getting data ;

route.get('', async(req,res) =>{
    try {
        const movie  = await Movie.find().lean().exec();
         res.status(200).send(movie)
    } catch (error) {
        res.status(500).send("some error occured", error.message)
    }
})

//getting data by id;
route.get("/:movieId", async(req,res) =>{
    try {
        const movie = await Movie.findById(req.params.movieId).lean().exec();
        res.status(200).send(movie)
    } catch (error) {
        res.status(500).send("some error occured ", error)
    }
})

//update by Id:

route.patch("/:movieId", async(req, res) =>{
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.movieId, req.body,{new:true}).lean().exec();
        res.status(200).send(movie)
    } catch (error) {
        res.status(500).send("some error occured ", error)
    }
})
// delete the data by id;

route.delete("/:movieId", async(req,res) =>{
    try {
        const movie = await Movie.findByIdAndDelete(req.params.movieId).lean().exec();
        res.status(200).send(movie)
    } catch (error) {
        res.status(500).send("Some error Occured", error)
    }
})

module.exports = route