const router = require("express").Router();
const { Reviews, Concerts } = require("../models");

router.get("/", async (req, res) => {
  try {
    const concertData = await Concerts.findAll();
    const reviewData = await Reviews.findAll();

    const reviews = reviewData.map((reviews) => reviews.get({ plain: true }));

    const concerts = concertData.map((concerts) =>
      concerts.get({ plain: true })
    );
    res.render("homepage", { reviews, concerts });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
