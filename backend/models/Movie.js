const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  userData: String,
  movies: [],
});

const MovieData = mongoose.model("MovieData", MovieSchema);

module.exports = MovieData;