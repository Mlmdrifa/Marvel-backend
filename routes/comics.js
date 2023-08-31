require("dotenv").config();
const express = require("express");

const axios = require("axios");
const router = express.Router();

router.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(" error ===>", error.message);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
