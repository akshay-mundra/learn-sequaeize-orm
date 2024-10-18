'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert('users', [
      {
        id: uuidv4(),
        first_name: 'Akshay',
        last_name: 'Mundra',
        email: 'ak@g.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        first_name: 'Ashu',
        last_name: 'Mundra',
        email: 'as@g.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        first_name: 'Aditya',
        last_name: 'Mundra',
        email: 'adi@g.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        first_name: 'Arpit',
        last_name: 'Mundra',
        email: 'ap@g.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('users', null, {});
  },
};
