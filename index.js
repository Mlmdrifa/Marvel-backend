const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());

const marvelComics = require("./routes/comics");
app.use(marvelComics);

const marvelPerso = require("./routes/characters");
app.use(marvelPerso);

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

app.listen(process.env.PORT || 3000, (err, res) => {
  console.log("Server has started");
});
