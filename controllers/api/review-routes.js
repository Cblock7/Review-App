const router = require("express").Router();
const Reviews = require("../../models/Reviews");

router.get("/", async (req, res) => {
  console.log("hello");
  try {
    const findAllReviews = await Reviews.findAll();
    res.status(200).json(findAllReviews);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
