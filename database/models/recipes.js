"use strict";
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    "Recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      ammount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      medicine: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      doctorID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      medicineID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dosage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  return Recipe;
};
