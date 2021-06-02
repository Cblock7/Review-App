const router = require("express").Router();
<<<<<<< HEAD
const fs = require("fs")
const path = require("path")
const Reviews = require("../models/Reviews");
=======
const fs = require("fs");
const path = require("path");
const Reviews = require("../models/Reviews");

>>>>>>> main
// const sequelize = require('../config/connection');

router.get("/", async (req, res) => {
  try {
<<<<<<< HEAD
    res.render('homepage');
=======
    const moshData = await Reviews.findAll();

    const mosh = moshData.map((reviews) => reviews.get({ plain: true }));
    res.render("homepage");
>>>>>>> main
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
