const router = require("express").Router();
const fs = require("fs")
const path = require("path")
const Reviews = require("../models/Reviews");


router.get("/", async (req, res) => {
  try {
    const moshData = await Reviews.findAll();

    const mosh = moshData.map((reviews) => reviews.get({ plain: true }));
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
