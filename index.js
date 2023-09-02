const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://DrifaM:X3v0rrA9PSVstREd@dmarvel.dxz38x6.mongodb.net/marvel"
  )
  .then(() => console.log("base connected"));

const marvelComics = require("./routes/comics");
app.use(marvelComics);

const marvelPerso = require("./routes/characters");
app.use(marvelPerso);

const authRoutes = require("./routes/authentification");
app.use(authRoutes);

app.get("/", (req, res) => {
  try {
    res.json({ message: "welcome to Marvel" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.all("*", (req, res) => {
  res.json({ message: "Page not found" });
});

app.listen(process.env.PORT, (err, res) => {
  console.log("Server has started");
});
