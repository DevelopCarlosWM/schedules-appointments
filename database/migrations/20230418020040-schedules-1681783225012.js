"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Schedules", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      scheduleDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      doctorName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      doctorSpeciality: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      doctorSpeciality: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      consultorio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      horario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Schedules");
  },
};
