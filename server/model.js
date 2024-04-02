const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const movieSchema = new Schema({
  name: String,
  title: String,
  synopsis: String,
  Genre: String,
  "Original Language": String,
  Director: String,
  Producer: String,
  Writer: String,
  "Release Date (Theaters)": String,
  Runtime: String,
  "Production Co": String,
  "cast-crew": [{
    img: String,
    name: String,
    as: String
  }],
  "where-to-watch": [{
    hulu: String
  }],
  thumbnail: String,
  "other-images": [String]
});

// Create the model
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
