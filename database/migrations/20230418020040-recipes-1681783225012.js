"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Recipes", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      ammount: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      medicine: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      doctorID: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userID: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      medicineID: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dosage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Recipes");
  },
};
