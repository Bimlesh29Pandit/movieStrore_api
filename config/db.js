const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.URL);

module.exports = connection;
