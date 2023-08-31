require("dotenv").config();
const express = require("express");
app.use(cors());

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
router.get("/comics", async (req, res) => {
  const title = req.query.title || "";
  const skip = req.query.skip || 0;
  const limit = req.query.limit || 100;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&title=${title}&skip=${skip}&limit=${limit}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(" error ===>", error.message);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
