"use strict";
module.exports = (sequelize, DataTypes) => {
  const Medicines = sequelize.define(
    "Medicines",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      netContent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfExpiry: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      labId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  return Medicines;
};
