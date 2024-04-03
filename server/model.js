const mongoose = require('mongoose');

// Define schema for the dataset
const movieSchema = new mongoose.Schema({
  name: String,
  title: String,
  synopsis: String,
  Rating: String,
  Genre: String,
  "Original Language": String,
  Director: String,
  Producer: String,
  "Release Date (Theaters)": String,
  'Rerelease Date (Theaters)': String,
  "Release Date (Streaming)":String,
  "View the collection":String,
  Runtime: String,
  Distributor: String,
  "Production Co": String,
  "Sound Mix": String,
  "cast-crew": [{
    img: String,
    name: String,
    as: String
  }],
  "where-to-watch": [{
    media: String,
    link: String
  }],
  "reviews":[String],
  thumbnail: String,
  "other-images": [String]
});

// Create a model based on the schema
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
