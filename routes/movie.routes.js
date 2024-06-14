const express = require("express");
const MovieModel = require("../model/movie.model");
const expressRoutes = express.Router();

expressRoutes.post("/addMovie", async (req, res) => {
  try {
    const movies = req.body;
    await MovieModel.insertMany(movies);
    // await movie.save();
    res.status(200).send("Movies got add to DB");
  } catch (err) {
    res
      .status(404)
      .send(`Something went wrong data not inserted due to error ${err}`);
  }
});

expressRoutes.get("/filterBy", async (req, res) => {
  try {
    const { title, rating, sortby } = req.query;
    console.log(sortby);
    let filter = {};
    if (rating) filter.rating = rating;
    if (title) filter.title = new RegExp(title, "i");
    const movie = await MovieModel.find(filter).sort(
      sortby ? { [sortby]: 1 } : {}
    );
    // await movie.save();
    res.status(200).send(movie);
  } catch (err) {
    res.status(404).send(`movie not found or ${err}`);
  }
});

module.exports = expressRoutes;
