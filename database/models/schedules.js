"use strict";
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define(
    "Schedule",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      scheduleDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      doctorName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      doctorSpeciality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      consultorio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      horario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  return Schedule;
};
