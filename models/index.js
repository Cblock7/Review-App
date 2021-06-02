const Concerts = require("./Concerts");
const Reviews = require("./Reviews");

Concerts.hasMany(Reviews);

Reviews.belongsTo(Concerts, {
  foreignKey: "concert_id",
});

module.exports = { Reviews, Concerts };
