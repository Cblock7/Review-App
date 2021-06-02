const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class UpcomingShows extends Model {}

UpcomingShows.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    venue: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "UpcomingShows",
  }
);

module.exports = UpcomingShows;
