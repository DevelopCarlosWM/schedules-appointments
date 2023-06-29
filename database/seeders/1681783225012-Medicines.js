"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Medicines",
      [
        {
          id: '8b729051-95ce-4e5c-a4b9-3ba9ae6e2351',
          name: 'Paracetamol',
          netContent: '200g',
          dateOfExpiry: new Date(),
          labId: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Medicines", null, {}),
};
