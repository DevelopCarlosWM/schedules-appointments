"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Recipes",
      [
        {
          id: '8b729051-95ce-4e5c-a4b9-3ba9ae6e2355',
          ammount: 2000,
          medicine: 'Paracetamol',
          doctorID: '8b729051-95ce-4e5c-a4b9-3ba9ae6e2354',
          userID: 1,
          medicineID: 1,
          dosage: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Recipes", null, {}),
};
