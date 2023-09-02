const express = require("express");
require("dotenv").config();

const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid2 = require("uid2");

const User = require("../models/user.js");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const users = await User.find({ email: req.body.email });
    console.log(req.body);

    // si l'utilsateur existe,
    if (users.length === 0) {
      const password = req.body.password;
      const salt = uid2(16);
      const hash = SHA256(password + salt).toString(encBase64);
      const token = uid2(16);
      const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        token,
        hash,
        salt,
      });
      await newUser.save();
      res.json({ token });
    } else {
      res.json({ message: "utilisateur existe" });
    }
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
