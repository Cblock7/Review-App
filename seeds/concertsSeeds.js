const { Concerts } = require("../models");

const concertData = [
  {
    date: "July 4th, 2021",
    venue: "The BlueBird",
    city: "Denver",
  },
  {
    date: "June 20th, 2021",
    venue: "The Marquis",
    city: "Denver",
  },
];

const seedConcerts = () => Concerts.bulkCreate(concertData);

module.exports = seedConcerts;
