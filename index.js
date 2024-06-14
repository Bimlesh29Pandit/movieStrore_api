const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connection = require("./config/db");
const expressRoutes = require("./routes/movie.routes");
const server = express();
server.use(express.json());
server.use("/api", expressRoutes);

const PORT = process.env.PORT;

server.get("/", (req, res) => {
  res.send("home");
});

server.listen(PORT, async () => {
  try {
    await connection;
    console.log(`server connected at port :${PORT} and DB also connected`);
  } catch (error) {
    console.log(`something went wrong`);
    console.log(error);
  }
});
