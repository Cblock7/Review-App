const router = require("express").Router();
const { Reviews, Concerts } = require("../../models");

// Get all concerts
router.get("/", async (req, res) => {
  try {
    const findAllConcerts = await Concerts.findAll({
      order: [[{ model: Concerts }, "city", "asc"]],
      order: [[{ model: Reviews }, "name", "asc"]],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: Reviews,
          attributes: ["user_id", "name", "email", "review"],
        },
      ],
    });
    res.status(200).json(findAllConcerts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a concert by it's user_id
router.get("/:user_id", async (req, res) => {
  try {
    const findOneConcert = await Concerts.findByPk(req.params.id);

    if (!findOneReview) {
      res.status(404).json({ message: "Unable to find review with that ID" });
    }
    res.status(200).json(findOneConcert);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
