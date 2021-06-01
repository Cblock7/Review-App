const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class user_reviews extends Model {}


user_reviews.init(
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