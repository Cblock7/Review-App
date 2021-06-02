const { Reviews } = require("../models");

const reviewsData = [
  {
    name: "Corey",
    email: "Corey@gmail.com",
    review: "Amazing!!",
  },
  {
    name: "Zach",
    email: "Zach@gmail.com",
    review: "Awesome!!",
  },
  {
    name: "Josh",
    email: "Josh@gmail.com",
    review: "Best band ever!!!",
  },
];

const seedReviews = () => Reviews.bulkCreate(reviewsData);

module.exports = seedReviews;
