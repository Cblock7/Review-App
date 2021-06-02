const router = require("express").Router();
const Reviews = require("../../models/Reviews");

// Get all reviews
router.get("/", async (req, res) => {
  try {
    const findAllReviews = await Reviews.findAll();
    res.status(200).json(findAllReviews);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a review by it's user_id
router.get("/:user_id", async (req, res) => {
  try {
    const findOneReview = await Reviews.findByPk(req.params.user_id);

    if (!findOneReview) {
      res.status(404).json({ message: "Unable to find review with that ID" });
    }
    res.status(200).json(findOneReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // add a review
router.post("/", async (req, res) => {
  try {
    const createdReview = await Reviews.create({
      name: req.body.name,
      email: req.body.email,
      review: req.body.review,
    });
    
    res.status(200).json(createdReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a review by it's user_id
router.put("/:user_id", async (req, res) => {
  try {
    const updatedReview = await Reviews.update(req.body, {
      where: { user_id: req.params.user_id },
    });
    res.status(200).json(updatedReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a review by it's user_id
router.delete("/:user_id", async (req, res) => {
  try {
    const deletedReview = await Reviews.destroy({
      where: { user_id: req.params.user_id },
    });
    if (!deletedReview) {
      res.status(404).json({ message: "Unable to find post with that ID" });
    }
    res.status(200).json(deletedReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
