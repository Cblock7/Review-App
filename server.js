const Sequelize = require("./config/connection");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.json("Hello world");
});

Sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}`));
});
