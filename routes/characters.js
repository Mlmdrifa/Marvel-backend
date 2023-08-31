const express = require("express");
require("dotenv").config();
// const apiMarvel = gYZV6LLC4pLZJ70H;
const axios = require("axios");
const router = express.Router();
app.use(cors());

router.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});
router.get("/comics/:characterId", async (req, res) => {
  const name = req.query.name || "";
  const skip = req.query.skip || 0;
  const limit = req.query.limit || 100;
  try {
    const characterId = req.params.characterId;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY}&title=${name}&skip=${skip}&limit=${limit}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
