const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const Reviews = require("../models/Reviews");

// const sequelize = require('../config/connection');

router.get("/", async (req, res) => {
  // console.log("test");
  try {
    const moshData = await Reviews.findAll();

    const mosh = moshData.map((reviews) => reviews.get({ plain: true }));
    res.render("homepage", mosh);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
