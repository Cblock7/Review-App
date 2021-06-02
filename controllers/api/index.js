const router = require("express").Router();
const reviewRoutes = require("./review-routes");
const concertsRoutes = require("./concerts-routes");

router.use("/reviews", reviewRoutes);
router.use("/concerts", concertsRoutes);

module.exports = router;
