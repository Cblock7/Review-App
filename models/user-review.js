const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class user_reviewsDB extends Model {}


user_reviewsDB.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      review: {
        type: DataTypes.STRING
      },
    },
    {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'user_reviews'
    }
  );