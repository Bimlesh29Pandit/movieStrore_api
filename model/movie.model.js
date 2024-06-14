const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: { type: String, require: true },
  rating: { type: Number, require: true },
  genre: { type: String, require: true },
  description: { type: String, require: true },
  release_date: { type: Date, require: true },
});

const MovieModel = mongoose.model("movie", movieSchema);

module.exports = MovieModel;
