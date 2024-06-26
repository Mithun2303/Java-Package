const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;
const scrapy = require("./scrapy");
const Movie = require("./model");
const search = require("./search");
mongoose.connect("mongodb://127.0.0.1:27017/movie_review");
db = mongoose.connection;

db.on("error", (error) => {
    console.log(error)
})

db.once("open", () => {
    console.log("Connected to db");
})

app.use(cors());
app.use(express.json())

app.listen(8000, () => {
    console.log("Listening on port 8000");
})

app.get("/api/movie/:movie_name", async (req, res) => {
    const movie_name = req.params.movie_name;
    const data = await Movie.find({ name: movie_name });
    console.log(data.length);
    if (data.length != 0) {
        res.json(data[0]);
    }
    else {
        const resp = await scrapy(movie_name);
        console.log(resp);
        const movie = new Movie(resp);
        movie.save();
        res.json(resp);
        // console.log(resp);
        // res.json(resp);
    }
})

app.get("/api/search/:search_key", async (req, res) => {
    const search_key = req.params.search_key;
    const resp = await search(search_key);
    console.log(resp)
    res.json(resp);
})

app.post("/api/review", async (req, res) => {
    const { name, review } = req.body;
    console.log(name, review);
    let resp = await Movie.findOneAndUpdate({ name: name }, { $push: { reviews: review } });
    let r = await Movie.findOne({name:name})
    res.json(r)
})