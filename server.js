const { urlencoded } = require("express");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.json("Hello world");
});

app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}`));
