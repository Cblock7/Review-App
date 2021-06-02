const seedReviews = require("./reviewSeeds");
const seedConcerts = require("./concertsSeeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedReviews();
  console.log("\n----- REVIEWS SEEDED -----\n");

  await seedConcerts();
  console.log("\n----- CONCERTS SEEDED -----\n");

  process.exit(0);
};

seedAll();
