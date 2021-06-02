const router = require("express").Router();
const fs = require("fs")
const path = require("path")
const Reviews = require("../models/Reviews");
// const sequelize = require('../config/connection');

router.get("/", async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
