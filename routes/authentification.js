const express = require("express");
require("dotenv").config();

const axios = require("axios");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    res.json({ message: "signup to implement" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

router.get("/login", async (req, res) => {
  try {
    res.json({ message: "signin to implement" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
