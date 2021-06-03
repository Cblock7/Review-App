const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Reviews extends Model {}

Reviews.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // concert_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "concerts",
    //     key: "id",
    //   },
    // },
  },
  {
    //Hooks to normalize data
    hooks: {
      beforeCreate(userData) {
        userData.email = userData.email.trim().toLowerCase();
        return userData.email;
      },
      beforeUpdate(userData) {
        userData.email = userData.email.trim().toLowerCase();
        return userData.email;
      },
    },

    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "reviews",
  }
);

module.exports = Reviews;
