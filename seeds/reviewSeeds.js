const { Reviews } = require("../models");

const reviewsData = [
  {
    name: "Corey",
    email: "Corey@gmail.com",
    review: "Amazing!!",
    concert_id: 1,
  },
  {
    name: "Zach",
    email: "Zach@gmail.com",
    review: "Awesome!!",
    concert_id: 1,
  },
  {
    name: "Josh",
    email: "Josh@gmail.com",
    review: "Best band ever!!!",
    concert_id: 2,
  },
  {
    name: "Aaron",
    email: "AAROn@gmail.com",
    review: "I didn't like the venue",
    concert_id: 3,
  },
];

const seedReviews = () => Reviews.bulkCreate(reviewsData);

module.exports = seedReviews;
