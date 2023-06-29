"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Doctors",
      [
        {
          id: '8b729051-95ce-4e5c-a4b9-3ba9ae6e2354',
          name: 'Pepe',
          materno: 'Lopez',
          paterno: 'Palacios',
          doctorSpeciality: 'Ginecologia',
          cedula: '123456789',
          email: 'pepe.test@gmail.com',
          telefono: '5566889900',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Doctors", null, {}),
};
