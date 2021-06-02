  
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

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 14ae232ad659f95e99b71291d230359a8bfd2132
