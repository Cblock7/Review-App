const UpcomingShows = require("./upcomingShows");
const Reviews = require("./Reviews");

UpcomingShows.hasMany(Reviews);

Reviews.belongsTo(UpcomingShows, {
  foreignKey: "show_id",
});

module.exports = { Reviews, UpcomingShows };
