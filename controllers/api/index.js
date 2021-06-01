const router = require("express").Router();
const reviewRoutes = require("./review-routes");

router.use("/reviews", reviewRoutes);

module.exports = router;
