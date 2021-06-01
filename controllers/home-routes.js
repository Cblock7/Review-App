const router = require("express").Router();
const fs = require("fs")
const path = require("path")
// const sequelize = require('../config/connection');

router.get("/", async (req, res) => {
  // console.log("test");
  try {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
