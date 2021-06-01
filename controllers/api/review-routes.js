const router = require("express").Router();
// const { Reviews } = require("../../models");

router.get("/", async (req, res) => {
  try {
    // const findAllReviews = await Reviews.findAll();
    // res.status(200).json(findAllReviews);
    res.status(200).json("Review Route Connection");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
