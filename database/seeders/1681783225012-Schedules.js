"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Schedules",
      [
        {
          id: '8b729051-95ce-4e5c-a4b9-3ba9ae6e2358',
          userId: 1,
          scheduleDate: new Date(),
          doctorName: 'Pepe Lopez',
          doctorSpeciality: 'Ginecologia',
          consultorio: 'Doctor Simi',
          estado: 'Edo Mex',
          horario: 'Diurno',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Schedules", null, {}),
};
