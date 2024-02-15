const express = require("express");
const MovieData = require("../models/Movie");
const router = express.Router();


router.get("/data", async (req, res) => {
  const { userData } = req.query;
  try {
    const moviesData = await MovieData.findOne({ userData });
    if (!moviesData) {
      return res.json({ message: "movies not found" });
    }
    res.json(moviesData.movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server not reponding" });
  }
});


router.post("/add", async (req, res) => {
  const { userData, movie } = req.body;
  try {
    let moviesData = await MovieData.findOne({userData});
    if (!moviesData) {
      let movieArray=[movie]
      moviesData = new MovieData({ userData, movies: movieArray });
    } else {
      moviesData.movies.push(movie);
    }
    await moviesData.save();
    res.json(moviesData.movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server not reponding" });
  }
});

module.exports = router;