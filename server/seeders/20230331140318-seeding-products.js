'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const data = [{name: 'ap 150', CategoryId: 1,createdAt: new Date(), updatedAt: new Date()}, {name: "ac 260", CategoryId: 1,createdAt: new Date(), updatedAt: new Date()}, {name: 'Box KN', CategoryId: 4,createdAt: new Date(), updatedAt: new Date()}, {name: 'Flexi', CategoryId: 2,createdAt: new Date(), updatedAt: new Date()}, {name: 'Albatros', CategoryId: 3,createdAt: new Date(), updatedAt: new Date()}]

    await queryInterface.bulkInsert("products", data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("products", null, {truncate: true, cascade: true, restartIdentity: true})
  }
};
