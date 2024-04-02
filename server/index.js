const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const scrapy = require("./scrapy");
const Movie = require("./model");
mongoose.connect("mongodb://127.0.0.1:27017/movie_review");
db = mongoose.connection;

db.on("error",(error)=>{
    console.log(error)
})

db.once("open",()=>{
    console.log("Connected to db");
})

app.use(cors());
app.use(express.json())

app.listen(8000,()=>{
    console.log("Listening on port 8000");
})

app.get("/api/:movie_name",async (req,res)=>{
    const movie_name=req.params.movie_name;
    // console.log(Movie.find({name:movie_name}));
    // console.log(db.movie.find({name:movie_name}));
    const resp = await scrapy(movie_name);
    console.log(resp);
    res.json(resp);
})

